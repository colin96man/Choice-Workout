import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import AddWorkoutPage from '../AddWorkoutPage/AddWorkoutPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import * as muscleGroupService from '../../utils/muscleGroupService';
import * as workoutsService from '../../utils/workoutsService';
import * as entryService from '../../utils/entryService';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  state = {
    entries: [],
    muscleGroups: [],
    workouts: [],
    selectedDate: new Date(),
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

  getAllEntries = async () => {
    const entries = await entryService.getAllWorkoutEntries();
    this.setState({
      entries
    })
  }

  handleAddWorkoutEntry = async newEntryData => {
    console.log(newEntryData, '<------- newEntryData');
    newEntryData.date = this.state.selectedDate
    await entryService.createWorkoutEntry(newEntryData);
    this.getAllEntries();
  }

  handleSelectedDate = selectedDate => {
    this.setState({
      selectedDate
    }, () => this.props.history.push('/add'))
  }

  async componentDidMount() {
    const muscleGroupsFromAPI = await muscleGroupService.getAllMuscleGroups();
    const workoutsFromAPI = await workoutsService.getAllWorkouts();
    this.getAllEntries();
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
          <Route exact path='/home' render={({ history }) =>
            <HomePage history={history} handleSelectedDate={this.handleSelectedDate} />
          } />
          <Route exact path='/add' render={() =>
            <AddWorkoutPage
              muscleGroupsFromParent={this.state.muscleGroups}
              workoutsFromParent={this.state.workouts}
              selectedDate={this.state.selectedDate}
              handleAddWorkoutEntry={this.handleAddWorkoutEntry}
            />
          } />
          <Route exact path='/workouts' render={() =>
            <WorkoutPage />
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
