import React from 'react';
import Template from '../../Template/Template';

import EmojiDunno from '../../Emoji/dunno.png';

function NotFound() {
    return (
        <Template>
            <div style={{textAlign: 'center'}}>
            <h1 style={{ marginTop: '48px' }}>Page Not Found</h1>
            <p>Sorry, but the page you were trying to view does not exist.</p>
            <br />
            <br />
            <a href='https://www.youtube.com/watch?v=t0s9dRNjhfg?autoplay=1'><img style={{postion: 'absolute', width: '25%'}} src={EmojiDunno}/></a>
            </div>
        </Template>
        
    );
}

export default NotFound;
