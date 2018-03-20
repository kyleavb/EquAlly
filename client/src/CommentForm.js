import React, {Component} from 'react';
import { Input, Icon, Row } from 'react-materialize';

class CommentForm extends Component {

	render() {
		return(
				<div>
				    <Input type='textarea' id="comment" className="materialize-textarea" label='Enter comment here...'><Icon className='cyan-text text-lighten-2'>create</Icon></Input>
					<button className="btn waves-effect waves-light col s12 m2 l2 offset-m3 offset-l3 yellow darken-2" type="submit" name="action">Add Comment</button>
				</div>
			)

	}
}

export default CommentForm;