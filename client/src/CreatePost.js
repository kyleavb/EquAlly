import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'react-materialize';
import { connect } from 'react-redux'
import axios from 'axios'

const mapStateToProps = state => {
  return{ state }
}

class CreatePost extends Component {
	constructor(props){
		super(props)

		this.state={
			userId: '',
			title: '',
			content: ''
		}
		this.titleChange = this.titleChange.bind(this)
		this.contentChange = this.contentChange.bind(this)
		this.submitAction = this.submitAction.bind(this)
	}

	componentDidMount(){
		this.setState({userId: this.props.state.userId})
	}

	titleChange(e){
		let title = e.target.value
		this.setState({title})
	}

	contentChange(e){
		let content = e.target.value
		this.setState({content})
	}

	submitAction(e){
		e.preventDefault()
		let {userId, title, content} = this.state
		
	}

	render() {
		return(
			<div>
				<div className='row cyan darken-2'>
					<div className='col s12 m12 l8 offset-l2'>
						<h1 className='white-text blogs-title'>Add Post</h1>
					</div>
				</div>

				<Row>
				<div className='col s12 m8 l8 offset-m2 offset-l2'>
					<Row>
						<div className="textarea-container col s12">
							<label htmlFor='journal'>Enter title: </label>
							  <input name='journal' type='text' onChange={this.titleChange} value={this.state.title}></input>
						</div>
					</Row>
					<Row>
						<div className="textarea-container col s12 journal-container">
							  <textarea name='journal' onChange={this.contentChange}></textarea>
							<div className="textarea-size"></div>
						</div>
					</Row>
					<Row>
						<Input s={12} type='select' className='white-text' label="Pick a category:" defaultValue='Opinions' onChange={this.selectChange}>
				         	<option value="" disabled selected>Choose your option</option>
						    <option value="1">LGBTQIA+</option>
							<option value="2">Mental Health</option>
							<option value="3">Opinions</option>
							<option value="3">Events</option>
						  </Input>
					</Row>
					<Row>
						<div className='center col s12 m4 l4 offset-m4 offset-l4'>
							<br/>
							<a className='btn-large col s12 waves-effect yellow darken-2 white-text' href='/post/create' onClick={this.submitAction}>Submit Blog Entry</a>
						</div>
					</Row>
				</div>
				</Row>

			</div>
		)

	}

}



export default connect(mapStateToProps)(CreatePost)
