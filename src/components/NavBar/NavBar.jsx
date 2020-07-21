import React from'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div className="nav">
            &nbsp;&nbsp;&nbsp;
            <Link to='/home'>HOME</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/workouts'>WORKOUTS</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/' onClick={props.handleLogout}>LOG OUT</Link>
        </div>
        :
        <div></div>
    return(
        <>
            {nav}
        </>
    )
}

export default NavBar;