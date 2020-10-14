import React from 'react';

function Title(props) {
    const halfTitleHeight = 181 / 2;
    
    return (
        <img src='./title.png' alt="Cortex Command" style={{
            zIndex: '100',
            position: "fixed",
            top: props.yCenter - halfTitleHeight,
            maxHeight: '181px',
            maxWidth: '524px',
            width: 'auto',
            height: 'auto',
            display: 'block',
            left: '50%',
            transform: 'translateX(-50%)',
        }}/>
    );
}

export default Title;
