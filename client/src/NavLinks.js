import React, {Component} from 'react';
import { Navbar, Dropdown } from 'react-materialize';
import { Link } from 'react-router-dom';
import Logo from './img/equally-logo-sm.png';
import { connect } from 'react-redux'

var logo = <img src={Logo} alt=''/>

const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
  return{

  }
}

class NavLinks extends Component {

	render() {
    	let {userId, ally, admin, username} = this.props.state
		let login = userId ? <li><Link to='/logout'>Log Out</Link></li> : <li><Link to='/login'>Log In</Link></li>
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
