import React from'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <div>
            <Link to='/home'>HOME</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/add'>ADD</Link>
        </div>
    )
}

export default NavBar;