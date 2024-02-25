import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='cortex-navigation'>
            <ul className='header-inner'>
                <li><NavLink to="/"><span>Home</span></NavLink></li>
                <li><NavLink to="/downloads"><span>Downloads</span></NavLink></li>
                <li><NavLink to="/get-involved"><span>Get Involved</span></NavLink></li>
            </ul>
        </header>
    );
}

export default Header;
