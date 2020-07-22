import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {
    return(
        <div>
            <header className='header'></header>
            <div className="landing-page">
                <img className="sign-in-img" src="https://i.imgur.com/uNDAD8w.png" alt=""></img>
                <Link to='/login'><button className='log-btn'>Log In</button></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/signup'><button className='sign-btn'>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;