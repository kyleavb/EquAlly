import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-materialize';
import axios from 'axios';
import {connect} from 'react-redux'
import {liftUser} from './action/actions'

const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
  return{
		liftUser: (userInfo) => dispatch(liftUser(userInfo)),
  }
}

class Login extends Component {
	constructor(props){
		super(props)
		this.fakeLogin = this.fakeLogin.bind(this)
	}

	fakeLogin(e){
		e.preventDefault()
		let userAt = e.target.getAttribute("custom");
    axios.post(e.target.href, {
			num: userAt
		}).then(res => {
			this.props.liftUser(res.data)
		}).then(res =>{
			console.log(this.props.state)
		}).catch(error => {
		    console.log('here is the error response ' + error.response)
		});
  }

	render() {

		let random = Math.floor(Math.random() * 6);
		return(
			<div>
				<Row className='cyan darken-3'>
					<Col s={12} m={8} l={6} offset={'m2 l3'}><h3 className='white-text'>Log In!</h3></Col>
				</Row>
				<Row className='center'>
					<div className='col s12 m8 l6 login offset-m2 offset-l3'>
						<div className='col s12'>
							<i className='material-icons large grey-text text-lighten-1'>account_circle</i>
							<p>We take our users' privacy and safety very seriously, so we only offer logging in via Facebook or Google. We want to make sure you're a real person!</p>
						    <a className='btn waves-effect yellow darken-2 col s12 ' href='#'>Facebook</a>
						    <br/>
						    <br/>
						    <a className='btn waves-effect yellow darken-2 col s12 ' href='/auth/fakelogin' custom={random} onClick={this.fakeLogin}>Google</a>
					    </div>
					</div>
				</Row>
			</div>
		)

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
