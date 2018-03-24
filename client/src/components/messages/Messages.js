import React, { Component } from 'react';

export default class Messages extends Component {
	constructor(props) {
	  super(props);

		this.scrollDown = this.scrollDown.bind(this)
	}

	scrollDown(){
		const { container } = this.refs
		container.scrollTop = container.scrollHeight
	}

	componentDidMount() {
		this.scrollDown()
		console.log('I am an ally in Messages?', this.props.ally)
	}

	componentDidUpdate(prevProps, prevState) {
		this.scrollDown()
	}

	render() {
		const { messages, user, typingUsers, ally } = this.props
		console.log('messages', messages)
		console.log('user', user)
		console.log('typingUsers', typingUsers)
		console.log("tell me what", typeof user)
		return (
			<div ref='container'
				className="thread-container">
				<div className="thread">
					{
						messages.map((mes)=>{
							return (
								<div
									key={mes.id}
									className={`message-container ${mes.sender === user && 'right'} ${ally === false && mes.ally === true && 'ally'}`}
								>
									<div className="time">{mes.time}</div>
									<div className="data">
										<div className="message">{mes.message}</div>
										<div className="name">{mes.sender}</div>
									</div>
								</div>

								)
						})
					}
					{
						// typingUsers.map((name)=>{
						// 	return (
						// 		<div key={name} className="typing-user">
						// 			{`${name} is typing . . .`}
						// 		</div>
						// 	)
						// })
					}
				</div>
			</div>
		);
	}
}
