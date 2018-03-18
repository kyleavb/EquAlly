import React, {Component} from 'react';
import axios from 'axios';

class LoginTest extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleEmailChange(e){
        this.setState({ email: e.target.value})
    }
    handlePasswordChange(e){
        this.setState({ password: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()

        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then( result => {
            console.log('result', result.data)
            localStorage.setItem('mernToken', result.data.token)
            this.props.liftToken(result.data)
        }).catch( err => {console.log(err)})
    }


    render(){
        return(
          <div>
          <h1>Testing oAuth with Google and Facebook</h1>
            <form onSubmit={this.handleSubmit}>
                <a href='/auth/google'>Sign in with Google!</a>
                <br />
                <a href='/auth/facebook'>Sign in with FaceBook!</a>
            </form>
          </div>
        )
    }
}

export default LoginTest
