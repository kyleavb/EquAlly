import React, { Component } from 'react';
import axios from 'axios'

import Home from './Home';

import LoginTest from './TestFiles/LoginTest'

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        token: '',
        user: null,
        googleUser: null
      }
      this.liftTokenToState = this.liftTokenToState.bind(this)
    }
  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  checkApi = () => {
    axios.get('/test')
      .then((response) => {
        console.log(response.data)
      })
  }

  checkForGoogleUser(){
    axios.get('/auth/user').then(response => {
      if(response.data.user){
        let googleUser = {
          googleId: response.data.user.googleId,
          displayName: response.data.user.displayName
        }
        this.setState({
          googleUser
        })
      }else{
        //no user found in googleI
        this.setState({
          googleUser: null
        })
      }
    })
  }

  linkClick(e){
    e.preventDefault()
    axios.get(e.target.href)
      .then(response => {
        console.log(response);
      })
  }
  componentDidMount(){
    // this.checkForGoogleUser()
  }
  render() {
    return (
      <div className="App">
        <Home />
        <LoginTest />
      </div>
    );
  }
}

export default App;
