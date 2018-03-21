import React, {Component} from 'react';
import { Row, Col } from 'react-materialize';

class Resources extends Component {

	render() {

		return(
			<Row>
				<div>
				<Col s={12} m={8} l={8} offset='m2 l2' className='resources-row'>
					<Col s={6} m={6} l={6} className='resources-list cyan lighten-5'>
						<h4><i className='material-icons medium yellow-text text-darken-2 inline'>flag</i>Resources</h4>
						<ul className='browser-default grey-text resources-ul'>
							<li><a href='/'>This is a link</a></li>
							<li><a href='/'>This is a link</a></li>
							<li><a href='/'>This is a link</a></li>
							<li><a href='/'>This is a link</a></li>
						</ul>
					</Col>
					<Col s={6} m={6} l={6} className='map'>
						<img src='http://vignette4.wikia.nocookie.net/halo/images/a/a5/Blood_gulch.jpg/revision/20091020035023' alt='halo duh'/>
					</Col>
				</Col>
				</div>
			</Row>
		)

	}


}

export default Resources;
