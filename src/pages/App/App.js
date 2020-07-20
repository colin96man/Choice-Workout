import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import AddWorkoutPage from '../AddWorkoutPage/AddWorkoutPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import * as muscleGroupService from '../../utils/muscleGroupService';
import * as workoutsService from '../../utils/workoutsService';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  state = {
    muscleGroups: [],
    workouts: [],
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    }, () => {
      this.props.history.push('/home');
    });
  }

  async componentDidMount() {
    const muscleGroupsFromAPI = await muscleGroupService.getAllMuscleGroups();
    const workoutsFromAPI = await workoutsService.getAllWorkouts();
    this.setState({
      muscleGroups: muscleGroupsFromAPI,
      workouts: workoutsFromAPI
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          {this.state.user ? <NavBar user={this.state.user} handleLogout={this.handleLogout}/> : null}
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <LandingPage />
          } />
          <Route exact path='/home' render={() =>
            <HomePage />
          } />
          <Route exact path='/add' render={() =>
            <AddWorkoutPage muscleGroupsFromParent={this.state.muscleGroups}/>
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
