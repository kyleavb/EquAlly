import React, { Component } from 'react';
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT, VERIFY_USER } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'
import Login from '../Login'

const socketUrl = "http://localhost:5000"

const mapStateToProps = state => {
  return{ state }
}

class Layout extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			socket: null,
			user: null,
		}
    this.setUser = this.setUser.bind(this)
	}

	componentWillMount() {
		this.initSocket()
	}
	componentDidMount(){
    const {socket} = this.state
    var username = this.props.state.username
		if(!this.props.user){
      socket.emit(VERIFY_USER, username, this.setUser)
		}
	}
	// Connect to and initializes the socket.
	initSocket(){
		const socket = io()
		socket.on('connect', ()=>{
			console.log("Connected");
		})
		this.setState({socket})
	}

	// Sets the user property in state
	setUser(user){
    console.log('setUser State', this.state)
		const {socket} = this.state

		socket.emit(USER_CONNECTED, user);
    console.log('this is the user', user)
		this.setState({user: user.user.name})
    // this.setState({user})
    console.log('post state', this.state)
	}

	// Sets the user property in state to null.
	// logout = ()=>{
	// 	const { socket } = this.props.state
	// 	socket.emit(LOGOUT)
	// 	this.props.startChat({socket:null})
	// }

	render() {
		const { socket, user } = this.state
		return (
			<div className="container">
			{
				!this.state.user ?
					<Login />
				:
					<ChatContainer socket={socket} user={user}/>
			}
			</div>
		);
	}
}
export default connect(mapStateToProps)(Layout)
