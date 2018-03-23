import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'react-materialize';


class CreatePost extends Component {
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
							  <input name='journal' type='text'></input>
						</div>
					</Row>
					<Row>
						<div className="textarea-container col s12 journal-container">
							  <textarea name='journal'></textarea>
							<div className="textarea-size"></div>
						</div>
					</Row>
					<Row>
						<div className='center col s12 m4 l4 offset-m4 offset-l4'>
							<br/>
							<a className='btn-large col s12 waves-effect yellow darken-2 white-text' href='/chat'>Submit Blog Entry</a>
						</div>
					</Row>
				</div>
				</Row>

			</div>
		)

	}

}



export default CreatePost;