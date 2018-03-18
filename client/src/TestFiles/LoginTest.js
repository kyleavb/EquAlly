import React, {Component} from 'react';
import axios from 'axios';

class LoginTest extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
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
