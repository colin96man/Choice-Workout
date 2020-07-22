import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import WorkoutsListPage from '../WorkoutsListPage/WorkoutsListPage';
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
    newEntryData.date = this.state.selectedDate
    await entryService.createWorkoutEntry(newEntryData);
    this.getAllEntries();
  }

  handleDeleteEntry = async idOfEntryToDelete => {
    await entryService.deleteEntry(idOfEntryToDelete);
    this.setState(state => ({
      entries: state.entries.filter(entry => entry._id !== idOfEntryToDelete)
    }), () => this.props.history.push('/workouts'));
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
            <WorkoutsListPage
              entriesFromParent={this.state.entries}
              getAllEntries={this.getAllEntries}
              handleDeleteEntry={this.handleDeleteEntry}
            />
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
