import React, {Component} from 'react';
import { Row, Col } from 'react-materialize';
import Map from './Map';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return{ state }
}

class Resources extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      query: this.props.state.zipcode
	    }
	    this.handleChange = this.handleChange.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
	    this.setState({query: event.target.value});
	}

	handleSubmit(event) {
	    console.log('a search query was submitted: ' + this.state.query);
	    event.preventDefault();
	}

	render() {

		return(
			<Row>
				<div>
				<Col s={12} m={8} l={8} offset='m2 l2' className='resources-row'>
					<Col s={12} m={12} l={6} className='resources-list cyan lighten-5'>
					<h4><i className='material-icons medium yellow-text text-darken-2 inline'>flag</i>Resources</h4>
						<Row className='center'>
						 <form onSubmit={this.handleSubmit}>
						 <label htmlFor='search'>Search here...</label>
				          <input type='text' value={this.state.query} onChange={this.handleChange} className='center'/>

				          <input type='submit' className='btn waves-effect pink lighten-2 white-text' />
				        </form>
				        </Row>
				        <Row>
				        	<p>If you're having trouble thinking of what you may need, here's a list of helpful search queries: </p>
				        	<ul className='resources-ul center'>
				        		<li>LGBT healthcare</li>
				        		<li>Trans healthcare</li>
				        		<li>Women's health</li>
				        		<li>LGBT youth care</li>
				        		<li>Youth counseling</li>
				        		<li>ACLU location</li>
				        	</ul>
				        </Row>
					</Col>
					<Col s={12} m={12} l={6} className='map'>
						<Map query={this.state.query} />
					</Col>
				</Col>
				</div>
			</Row>
		)

	}


}

export default connect(mapStateToProps)(Resources)
