import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login'
import LoginTest from './TestFiles/LoginTest'
import AllBlogs from './AllBlogs';
import Chat from './Chat';
import Resources from './Resources';
import About from './About';
import SingleArticle from './SingleArticle';
import CreatePost from './CreatePost';
import { connect } from 'react-redux'
import Nav from './Nav';
import Footer from './Footer';

// import './TestFiles/index.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav linkClick={this.linkClick}/>
          <Route exact path='/' render={() => <Home />} />
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/about' render={() => <About />} />
              <Route exact path='/blog' render={() => <AllBlogs />} />
              <Route path='/chat' render={() => <Chat />} />
              <Route exact path='/blog/article' render={() => <SingleArticle />} />
              <Route path='/resources' render={() => <Resources />} />
                <Route path='/login' render={() => <Login />} />
            <Route path='/logintest' render={() => <LoginTest />} />
            <Route exact path='/blog/add' render={() => <CreatePost />} />
          <Footer />
          </div>
      </Router>
    )
  }
}

export default connect((state, props) => {
  return {}
})(App);
