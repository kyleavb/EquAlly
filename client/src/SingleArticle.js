import React, {Component} from 'react';
import {Row, Col, Button} from 'react-materialize';
import Comment from './Comment';
import CommentForm from './CommentForm';
import {connect} from 'react-redux';
import {liftUser} from './action/actions';

const mapStateToProps = state => {
	return { state }
}

class SingleArticle extends Component {

	render() {
		console.log('~~~~~props', this.props)
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
				<Row>
					<div className="input-field col s12 m6 l6 offset-m2 offset-l2">
						<CommentForm />
					</div>
				</Row>
			</div>
		)

	}

}

export default connect(mapStateToProps)(SingleArticle);
