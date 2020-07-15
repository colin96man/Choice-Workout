import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import AddWorkoutPage from '../AddWorkoutPage/AddWorkoutPage';
import userService from '../../utils/userService';
import './App.css';

class App extends Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null}, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    }, () => {
      this.props.history.push('/home');
    });
  }

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
