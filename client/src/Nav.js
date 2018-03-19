import React, {Component} from 'react';
import { Navbar, NavItem, Dropdown } from 'react-materialize';
import Logo from './img/equally-logo-sm.png';

var logo = <img src={Logo} alt=''/>

class Nav extends Component {

	render(){
		return(
		<Navbar brand={logo} className='cyan lighten-2' right>
			<NavItem href='/'>Home</NavItem>
			<NavItem href='/profile'>Profile</NavItem>
			<NavItem href="/auth/logout">Log Out</NavItem>
			<Dropdown trigger={
		    	<NavItem>Navigate<i className="material-icons right">arrow_drop_down</i></NavItem>
		  	}>
			  <NavItem href='/chat'>Live Chat</NavItem>
			  <NavItem href='/resources'>Resources</NavItem>
			  <NavItem href='/blog'>Blog</NavItem>
			  <NavItem href='/about'>About Us</NavItem>
			</Dropdown>

		</Navbar>
	)}
}
export default Nav
