import React, {Component} from 'react';
import {addComment} from '../action/actions'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return{ state }
}

const mapDispatchToProps = dispatch => {
  return{
    addComment: comment => dispatch(addComment(comment)),
  }
}

class LoginTest extends Component {
  constructor(props){
    super(props)
    this.handleButton = this.handleButton.bind(this)
  }
  handleButton(){
    console.log('props', this.props)
    this.props.addComment('New Redux')
  }
  render(){
    console.log(this.props)
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginTest)
