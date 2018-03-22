import React, {Component} from 'react';
import { Input, Icon, Row, Col } from 'react-materialize';
import {connect} from 'react-redux'
import {liftUser, addComment} from './action/actions'
import axios from 'axios';

const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
  return{
		liftUser: (userInfo) => dispatch(liftUser(userInfo)),
		addComment: (commentData) => dispatch(addComment(commentData))
  }
}

class CommentForm extends Component {

	constructor(props) {
		super(props)
		this.handleAddComment = this.handleAddComment.bind(this)
	}

	handleAddComment(e){
		e.preventDefault()
    	console.log('this is from the comment spot =' + e.target.value)
    	// post 2 route

    	// route should add comment & add user 2 comment

    	// should also find user, push new comment 2 comments

    	// send back as res

		// let userAt = e.target.getAttribute("custom");
	 //    axios.post('/comment/create', {
		// 		num: userAt
		// 	}).then(res => {
		// 		this.props.liftUser(res.data)
		// 	}).then(res =>{
		// 		console.log(this.props.state)
		// 	}).catch(error => {
		// 	    console.log('here is the error response ' + error.response)
		// 	});
  	}


	render() {
		return(
				<div>
				    <Input s={12} type='textarea' id="comment" className="materialize-textarea" value={this.props.value} label='Enter comment here...'>
				    	<Icon className='cyan-text text-lighten-2'>create</Icon>
				    </Input>
					<button className="btn waves-effect waves-light col s12 m6 offset-m3 yellow darken-2" type="submit" name="action" onClick={this.handleAddComment} >Add Comment</button>
				</div>
			)

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)