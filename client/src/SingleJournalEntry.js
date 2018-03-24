import React, { Component } from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return{ state }
}

class SingleJournalEntry extends Component { 
	render() {
		return(
			<Row>
				<div className='col s12 m8 offset-m2'>
					<h2>Journal Title</h2>
					<p>Journal Entry Date</p>
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
		)
	}
}

export default connect(mapStateToProps)(SingleJournalEntry)