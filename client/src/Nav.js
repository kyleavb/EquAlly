import React, {Component} from 'react';
import { Navbar, NavItem, Dropdown } from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Logo from './img/equally-logo-sm.png';
import Home from './Home';
import Profile from './Profile';
import LoginTest from './TestFiles/LoginTest'
import AllBlogs from './AllBlogs';
import Chat from './Chat';
import Resources from './Resources';
import About from './About';



var logo = <img src={Logo} alt=''/>

class Nav extends Component {
	render(){
		return(
			<Router>
			<div>
				<Navbar brand={logo} className='cyan lighten-2' right>
					<NavItem href='/'>Home</NavItem>
          			<NavItem href='/logintest'>Test Logins</NavItem>
					<NavItem href='/profile'>Profile</NavItem>
					<NavItem href="/auth/logout">Log Out</NavItem>
					<Dropdown trigger={
				    <NavItem>Navigate</NavItem>
				  	}>
					  <NavItem href='/chat'>Live Chat</NavItem>
					  <NavItem href='/resources'>Resources</NavItem>
					  <NavItem href='/blog'>Blog</NavItem>
					  <NavItem href='/about'>About Us</NavItem>
					</Dropdown>
				</Navbar>

				<Route exact path='/' render={() => <Home />} />
		        <Route path='/profile' render={() => <Profile />} />
		        <Route path='/about' render={() => <About />} />
		        <Route path='/blog' render={() => <AllBlogs />} />
		        <Route path='/chat' render={() => <Chat />} />
		        <Route path='/resources' render={() => <Resources />} />
           		<Route path='/logintest' render={() => <LoginTest />} />

				</div>
			</Router>
		)
	}
}
export default Nav
