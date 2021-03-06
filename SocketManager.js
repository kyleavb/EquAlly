const io = require('./server').io

const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED,
		LOGOUT, COMMUNITY_CHAT, MESSAGE_RECEIVED, MESSAGE_SENT,
		TYPING, PRIVATE_MESSAGE  } = require('./client/src/Events')

const { createUser, createMessage, createChat } = require('./client/src/Factories')

let connectedUsers = { }

let communityChat = createChat()

module.exports = function(socket){

	// console.log("Socket Id:" + socket.id);

	let sendMessageToChatFromUser;
	let sendTypingFromUser;

	//Verify Username
	socket.on(VERIFY_USER, (nickname, ally, callback)=>{
		if(isUser(connectedUsers, nickname)){
			console.log('first')
			callback({ isUser:true, user:null })
		}else{
			console.log('second')
			callback({ isUser:false, user:createUser({name:nickname, socketId:socket.id, ally})})
		}
	})

	//User Connects with username
	socket.on(USER_CONNECTED, (user)=>{
		console.log('In the USER_CONNECTED event in SocketManager', user)
		user.socketId = socket.id
		connectedUsers = addUser(connectedUsers, user)
		// socket.user = user
		sendMessageToChatFromUser = sendMessageToChat(user.user.name, user.user.ally)
		sendTypingFromUser = sendTypingToChat(user.name)
		io.emit(USER_CONNECTED, connectedUsers)
		// console.log(connectedUsers);

	})

	//User disconnects
	socket.on('disconnect', ()=>{
		if("user" in socket){
			connectedUsers = removeUser(connectedUsers, socket.user.name)

			io.emit(USER_DISCONNECTED, connectedUsers)
			// console.log("Disconnect", connectedUsers);
		}
	})


	//User logsout
	socket.on(LOGOUT, ()=>{
		connectedUsers = removeUser(connectedUsers, socket.user.name)
		io.emit(USER_DISCONNECTED, connectedUsers)
		// console.log("Disconnect", connectedUsers);

	})

	//Get Community Chat
	socket.on(COMMUNITY_CHAT, (callback)=>{
		// console.log(callback)
		callback(communityChat)
	})

	socket.on(MESSAGE_SENT, ({chatId, message, user})=>{
		sendMessageToChatFromUser(chatId, message, user)
		console.log('This is MESSAGE_SENT on SocketManager', chatId, message)
	})

	socket.on(TYPING, ({chatId, isTyping})=>{
		sendTypingFromUser(chatId, isTyping)
	})

	socket.on(PRIVATE_MESSAGE, ({receiver, sender})=>{
		if (receiver in connectedUsers) {
			const newChat = createChat({ name:`${receiver} & ${sender}`, user:[receiver, sender] })
			const receiverSocket = connectedUsers[receiver].socketId
			socket.to(receiverSocket).emit(PRIVATE_MESSAGE, newChat)
			socket.emit(PRIVATE_MESSAGE, newChat)
		}
	})

}

// Returns a function that will take a chat id and a boolean isTyping
// and then emit a broadcast to the chat id that the sender is typing
function sendTypingToChat(user){
	return (chatId, isTyping)=>{
		io.emit(`${TYPING}-${chatId}`, {user, isTyping})
	}
}


// Returns a function that will take a chat id and message
// and then emit a broadcast to the chat id.
function sendMessageToChat(sender, ally){
	console.log('This is sendMessageToChat on SocketManager', sender)
	return (chatId, message)=>{
		io.emit(`${MESSAGE_RECEIVED}-${chatId}`, createMessage({message, sender, ally}))
	}
}

function sendMessageToChatFromUser(chatId, message, sender){
	console.log('This is sendMessageToChatFromUser on SocketManager', sender)
	return (chatId, message)=>{
		io.emit(`${MESSAGE_RECEIVED}-${chatId}`, createMessage({message, sender}))
	}
}

// Adds user to list passed in.
function addUser(userList, user){
	let newList = Object.assign({}, userList)
	newList[user.name] = user
	return newList
}

// Removes user from the list passed in.
function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}

// Checks if the user is in list passed in.
function isUser(userList, username){
  	return username in userList
}
