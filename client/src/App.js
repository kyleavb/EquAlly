import React, { Component } from 'react';
import axios from 'axios'

import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';



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

  linkClick(e){
    e.preventDefault()
    console.log('clicked', e.target.href)
    axios.get(e.target.href)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <Nav linkClick={this.linkClick}/>
        <Footer />
      </div>

    );
  }
}

export default App;
