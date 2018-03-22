import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import Nav from './Nav';
import Footer from './Footer';

// import './TestFiles/index.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav linkClick={this.linkClick}/>
        <Footer />
      </div>
    )
  }
}

export default connect((state, props) => {
  return {}
})(App);
