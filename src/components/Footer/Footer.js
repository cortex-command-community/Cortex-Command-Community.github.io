import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer' style={{
            height: '200px',
            width: '100%',
            marginTop: '48px',
            backgroundColor: "#242424",
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: 'auto',
                padding: '0',
                maxWidth: '800px',
                height: '100%',
            }}>
                <ul>
                    <li><h1>Community</h1></li>
                    <li><a href="https://discord.com/invite/D2aGezA">Discord</a></li>
                    <li><a href="http://forums.datarealms.com/"><span>Fan Forums</span></a></li>
                </ul>
                <ul>
                    <li><h1>Development</h1></li>
                    <li><a href="https://github.com/cortex-command-community"><span>Github</span></a></li>
                    <li><a href="https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/issues"><span>Issues</span></a></li>
                </ul>
                <ul>
                    <li><h1>Resources</h1></li>
                    <li><a href="http://wiki.datarealms.com/Cortex_Command"><span>Wiki</span></a></li>
                </ul>
            </div>
        </div >
    );
}

export default Footer;
