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
		return(
			<div>
				<Row>
					<div className='col s12 m8 offset-m2'>
						<h2>{this.props.state.temp.title}</h2>
						<p>by <a className='pink-text text-lighten-3' href='#'>Author Name</a></p>
						<br/>
						<p className='article-body col s12 m10 offset-m1'>{this.props.state.temp.content}</p>
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
