import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

class Profile extends Component {

	render() {

		return(
			<div>
				<Row className='cyan darken-3'>
					<Col s={12} m={8} l={6} offset={'m2 l3'}><h3 className='white-text'>Welcome, nerd.</h3></Col>
				</Row>
				<Row>
					<div class='center col s12 m8 l6 login offset-m2 offset-l3'>
						<i className='material-icons large grey-text text-lighten-1'>account_circle</i>
						{/*Put whether or not homie is logged in */}
					</div>
				</Row>
			</div>

		) 

	}

}

export default Profile;