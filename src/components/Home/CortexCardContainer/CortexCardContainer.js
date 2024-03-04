import React from 'react';
import './CortexCardContainer.css';

function CortexCardContainer(props) {
    return (
        <div className="cortex-card-container" >
            {props.children}
        </div>
    );
}

export default CortexCardContainer;
