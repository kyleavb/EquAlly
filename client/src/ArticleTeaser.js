import React, {Component} from 'react';
import { Route, BrowserRouter, withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import {temp} from './action/actions'
//here we can get props of the individual articles and truncate
//the body into this description area

const mapDispatchToProps = dispatch => {
  return{
		temp: (data) => dispatch(temp(data)),
  }
}

const mapStateToProps = state => {
  return{ state }
}

class ArticleTeaser extends Component {
	constructor(props){
		super(props)
		this.state = {
			articleInfo: {},
			toArticle: false
		}
		this.linkClick = this.linkClick.bind(this)
	}
	linkClick(e){
		e.preventDefault()
		let target = '/post/' + this.props.blogId;
		axios.get(target).then(res =>{
			this.props.temp(res.data)
			this.setState({
				toArticle: true,
			})
		})
	}
	render() {
		let cutContent = this.props.content.substring(0,100)
		let blogLink = '/post/' + this.props.blogId;
		if(this.state.toArticle){
			return (<Redirect to={blogLink} blog={this.props.blogObj}/>)
		}
		return(
			<div className='row'>
				<i className='yellow-text text-darken-2 material-icons medium left'>description</i>
				<h6><a href={blogLink} onClick={this.linkClick}>{this.props.title}</a></h6>
				<span>{cutContent}</span>
				<br/>
			</div>

		)

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTeaser);
