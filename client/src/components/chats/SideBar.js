import React, { Component } from 'react';
import image from '../../img/support-icon.png';

export default class SideBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			receiver:""
		}
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const { receiver } = this.state
		const { onSendPrivateMessage } = this.props

		onSendPrivateMessage(receiver)
	}

	render(){
		const { chats, activeChat, user, setActiveChat, logout } = this.props
		const { receiver } = this.state
		return (
			<div id="side-bar">
					<div className="current-user">
						<span>Welcome, {user}!</span>
					</div>
					<div className='instructions'>
						<h4>How does this work?</h4>
						<p className='grey-text'>You're connected in this chat to an ally who can help. Say hello!</p>
					</div>
					<div className='row'>
						<div className='col s12'>
							<img src={image} className='chatto' alt='support icon'/>
						</div>
					</div>
			</div>
		);

	}
}
