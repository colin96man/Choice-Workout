import React from'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='/home'>HOME</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/add'>ADD</Link>
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