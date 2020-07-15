import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img className="sign-in-img" src="https://i.imgur.com/uNDAD8w.png" alt=""></img>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    );
  }
}

export default App;
