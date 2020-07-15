import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class HomePage extends Component {
    render() {
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                <h1>This is the home page</h1>
            </div>
        )
    }
}

export default HomePage;