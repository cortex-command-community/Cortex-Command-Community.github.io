import React from 'react';
import './Title.css';

function Title(props) {
    return (
        <img className="title" src='./title-with-glow.png' alt='Cortex Command Community Project' style={{
            top: props.yCenter - (props.titleHeight / 2),
            maxHeight: props.titleHeight,
        }} />
    );
}

export default Title;
