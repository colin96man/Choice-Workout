import React, {Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AddWorkoutPage.css';

class AddWorkoutPage extends Component {
    state = {
        muscleGroup: '',
        workouts: [],
    }

    handleChange = e => {

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
                        <select name="muscleGroup" value={this.state.muscleGroup} onChange={this.handleChange}>
                            <option>Choose a Muscle Group</option>
                            {this.props.muscleGroupsFromParent.map((muscleGroup, idx) => <option key={muscleGroup._id} value={muscleGroup.name}>{muscleGroup.name}</option>)}
                        </select>
                        <label>Workouts (required)</label><br/>
                        <select name="workouts" value={this.state.workouts} onChange={this.handleChange}>
                            <option>Choose Your Workouts</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddWorkoutPage;