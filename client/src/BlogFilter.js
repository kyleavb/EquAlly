import React, {Component} from 'react';
import { Input } from 'react-materialize';
import { Link } from 'react-router-dom';
import axios from 'axios'
import{connect} from 'react-redux'

const mapStateToProps = state => {
  return{ state }
}

class BlogFilter extends Component {

	handleFilterList(){

	}

	render() {
		let addBlog = this.props.state.ally ?
				<div className='row center'>
					<div className='input-field col s3'>
						<Link to='/blog/add' className='btn waves-light yellow darken-2'>Add Post</Link>
					</div>
				</div>
				:
				''
		return(
			<div>
				<div className="input-field col s6">
					<i className="white-text material-icons prefix">search</i>
					<input id="keywords" className="materialize-input"></input>
					<label htmlFor="keywords" className='white-text'></label>
				</div>
				<Input s={3} type='select' className='white-text' label="Pick a category:" defaultValue=''>
					<option value="" disabled selected>Choose your option</option>
					<option value="1">LGBTQIA+</option>
					<option value="2">Mental Health</option>
					<option value="3">Opinions</option>
					<option value="3">Events</option>
				</Input>

				<div className="input-field col s3 white-text">
				    <select name='dropdown' onChange={this.handleFilterList}>
						<option defaultValue="Choose your option" disabled selected>Choose your option</option>
						<option value="1">LGBTQIA+</option>
						<option value="2">Mental Health</option>
						<option value="3">Opinions</option>
						<option value="3">Events</option>
				    </select>
				    <label className='white-text'>Pick a category: </label>
				</div>

				<div className='input-field col s3'>
					<button className="btn waves-effect waves-light yellow darken-2" type="submit" name="action">Search
				    	<i className="material-icons right">search</i>
					</button>
				</div>
				{addBlog}
			</div>
		)

	}

}
export default connect(mapStateToProps)(BlogFilter)
