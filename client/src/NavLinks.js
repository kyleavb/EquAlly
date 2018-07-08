import React, {Component} from 'react';
import axios from 'axios';
import { Navbar, Dropdown } from 'react-materialize';
import { Link } from 'react-router-dom';
import Logo from './img/equally-logo-sm.png';
import { connect } from 'react-redux'
import {liftUser} from './action/actions'

var logo = <img src={Logo} alt=''/>

const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
  return{
		liftUser: (userInfo) => dispatch(liftUser(userInfo)),
  }
}

class NavLinks extends Component {

	constructor(props){
		super(props);
		this.state={
			loggedIn: false
		}
		this.logOut = this.logOut.bind(this)
	}

	componentDidMount(){
    var token = localStorage.getItem('equallyToken')
    if(token === 'undefined' || token === null || token === '' || token === undefined){
      localStorage.removeItem('equallyToken')
    }else{
      axios.post('/auth/me/from/token', {
        token: token
      }).then( result => {
        localStorage.setItem('equallyToken', result.data.token)
				this.props.liftUser(result.data.user);
				this.setState({loggedIn: true})
      }).catch( err => console.log('Error on reauthenticating', err))
    }
	}
	
	logOut(e){
		e.preventDefault();
		localStorage.removeItem('equallyToken');
		this.props.liftUser({})
		this.setState({loggedIn: false})
	}

	render() {
		console.log(this.state)
    	let {userId, ally, admin, username} = this.props.state
			let login = userId ? <li><Link onClick={this.logOut} to='/logout'>Log Out</Link></li> : <li><Link to='/login'>Log In</Link></li>
	    let profile = userId ? <li><Link to='/profile'>{username}s Profile</Link></li> : ''
	    let blogPost = ally ?  <li><Link to='/blog/add'>New Blog Post</Link></li> : ''
	    let adminPage = admin ? <li><Link to='/'>Admin</Link></li> : ''
	    let chatAccess = userId ? <li><Link to='/chat'>Live Chat</Link></li> : ''
			let navigate = userId ? <Dropdown trigger={<li><a href='#!'>Navigate</a></li>}>
																	{chatAccess}
																	{blogPost}
																	{profile}
																	{adminPage}
																</Dropdown>
																:
																<li><Link to='/signup'>Sign up</Link></li>
			return(
      	<Navbar brand={logo} className='cyan lighten-2 right'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/blog'>Blog</Link></li>
					<li><Link to='/resources'>Resources</Link></li>
					<li><Link to='/about'>About Us</Link></li>
					{navigate}	
					{login}
				</Navbar>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)
