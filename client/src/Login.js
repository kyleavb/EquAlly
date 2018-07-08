import React, {Component} from 'react';
import { Row, Col } from 'react-materialize';
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
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    };

	handleSubmit(e){
		e.preventDefault();
		axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then( result => {
			localStorage.setItem('equallyToken', result.data.token)
			console.log(result.data.user)
            this.props.liftUser(result.data.user)
        }).catch( err => {console.log(err)})
	}

	render() {
		console.log('here', this.props)
		return(
			// <div>
			// 	<Row className='cyan darken-3'>
			// 		<Col s={12} m={8} l={6} offset={'m2 l3'}><h3 className='white-text'>Log In!</h3></Col>
			// 	</Row>
			// 	<Row className='center'>
			// 		<div className='col s12 m8 l6 login offset-m2 offset-l3'>
			// 			<div className='col s12'>
			// 				<i className='material-icons large grey-text text-lighten-1'>account_circle</i>
			// 				<p>We take our users' privacy and safety very seriously, so we only offer logging in via Facebook or Google. We want to make sure you're a real person!</p>
			// 			    <a className='btn waves-effect yellow darken-2 col s12 ' href='#'>Facebook</a>
			// 			    <br/>
			// 			    <br/>
			// 			    <a className='btn waves-effect yellow darken-2 col s12 ' href='/auth/google' custom={random} onClick={this.fakeLogin}>Google</a>
            //     <br/>
			// 			    <br/>
			// 			    <a className='btn waves-effect yellow darken-2 col s12 ' href='/auth/fakelogin' custom={random} onClick={this.fakeLogin}>Super Real Login</a>
			// 		    </div>
			// 		</div>
			// 	</Row>
			// </div>
		<div className='row'>
			<form className="col s12 m8 l8 offset-m2 offset-l2">
				<h1>Log In!</h1>
				<div className="row">
					<div className="input-field col s6">
						<i className="material-icons prefix">email</i>
						<input name="email" type="email" className="validate" onChange={this.handleChange}/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field col s6">
						<i className="material-icons prefix">vpn_key</i>
						<input name="password" type="password" className="validate" onChange={this.handleChange}/>
						<label htmlFor="password">Password</label>
					</div>
				</div>
				<div className="row">
					<button className="btn waves-effect waves-light col s6 m4 l4 offset-s3 offset-m4 offset-l4 yellow darken-2" type="submit" name="action" onClick={this.handleSubmit}>Log In!
						<i className="material-icons right">account_box</i>
					</button>
				</div>
			</form>
		</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
