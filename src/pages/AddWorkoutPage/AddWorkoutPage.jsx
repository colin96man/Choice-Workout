import React, {Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AddWorkoutPage.css';

class AddWorkoutPage extends Component {
    state = {
        muscleGroup: '',
        workouts: [],
        filteredWorkouts: []
    }

    handleChange = e => {
        const filteredWorkouts = this.props.workoutsFromParent.filter((workout) => {
            return workout.muscleGroup === e.target.value
        })
        this.setState({
            filteredWorkouts
        })
    }

    handleSubmit = e => {

    }

    render() {
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                <h1>Add Workout</h1>
                <form>
                    <div>
                        <label>Muscle Group (required)</label><br/>
                        <select name="muscleGroup" onChange={this.handleChange}>
                            <option>Choose a Muscle Group</option>
                            {this.props.muscleGroupsFromParent.map((muscleGroup, idx) => <option key={muscleGroup._id} value={muscleGroup._id}>{muscleGroup.name}</option>)}
                        </select><br/>
                        <label>Workouts (required)</label><br/>
                        <select name="workouts" onChange={this.handleChange}>
                            <option>Choose Your Workouts</option>
                            {this.state.filteredWorkouts.map((workout, idx) => <option key={workout._id} value={workout._id}>{workout.description}</option>)}
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddWorkoutPage;