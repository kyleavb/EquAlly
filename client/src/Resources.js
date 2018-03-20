import React, {Component} from 'react';
import { Row, Col, Button } from 'react-materialize';

class Resources extends Component {

	render() {

		return(
			<Row className='resources-row'>
				<Col s={12} m={8} l={8} offset='m2 l2'>
					<Col s={6} m={6} l={6} className='resources-list'>
						<h4>Resources</h4>
						<ul className='browser-default'>
							<li><a href='#'>This is a link</a></li>
							<li><a href='#'>This is a link</a></li>
							<li><a href='#'>This is a link</a></li>
							<li><a href='#'>This is a link</a></li>
						</ul>
					</Col>
					<Col s={6} m={6} l={6} className='map'>
						<img src='http://vignette4.wikia.nocookie.net/halo/images/a/a5/Blood_gulch.jpg/revision/20091020035023' alt='halo duh'/>
					</Col>
				</Col>
			</Row>
		)

	}


}

export default Resources;