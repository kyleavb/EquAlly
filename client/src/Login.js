import React, {Component} from 'react';
import { Row, Col, Button } from 'react-materialize';

class Login extends Component {

	render() {

		return(
			<div>
				<Row className='cyan darken-3'>
					<Col s={12} m={8} l={6} offset={'m2 l3'}><h3 className='white-text'>Log In!</h3></Col>
				</Row>
				<Row>
					<div className='center col s12 m8 l6 login offset-m2 offset-l3'>
						<i className='material-icons large grey-text text-lighten-1'>account_circle</i>
						<p>We take our users' privacy and safety very seriously, so we only offer logging in via Facebook or Google. We want to make sure you're a real person!</p>
						<br/>
					    <Button className='yellow darken-2' waves='light' node='a' href='#'>Log In with Facebook</Button>
					    <br/>
					    <br/>
					    <Button className='yellow darken-2' waves='light' node='a' href='#'>Log In with Google</Button>
					</div>
				</Row>
			</div>
		)

	}
}


export default Login;
