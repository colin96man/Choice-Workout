import React, {Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AddWorkoutPage.css';

class AddWorkoutPage extends Component {
    render() {
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                <h1>This is the add workout page</h1>
            </div>
        )
    }
}

export default AddWorkoutPage;