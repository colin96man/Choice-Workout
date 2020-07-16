import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Calendar from '../../components/Calendar/Calendar';

class HomePage extends Component {
    render() {
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                <h1>This is the home page</h1>
                <div><Calendar /></div>
            </div>
        )
    }
}

export default HomePage;