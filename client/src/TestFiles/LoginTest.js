import React, {Component} from 'react';
import {
  addComment
} from '../action/actions'
import store from '../store/store'

class LoginTest extends Component {
  handleButton(){
    console.log(store.getState())
    store.dispatch(addComment('test'))
    console.log(store.getState())
  }
  render(){
    console.log('test')
    return(
      <div>
      <h1>Testing oAuth with Google and Facebook</h1>
        <form onSubmit={this.handleSubmit}>
            <a href='http://localhost:5000/auth/google' onClick={this.props.click}>Sign in with Google!</a>
            <br />
            <a href='/auth/facebook' onClick={this.props.click}>Sign in with FaceBook!</a>
            <p>This is to test</p>
            <a href='/test'>test</a>
            <br />
            <button type='button' onClick={this.props.stateLift}>Click Me</button>
            <button type='button' onClick={this.handleButton}>Alter State</button>
        </form>
      </div>
    )
  }
}

export default LoginTest
