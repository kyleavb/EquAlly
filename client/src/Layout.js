import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from './TestFiles/Events';
import LoginForm from './TestFiles/LoginForm';

const socketUrl = "http://localhost:5000"


class Layout extends Component {
  constructor(props){
      super(props)
      this.state = {
        socket: null,
        user: null
      }
    }

  componentWillMount() {
    this.initSocket()
  }

  // Connect to and initializes the socket.
  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      console.log(`Connected`)
    })
    this.setState({ socket })
  }

  // Sets the user property in state
  setUser = user => {
    const { socket } = this.state
    socket.emit(USER_CONNECTED)
    this.setState({ user })
  }

  // Sets the user property in state to null
  logout = () => {
    const { socket } = this.state
    socket.emit(LOGOUT)
    this.setState({ user: null })
  }

  render() {
    const { socket } = this.state

    return (
      <div className='container'>
        <LoginForm socket={socket} setUser={this.setUser} />
      </div>
    )
  }
}


export default Layout;
