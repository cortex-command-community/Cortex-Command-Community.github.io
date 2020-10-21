import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='header' style={{
            borderTop: '4px solid #f9de8f',
            borderBottom: '1px solid black',
            boxSizing: 'border-box',
            borderLeft: '0',
            borderRight: '0',
            textAlign: 'center',
            color: 'white',
            fontSize: '30px',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 'bold',
        }}>
            <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: 'auto',
                padding: '0',
                maxWidth: '800px',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
            }}>
                <li><NavLink to="/"><span>Home</span></NavLink></li>
                <li><NavLink to="/downloads"><span>Downloads</span></NavLink></li>
                <li><NavLink to="/get-involved"><span>Get Involved</span></NavLink></li>
            </ul>
        </div>
    );
}

export default Header;
