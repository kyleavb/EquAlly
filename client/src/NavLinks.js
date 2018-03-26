import React, {Component} from 'react';
import { Navbar, Dropdown } from 'react-materialize';
import axios from 'axios'
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

	linkClick(e, route){
    e.preventDefault()
    console.log('clicked', e.target.href)
		switch(route){
			case 'get':{
				axios.get(e.target.href)
				.then(response => {
					console.log(response);
				}
			)}
			case 'post':{
				axios.post(e.target.href)
				.then(response => {
					console.log(response)
				})
			}
			default: console.log('needs work')
		}
  }

	render() {
    	let {userId, ally, admin, username} = this.props.state
		let login = userId ? <li><Link to='/logout'>Log Out</Link></li> : <li><Link to='/login'>Log In</Link></li>
	    let profile = userId ? <li><Link to='/profile'>{username}s Profile</Link></li> : ''
	    let blogPost = ally ?  <li><Link to='/blog/add'>New Blog Post</Link></li> : ''
	    let adminPage = admin ? <li><Link to='/'>Admin</Link></li> : ''
	    let chatAccess = userId ? <li><Link to='/chat'>Live Chat</Link></li> : ''
		return(
      <Navbar brand={logo} className='cyan lighten-2 right'>
		<li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/about'>About Us</Link></li>
				<Dropdown trigger={
    	<li><a href='#!'>Navigate</a></li>
			  	}>
          {chatAccess}
          {blogPost}
  				{profile}
          {adminPage}
				</Dropdown>
        {login}
			</Navbar>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)
