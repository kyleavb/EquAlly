import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavLinks from './NavLinks';


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
