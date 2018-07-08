import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'react-materialize';
import {connect} from 'react-redux'
import {liftUser} from './action/actions'

const mapStateToProps = state => {
    return{ state }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
          liftUser: (userInfo) => dispatch(liftUser(userInfo)),
    }
  }

class Signup extends Component {
    constructor(props){
		super(props)
		this.state={
            firstName: '',
            lastName: '',
            email: '',
            pronouns: '0',
            password: '',
            zipcode: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitForm(e){
        e.preventDefault();
        axios.post('/auth/signup', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pronouns: this.state.pronoun,
            password: this.state.password
        }).then(data =>{
            console.log('return', data)
            localStorage.setItem('equallyToken', data.data.token)
            //LIFT TOKEN TO REDUX HERE
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='row'>
                <form className="col s12 m8 l8 offset-m2 offset-l2">
                <h1>Sign Up!</h1>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <i className="material-icons prefix">account_circle</i>
                        <input name="firstName" onChange={this.handleChange} type="text" className="validate" />
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input name="lastName" onChange={this.handleChange} type="text" className="validate" />
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                </div>
                <div className="row">
                 <div className="input-field col s12 m6">
                        <i className="material-icons prefix">location_on</i>
                        <input name="zipcode" onChange={this.handleChange} type="text" className="validate" />
                        <label htmlFor="zipcode">Zipcode</label>
                    </div>
                    <Input type='select' value={this.state.pronoun} name='pronoun' s={12} m={6} onChange={this.handleChange} label='Pronouns'>
                        <option value="0" disabled>Select your preferred pronouns</option>
                        <option value="She/Her">She/Her</option>
                        <option value="He/Him">He/Him</option>
                        <option value="They/Them">They/Them</option>
                        <option value="Xe/Xyr">Xe/Xyr</option>
                    </Input>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <i className="material-icons prefix">email</i>
                        <input name="email" type="email" onChange={this.handleChange} className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-field col s12 m6">
                        <i className="material-icons prefix">vpn_key</i>
                        <input name="password" onChange={this.handleChange} type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light col s6 m4 l4 offset-s3 offset-m4 offset-l4 yellow darken-2" onClick={this.submitForm}>Sign Up!
                    <i className="material-icons right">account_box</i>
                    </button>
                </div>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)