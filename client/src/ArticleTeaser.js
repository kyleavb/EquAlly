import React, {Component} from 'react';


//here we can get props of the individual articles and truncate
//the body into this description area


class ArticleTeaser extends Component {
	
	render() {
		return(
			<div>
				<i className='yellow-text text-darken-2 material-icons medium left'>description</i>
				<h6><a href='#'>Article Title</a></h6>
				<span>Article Teaser. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
				<br/>
			</div>

		)

	}

}

export default ArticleTeaser;
