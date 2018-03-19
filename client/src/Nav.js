import React, {Component} from 'react';
import { Navbar, NavItem, Dropdown } from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Logo from './img/equally-logo-sm.png';
import Home from './Home';

var logo = <img src={Logo} alt=''/>

class Nav extends Component {

	render(){
		return(
			<Router>
			<div>
				<Navbar brand={logo} className='cyan lighten-2' right>
					<NavItem href='/'>Home</NavItem>
					<NavItem onClick={this.props.linkClick} href='/profile'>Profile</NavItem>
					<NavItem onClick={this.props.linkClick} href="/auth/logout">Log Out</NavItem>
					<Dropdown trigger={
				    	<NavItem>Navigate</NavItem>
				  	}>
					  <NavItem onClick={this.props.linkClick} href='/chat'>Live Chat</NavItem>
					  <NavItem onClick={this.props.linkClick} href='/resources'>Resources</NavItem>
					  <NavItem onClick={this.props.linkClick} href='/blog'>Blog</NavItem>
					  <NavItem onClick={this.props.linkClick} href='/about'>About Us</NavItem>
					</Dropdown>
				</Navbar>
				<Route exact path='/' render={() => <Home />} />
				</div>
			</Router>
		)
	}
}
export default Nav
