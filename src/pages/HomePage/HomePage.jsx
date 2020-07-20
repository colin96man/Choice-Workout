import React, { Component } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import './HomePage.css';

class HomePage extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    }

    render() {
        return(
            <div>
                <div><Calendar /></div>
            </div>
        )
    }
}

export default HomePage;