import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'
import { connect } from 'react-redux';
import { startChat } from '../action/actions';

const socketUrl = "http://localhost:5000"

const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
  return{
    startChat: chat => dispatch(startChat(chat)),
  }
}
class Layout extends Component {

	constructor(props) {
	  super(props);
		this.initSocket = this.initSocket.bind(this)
	}

	componentWillMount() {
		this.initSocket()
	}

	// Connect to and initializes the socket.
	initSocket(){
		const socket = io(socketUrl)
		socket.on('connect', ()=>{
			console.log("Connected");
		})
		this.props.startChat({socket})
	}

	// Sets the user property in state
	setUser = (user)=>{
		const { socket } = this.props.state
		socket.emit(USER_CONNECTED, user);
	}

	// Sets the user property in state to null.
	// logout = ()=>{
	// 	const { socket } = this.props.state
	// 	socket.emit(LOGOUT)
	// 	this.props.startChat({socket:null})
	// }

	render() {
		const { title } = this.props
		const { socket, username } = this.props.state
		return (
			<div className="container">
				<ChatContainer socket={socket} user={username} logout={this.logout}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
