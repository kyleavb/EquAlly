import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import JournalEntryTeaser from './JournalEntryTeaser';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {liftUser} from './action/actions';
import axios from 'axios';

const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
    return{
        liftUser: (userInfo) => dispatch(liftUser(userInfo)),
    }
}

class Profile extends Component {
	constructor(props){
		super(props);
		this.state={
			userId: this.props.state.userId,
            title: '',
            journalContent: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
		let {title, journalContent, userId} = this.state
		axios.post('/profile/create', {
			userId: userId,
			journals: {
				title: title,
				content: journalContent
			}
		}).then(res => {
			console.log(res)
		})
    }

    componentDidMount() {
    	axios.get('/profile').then(() => {console.log('hitting the profile route', this.props.state.userId)})

    }

	render() {

		return(
			<div>
				<Row className='cyan darken-3'>
					<Col s={12} m={8} l={6} offset={'m2 l3'}>
						<h3 className='white-text'>This is your safe space.</h3>
						<p className='white-text'>This page securely contains all your user information.</p>
					</Col>
				</Row>
				<Row>
					<div className='center col s12 m4 l4 offset-m4 offset-l4'>
						<br/>
						<Link className='btn-large col s12 waves-effect yellow darken-2 white-text profile-chat' to='/chat'>Chat now!</Link>
						<p className='grey-text lighten-2'>(We're always here for you.)</p>
					</div>
				</Row>
				<Row>
					<div className='center col s12 m3 l3 offset-m2 offset-l2 profile-box cyan lighten-5'>
						<i className='material-icons large grey-text text-lighten-1'>account_circle</i>
						<p className='yellow-text text-darken-2'>Display Name: <span className='grey-text text-darken-2'>{this.props.state.firstName} {this.props.state.lastName}</span></p>
						<p className='yellow-text text-darken-2'>Preferred Pronouns: <span className='grey-text text-darken-2'>{this.props.state.pronouns}</span></p>
						<p className='yellow-text text-darken-2'>Zip: <span className='grey-text text-darken-2'>{this.props.state.zipcode}</span></p>
					</div>
					<div className='center col s12 m4 l4 offset-m1 offset-l1 profile-box cyan lighten-5'>
						<i className='material-icons large grey-text text-lighten-1'>chat</i>
						<p className='yellow-text text-darken-2'>Number of posts: <span className='grey-text text-darken-2'>{(this.props.state.posts).length}</span></p>
						<p className='yellow-text text-darken-2'>Number of comments: <span className='grey-text text-darken-2'>{(this.props.state.comments).length}</span></p>
						<p className='yellow-text text-darken-2'>Number of journal entries: <span className='grey-text text-darken-2'>{(this.props.state.journals).length}</span></p>
					</div>
				</Row>
				<Row>
					<Col s={12} m={8} l={8} offset={'m2 l2'}>
						<h5>Your Journal</h5>
						<p>This journal's contents are totally encrypted and unique to your account, meaning nobody <em>but you</em> can read the contents. Your confidentiality and privacy are important to us.</p>

						<div className="textarea-container col s12">
							<label htmlFor='title'>Enter title: </label>
							<input name='title' onChange={this.handleChange} type='text' defaultValue=''></input>
						</div>

						<div className="textarea-container col s12 journal-container">
							<textarea onChange={this.handleChange} name='journalContent'></textarea>
							<div className="textarea-size"></div>
						</div>
					</Col>
				</Row>
				<Row>
					<div className='center col s12 m4 l4 offset-m4 offset-l4'>
						<br/>
						<button className='btn-large col s12 waves-effect yellow darken-2 white-text' onClick={this.handleSubmit} type='submit'>Submit Journal Entry</button>
					</div>
				</Row>
				<Row>
					<div className='col s12 m6 l6 offset-m3 offset-l3'>
						<h5>Past Journal Entries</h5>
						<div className='col s12 journal-entries'>
							<JournalEntryTeaser />
							<JournalEntryTeaser />
						</div>
					</div>
				</Row>
			</div>

		)

	}

}

export default connect(mapStateToProps,  mapDispatchToProps)(Profile)