const uuidv4 = require('uuid/v4')

// Creates a user.
const createUser = ({name = "", socketId = null, ally = false} = {})=>{
	return{
		id:uuidv4(),
		name,
		socketId,
		ally
	}
}

// Creates a messages object.
const createMessage = ({message = "", sender = "", ally = false} = { })=>(
		{
			id:uuidv4(),
			time:getTime(new Date(Date.now())),
			message,
			sender,
			ally
		}
	)

// Creates a Chat object
const createChat = ({messages = [], name = "Community", users = []} = {})=>(
	{
		id:uuidv4(),
		name,
		messages,
		users,
		typingUsers:[]
	}
)

// Returns a string represented in 24hr time i.e. '11:30', '19:30'
const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
	createMessage,
	createChat,
	createUser
}
