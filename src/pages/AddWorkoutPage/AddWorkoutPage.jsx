import React, { Component } from 'react';
import './AddWorkoutPage.css';

class AddWorkoutPage extends Component {
    state = {
        filteredWorkouts: [],
        formData: {selectedWorkouts: []}
    }

    handleChange = e => {
        const filteredWorkouts = this.props.workoutsFromParent.filter((workout) => {
            return workout.muscleGroup === e.target.value
        })
        this.setState({
            filteredWorkouts
        })
    }

    handleWorkoutSelect = e => {
        this.setState({
            formData: {selectedWorkouts: [...this.state.formData.selectedWorkouts, e.target.value]}
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddWorkoutEntry(this.state.formData)
    }

    render() {
        return(
            <div>
                <h1>Add Workout</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <label>Muscle Group (required)</label><br/>
                        <select name="muscleGroup" onChange={this.handleChange}>
                            <option>Choose a Muscle Group</option>
                            {this.props.muscleGroupsFromParent.map((muscleGroup, idx) => <option key={muscleGroup._id} value={muscleGroup._id}>{muscleGroup.name}</option>)}
                        </select><br/>
                        <label>Workouts (required)</label><br/>
                        <select name="workouts" onChange={this.handleWorkoutSelect}>
                            <option>Choose Your Workouts</option>
                            {this.state.filteredWorkouts.map((workout, idx) => <option key={workout._id} value={workout._id}>{workout.description}</option>)}
                        </select><br/>
                        <label>List of Currently Selected Workouts</label>
                        <ul>
                            {this.state.formData.selectedWorkouts.map((workout, idx) => <li key={workout} value={workout}>{this.state.filteredWorkouts.find(workoutObj => workoutObj._id === workout).description}</li>)}
                        </ul>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddWorkoutPage;