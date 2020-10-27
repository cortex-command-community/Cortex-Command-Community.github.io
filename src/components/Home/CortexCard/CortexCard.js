import React from 'react';
import './CortexCard.css';

function CortexCard(props) {
    return (
        <div className='cortex-card' style={{
            display: 'flex',
            justifyContent: props.right ? 'flex-end' : 'flex-start',
        }}>
            <div className='one'>
                <div className='two'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CortexCard;
