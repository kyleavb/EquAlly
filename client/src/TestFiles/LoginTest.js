import React, {Component} from 'react';

class LoginTest extends Component {

    render(){
        return(
          <div>
          <h1>Testing oAuth with Google and Facebook</h1>
            <form onSubmit={this.handleSubmit}>
                <a href='/auth/google' onClick={this.props.click}>Sign in with Google!</a>
                <br />
                <a href='/auth/facebook' onClick={this.props.click}>Sign in with FaceBook!</a>
                <p>This is to test</p>
            </form>
          </div>
        )
    }
}

export default LoginTest
