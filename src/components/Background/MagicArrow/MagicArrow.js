import React from 'react';

function MagicArrow() {
    const onClick = () => {
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            width: '100%',
            zIndex: '100',
        }}>
            <button onClick={onClick} style={{
                border: '0',
                padding: '0',
                backgroundColor: 'transparent',
                margin: 'auto',
                display: 'block',
                cursor: 'pointer'
            }}>
                <img src="./arrow.gif" alt="Scroll to content"/>
            </button>
        </div>
    );
}

export default MagicArrow;
