import React, {Component} from 'react';
import BlogFilter from './BlogFilter';
import CategoryBox from './CategoryBox';

class AllBlogs extends Component {
	
	render() {
		return(
			<div>
				<div class='row cyan darken-2'>
					<div class='col s12 m12 l8 offset-l2'>
						<h1 class='white-text blogs-title'>Blogs</h1>
						<BlogFilter />
					</div>
				</div>

				<div class='row'>
					<CategoryBox />
					<CategoryBox />
					<CategoryBox />
					<CategoryBox />
				</div>
				
			</div>
		)	
	}

}

export default AllBlogs;