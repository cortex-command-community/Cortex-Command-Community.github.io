import React from 'react';
import './Title.css';

function Title(props) {
    const halfTitleHeight = 181 / 2;

    return (
        <>
            <img className="title" src='./title-with-glow.png' alt='Cortex Command' style={{
                top: props.yCenter - halfTitleHeight,
                maxHeight: '181px',
            }} />
        </>
    );
}

export default Title;
