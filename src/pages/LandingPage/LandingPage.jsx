import React from 'react';
import './LandingPage.css'

function LandingPage() {
    return(
        <div className="landing-page">
            <img className="sign-in-img" src="https://i.imgur.com/uNDAD8w.png" alt=""></img>
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
    )
}

export default LandingPage;