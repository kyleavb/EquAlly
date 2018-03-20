import React, {Component} from 'react';
import { Input, Icon, Row, Col } from 'react-materialize';

class CommentForm extends Component {

	render() {
		return(
				<div>
				    <Input s={12} type='textarea' id="comment" className="materialize-textarea" label='Enter comment here...'><Icon className='cyan-text text-lighten-2'>create</Icon></Input>
					<button className="btn waves-effect waves-light col s12 m6 offset-m3 yellow darken-2" type="submit" name="action">Add Comment</button>
				</div>
			)

	}
}

export default CommentForm;