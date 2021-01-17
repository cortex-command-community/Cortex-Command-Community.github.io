import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-background'>
                <div className='footer-dirt' />
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: 'auto',
                padding: '0',
                maxWidth: '800px',
                height: '100%',
                position: 'relative',
                zIndex: '1',
            }}>
                <ul>
                    <li><h1>Community</h1></li>
                    <li><a href='https://discord.com/invite/D2aGezA'>Community Discord</a></li>
                    <li><a href='https://cccp.mod.io/'>CCCP Mod Portal</a></li>
                    <li><a href='http://forums.datarealms.com/'><span>DataRealms Fan Forums</span></a></li>
                </ul>
                <ul>
                    <li><h1>Development</h1></li>
                    <li><a href='https://discord.gg/invite/TSU6StNQUG'>CCCP Development Discord</a></li>
                    <li><a href='https://github.com/cortex-command-community'><span>Github</span></a></li>
                    <li><a href='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/issues'><span>Issues</span></a></li>
                    <li><a href='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Data/wiki'><span>Development Plans and Info</span></a></li>
                </ul>
                <ul>
                    <li><h1>Resources</h1></li>
                    <li><a href='http://wiki.datarealms.com/Cortex_Command'><span>DataRealms Wiki</span></a></li>
                    <li><a href='https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/blob/development/CHANGELOG.md'><span>CCCP Changelog</span></a></li>
                </ul>
            </div>
        </div >
    );
}

export default Footer;
