import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login'
import AllBlogs from './AllBlogs';
import Chat from './Chat';
import Resources from './Resources';
import About from './About';
import NavLinks from './NavLinks';
import SingleArticle from './SingleArticle';
import CreatePost from './CreatePost';
import {connect} from 'react-redux'

class Nav extends Component {

	render(){
		return(
  		<div>
  			<NavLinks/>
  		</div>
		)
	}
}
export default Nav;
