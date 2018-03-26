import React, {Component} from 'react';
import BlogFilter from './BlogFilter';
import CategoryBox from './CategoryBox';
import axios from 'axios'

class AllBlogs extends Component {
	constructor(props){
		super(props)
		this.state = {
			lgbtqiaBlogs: [],
			mentalHealthBlogs: [],
			opinionBlogs: [],
			eventBlogs: []
		}
	}
	componentDidMount(){
		var allBlogs;
		var lgbtqiaBlogs = []
		var mentalHealthBlogs = []
		var opinionBlogs = []
		var eventBlogs = []
    axios.get('/post').then(res =>{
			allBlogs = res.data
		}).then(res => {
			allBlogs.map((blog, iter) => {
				if(blog.category === "LGBTQIA+"){
					lgbtqiaBlogs.push(blog)
				}else if(blog.category === 'Mental Health'){
					mentalHealthBlogs.push(blog)
				}else if(blog.category === 'Opinions'){
					opinionBlogs.push(blog)
				}else if(blog.category === 'Events'){
					eventBlogs.push(blog)
				}
			})
		}).then(res =>{
			this.setState({
				lgbtqiaBlogs,
				mentalHealthBlogs,
				opinionBlogs,
				eventBlogs,
			})
		})

  }

	render() {
		return(
			<div>
				<div className='row cyan darken-2'>
					<div className='col s12 m12 l8 offset-l2'>
						<h1 className='white-text blogs-title'>Blogs</h1>
						<BlogFilter />
					</div>
				</div>

				<div className='row'>
					<CategoryBox title='LGBTQIA' blogs={this.state.lgbtqiaBlogs}/>
					<CategoryBox title='Mental Health' blogs={this.state.mentalHealthBlogs}/>
					<CategoryBox title='Opinions' blogs={this.state.opinionBlogs}/>
					<CategoryBox title='Events' blogs={this.state.eventBlogs}/>
				</div>

			</div>
		)
	}

}

export default AllBlogs;
