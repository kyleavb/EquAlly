import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Chat extends Component {

	render() {
		return(

			<Row>
				<Col s={12} m={8} l={8} offset='m2 l2' className='red'>
					chat will go in here 
				</Col>
			</Row>

		)
	}
}

export default Chat;