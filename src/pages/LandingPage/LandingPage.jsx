import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function LandingPage() {
    return(
        <div className="landing-page">
            <img className="sign-in-img" src="https://i.imgur.com/uNDAD8w.png" alt=""></img>
            <Link to='/login'><button>Log In</button></Link>
            <Link to='/signup'><button>Sign Up</button></Link>
        </div>
    )
}

export default LandingPage;