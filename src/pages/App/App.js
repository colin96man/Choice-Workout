import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import AddWorkoutPage from '../AddWorkoutPage/AddWorkoutPage';
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
          <Route exact path='/add' render={() =>
            <AddWorkoutPage />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
