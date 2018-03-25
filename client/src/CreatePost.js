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
			content: '',
      category: ''
		}
		this.titleChange = this.titleChange.bind(this)
		this.contentChange = this.contentChange.bind(this)
		this.submitAction = this.submitAction.bind(this)
    this.categoryChange = this.categoryChange.bind(this)
	}

	componentDidMount(){
		this.setState({userId: this.props.state.userId})
    console.log('UserId', this.props.state.userId)
	}

	titleChange(e){
		let title = e.target.value
		this.setState({title})
    console.log('Title', this.state.title)
	}

	contentChange(e){
		let content = e.target.value
		this.setState({content})
    console.log('Content', this.state.content)
	}

  categoryChange(e) {
    let category = e.target.value
    this.setState({category})
    console.log('Category', this.state.category)
  }


	submitAction(e){
		e.preventDefault()
		let {userId, title, content, category} = this.state
    let post = {userId, title, content, category}
    console.log(post)
		axios.post('/post/create', post)
      .then(res => {
        this.setState({
          title: '',
    			content: '',
          category: ''
        })
      })
        .catch( err => {
          console.log(err)
        })
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
							  <textarea name='journal' onChange={this.contentChange} value={this.state.content}></textarea>
							<div className="textarea-size"></div>
						</div>
					</Row>
					<Row>
						<Input s={12} type='select' className='white-text' label="Pick a category:" defaultValue='Choose Your Option' value={this.state.category} onChange={this.categoryChange}>
						    <option value="LGBTQIA+">LGBTQIA+</option>
							<option value="Mental Health">Mental Health</option>
							<option value="Opinions">Opinions</option>
							<option value="Events">Events</option>
						  </Input>
					</Row>
					<Row>
						<div className='center col s12 m4 l4 offset-m4 offset-l4'>
							<br/>
              {
                (this.state.userId !== '' && this.state.title !== '' &&
                    this.state.content !== '' && this.state.category !== '')
                ?
                  <a className='btn-large col s12 waves-effect yellow darken-2 white-text' href='/post/create' onClick={this.submitAction}>Submit Blog Entry</a>
                :
                  <a className='btn-large col s12 waves-effect yellow darken-2 white-text' href='/post/create' onClick={this.submitAction} disabled>Submit Blog Entry</a>
              }
						</div>
					</Row>
				</div>
				</Row>

			</div>
		)

	}

}



export default connect(mapStateToProps)(CreatePost)
