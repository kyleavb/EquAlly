import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Navbar from './Nav';
import Footer from './Footer';
import io from 'socket.io-client';


class Layout extends Component {
  constructor(props){
      super(props)
      this.state = {
        socket: null
      }
    }

  componentWillMount() {
    this.initSocket()
  }

  // Connect to and the initializes the socket.
  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connection', () => {
      console.log(`Connected`)
    })
    this.setState({ socket })
  }

  render() {
    const { title } = this.props

    return (
      <div className='container'>
        {title}
      </div>
    )
  }
}


export default Layout;
