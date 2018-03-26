import React, {Component} from 'react';
import ArticleTeaser from './ArticleTeaser';


//these are the boxes that populate on the AllBlogs.js page full of articles

class CategoryBox extends Component {

	render() {

		let articleExcise = this.props.blogs.map((blog, index) => {
			return <ArticleTeaser key={index} title={blog.title} content={blog.content} blogId={blog._id} blogObj={blog} />
		})
		return(
			<div className='col s12 m8 l4 offset-m2 offset-l1 category-box'>
				<h5><a className='cyan-text text-lighten-1'>{this.props.title}</a></h5>
				<div className='col s12 article-preview'>
					{articleExcise}
				</div>
			</div>
		)

	}

}

export default CategoryBox;
