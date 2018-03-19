import React, {Component} from 'react';
import { Input } from 'react-materialize';

class BlogFilter extends Component {

	render() {
		return(
			<div>
				<div class="input-field col s6">
		          <i class="white-text material-icons prefix">search</i>
		          <input id="keywords" class="materialize-input"></input>
		          <label for="keywords" class='white-text'></label>
		        </div>

		         <Input s={3} type='select' className='white-text' label="Pick a category:" defaultValue=''>
		         	<option value="" disabled selected>Choose your option</option>
				    <option value="1">LGBTQIA+</option>
					<option value="2">Mental Health</option>
					<option value="3">Opinions</option>
					<option value="3">Events</option>
				  </Input>

				<div class="input-field col s3 white-text">
				    <select>
						<option value="" disabled selected>Choose your option</option>
						<option value="1">LGBTQIA+</option>
						<option value="2">Mental Health</option>
						<option value="3">Opinions</option>
						<option value="3">Events</option>
				    </select>
				    <label class='white-text'>Pick a category: </label>	
				</div>

				<div class='input-field col s3'>
					<button class="btn waves-effect waves-light yellow darken-2" type="submit" name="action">Search
				    	<i class="material-icons right">search</i>
					</button>
				</div>
			</div>
		)

	}

}

export default BlogFilter;