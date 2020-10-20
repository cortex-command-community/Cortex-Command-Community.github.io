import React from 'react';
import './CardContainer.css';

function CardContainer(props) {
    return (
        <div className="card-container" style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '800px',
            margin: 'auto',
        }}>
            {props.children}
        </div>
    );
}

export default CardContainer;
