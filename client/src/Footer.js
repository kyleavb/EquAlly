import React from 'react';
import { Footer } from 'react-materialize';

export default () => (


	<Footer copyrights="&copy; 2018 Copyright"
	  moreLinks={
	    <a className="white-text right" href="#!">More Links</a>
	  }
	  links={
	    <ul>
	      <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
	      <li><a className="grey-text text-lighten-3" href="/profile">Profile</a></li>
	      <li><a className="grey-text text-lighten-3" href="/resources">Resources</a></li>
	      <li><a className="grey-text text-lighten-3" href="/blog">Blog</a></li>
	      <li><a className="grey-text text-lighten-3" href="/about">About Us</a></li>
	      <li><a className="grey-text text-lighten-3" href="/auth/logout">Log Out</a></li>
	    </ul>
	  }
	  className='cyan lighten-2'>
	    <h5 className="white-text">Terms of Service</h5>
	    <p className="grey-text text-lighten-4">Please read our terms of service <a className='pink-text text-lighten-3' href='http://www.chilis.com'>here</a> and be a decent human being and treat others with respect. Why is this so hard for some people oh my god?</p>
	</Footer>


)
