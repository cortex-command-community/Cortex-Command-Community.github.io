import React from 'react';
import './CortexCardContainer.css';

function CortexCardContainer(props) {
    return (
        <div className="cortex-card-container" style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '800px',
            margin: 'auto',
        }}>
            {props.children}
        </div>
    );
}

export default CortexCardContainer;
