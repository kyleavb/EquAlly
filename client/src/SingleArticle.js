import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import Comment from './Comment';

class SingleArticle extends Component {

	render() {

		return(
			<div>
			<Row>
				<div className='col s12 m8 offset-m2'>
					<h2>Article Title</h2>
					<p>by <a className='pink-text text-lighten-3' href='#'>Author Name</a></p>
					<br/>
					<p className='article-body col s12 m10 offset-m1'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</Row>
			<Row>
				<div className='col s12 m8 offset-m2'>
					<h4>Comments</h4>
					<Comment />
					<Comment />
				</div>
			</Row>
			</div>
		)

	}

}


export default SingleArticle;