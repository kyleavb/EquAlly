import React, {Component} from 'react';
import { Row } from 'react-materialize';

class JournalEntryTeaser extends Component {

	render() {
		return(
			<Row className='journal-entry-teaser-container'>
				<i className='yellow-text text-darken-2 material-icons medium left'>receipt</i>
				<h6><a href='/'>Journal Entry Date</a></h6>
				<span>Journal Entry Teaser. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
				<br/>
			</Row>
		)
	}
}

export default JournalEntryTeaser;
