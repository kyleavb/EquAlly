import React, {Component} from 'react';
import { Navbar, Dropdown, NavItem } from 'react-materialize';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Logo from './img/equally-logo-sm.png';


var logo = <img src={Logo} alt=''/>

class NavLinks extends Component {
	render() {
		return(
			<Navbar brand={logo} className='cyan lighten-2 right'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/logintest'>Test Logins</Link></li>
				<li><Link to='/profile'>Profile</Link></li>
				<li><Link to='/auth/logout'>Log Out</Link></li>
				<Dropdown trigger={
			    	<NavItem>Navigate</NavItem>
			  	}>
				  <li><Link to='/chat'>Live Chat</Link></li>
				  <li><Link to='/resources'>Resources</Link></li>
				  <li><Link to='/blog'>Blog</Link></li>
				  <li><Link to='/about'>About Us</Link></li>
				</Dropdown>
			</Navbar>
		)
	}
}

export default NavLinks;