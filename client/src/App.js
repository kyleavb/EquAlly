import React, { Component } from 'react';
import axios from 'axios'
import Nav from './Nav';
import Footer from './Footer';

// import './TestFiles/index.css';


class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        user: ''
      }
      this.liftToState = this.liftToState.bind(this)
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
      }
    )
  }

  liftToState(data){
    this.setState({
      user: data
    })
  }

  render() {
    return (
      <div className="App">
        <Nav linkClick={this.linkClick} stateLift={this.liftToState}/>
        <Footer />
      </div>

    );
  }
}

export default App;
