import React from 'react';

function Moon(props) {
    return (
        <img src='./moon.png' alt="" style={{
            position: 'fixed',
            top: props.yCenter,
            left: props.xCenter,
            display: 'block',
            maxHeight: '176px',
            maxWidth: '176px',
            height: 'auto',
            width: 'auto',
        }}/>
    );
}

export default Moon;
