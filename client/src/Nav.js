import React, {Component} from 'react';
import { Navbar, NavItem, Dropdown } from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
					<Link to='/'><NavItem>Home</NavItem></Link>
    			<Link to='/logintest'><NavItem>Test Logins</NavItem></Link>
					<Link to='/profile'><NavItem href='/profile'>Profile</NavItem></Link>
					<Link to='/auth/logout'><NavItem href="/auth/logout">Log Out</NavItem></Link>
					<Dropdown trigger={
				    <NavItem>Navigate</NavItem>
				  	}>
					  <Link to='/chat'><NavItem href='/chat'>Live Chat</NavItem></Link>
					  <Link to='/resources'><NavItem href='/resources'>Resources</NavItem></Link>
					  <Link to='/blog'><NavItem href='/blog'>Blog</NavItem></Link>
					  <Link to='/about'><NavItem href='/about'>About Us</NavItem></Link>
					</Dropdown>
				</Navbar>
				<Route exact path='/' render={() => <Home />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/blog' render={() => <AllBlogs />} />
        <Route path='/chat' render={() => <Chat />} />
        <Route path='/resources' render={() => <Resources />} />
     		<Route path='/logintest' render={() => <LoginTest stateLift={this.props.stateLift}/>} />
				</div>
			</Router>
		)
	}
}
export default Nav
