import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer scroll-anchor'>
            <div className='footer-background'>
                <div className='footer-dirt' />
            </div>
            <div className='footer-content'>
                <ul>
                    <li><h1>Community</h1></li>
                    <li><a href='https://discord.gg/invite/TSU6StNQUG'>Our Discord</a></li>
                    <li><a href='https://cccp.mod.io/'>CCCP Mod Portal</a></li>
                    <li><a href='http://forums.datarealms.com/'><span>DataRealms Fan Forums</span></a></li>
                </ul>
                <ul>
                    <li><h1>Development</h1></li>
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
        </footer >
    );
}

export default Footer;
