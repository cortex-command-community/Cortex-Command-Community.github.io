import React from 'react';
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
                <li><a href="https://cortex-command-community.github.io/"><span>Home</span></a></li>
                <li><a href="https://github.com/cortex-command-community"><span>Downloads</span></a></li>
                <li><a href="http://wiki.datarealms.com/Cortex_Command"><span>Wiki</span></a></li>
                <li><a href="https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/issues"><span>Issues</span></a></li>
                <li><a href="http://forums.datarealms.com/"><span>Forum</span></a></li>
            </ul>
        </div>
    );
}

export default Header;
