import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' render={() =>
              <LandingPage />
            } />
            <Route exact path='/home' render={() =>
              <HomePage />
            } />
          </Switch>
      </div>
    );
  }
}

export default App;
