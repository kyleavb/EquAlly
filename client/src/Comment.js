import React, {Component} from 'react';
import { Row } from 'react-materialize';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return{ state }
}

class Comment extends Component {

	render() {
		console.log(this.props)

		return(
			<div className='col s12 m8 l8'>
				<a className='pink-text text-lighten-3' href='#'>{this.props.state.username}</a>
				<p className='comment-body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</div>
		)

	}

}

export default connect(mapStateToProps)(Comment);