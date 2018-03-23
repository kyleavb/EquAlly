import React, {Component} from 'react';
import { Input, Icon, Row, Col } from 'react-materialize';
import {connect} from 'react-redux'
import {liftUser, addComment} from './action/actions'
import axios from 'axios';
import bodyParser from 'body-parser';

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

		this.state = {
			comment: '',

		}

		this.handleAddComment = this.handleAddComment.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleAddComment(e){
		e.preventDefault()
    	console.log('this is from the comment spot = ' + this.state.comment)
    	//YOU WILL NEED TO PASS USER INFO AND POST INFO
 	    axios.post('/comment/create', {
			comment: this.state.comment
		}).then(res => {
			this.props.liftUser(res.data)
		}).then(res =>{
			console.log(this.props.state)
		}).catch(error => {
		    console.log('here is the error response ' + error.response)
		});
  	}

  	handleChange(e) {
  		console.log(e.target.value);	
  		this.setState({
  			comment: e.target.value
  		})    
	    
  	}


	render() {
		return(
				<div className='row'>
					<form onSubmit={this.handleAddComment} className='col s12'>
					    <Input s={12} type='textarea' id="comment" className="materialize-textarea col 12" label='Enter comment here...' value={this.props.fuck} onChange={this.handleChange}>
					    	<Icon className='cyan-text text-lighten-2'>create</Icon>
					    </Input>
					    <br/><br/><br/>
						<button className="btn waves-effect waves-light col s12 m6 offset-m3 yellow darken-2" type="submit" name="action" >Add Comment</button>
					</form>
				</div>
			)
	}

	
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)