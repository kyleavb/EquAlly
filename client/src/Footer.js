import React from 'react';
import { Footer } from 'react-materialize';
import { Link } from 'react-router-dom';

export default () => (


	<Footer copyrights="&copy; 2018 Copyright"
	  // moreLinks={
	  //   <a className="white-text right" href="#!">More Links</a>
	  // }
	  links={
	    <ul>

	      <li><Link className="grey-text text-lighten-3" to='/'>Home</Link></li>
	      <li><Link className="grey-text text-lighten-3" to='/profile'>Profile</Link></li>
	      <li><Link className="grey-text text-lighten-3" to='/resources'>Resources</Link></li>
	      <li><Link className="grey-text text-lighten-3" to='/blog'>Blog</Link></li>
	      <li><Link className="grey-text text-lighten-3" to='/about'>About Us</Link></li>
	      <li><Link className="grey-text text-lighten-3" to='/logout'>Log Out</Link></li>
	    </ul>
	  }
	  className='cyan lighten-2'>
	    <h5 className="white-text">Terms of Service</h5>
	    <p className="grey-text text-lighten-4">Please read our terms of service <a className='pink-text text-lighten-3' href='http://www.chilis.com'>here</a> and be sure to treat fellow users of this site with respect. We are all here for the same reason: to get help from those who can help, or offer help to those in need.</p>
	</Footer>


)
