import React, {Component} from 'react';
import { Row, Col } from 'react-materialize';
import ArticleTeaser from './ArticleTeaser';


//these are the boxes that populate on the AllBlogs.js page full of articles

class CategoryBox extends Component {

	render() {
		return(
			<div class='col s12 m8 l4 offset-m2 offset-l1 category-box'>
				<a href='#'><h5>Title Type</h5></a>
				<div class='col s12 article-preview'>
					<ArticleTeaser />
					<ArticleTeaser />
					<ArticleTeaser />
					<ArticleTeaser />
				</div>
			</div>
		)

	}

}

export default CategoryBox;