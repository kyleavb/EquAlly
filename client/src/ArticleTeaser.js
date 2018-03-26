import React, {Component} from 'react';


//here we can get props of the individual articles and truncate
//the body into this description area


class ArticleTeaser extends Component {

	render() {
		
		let cutContent = this.props.content.substring(0,100)
		return(
			<div>
				<i className='yellow-text text-darken-2 material-icons medium left'>description</i>
				<h6><a href='/'>{this.props.title}</a></h6>
				<span>{cutContent}</span>
				<br/>
			</div>

		)

	}

}

export default ArticleTeaser;
