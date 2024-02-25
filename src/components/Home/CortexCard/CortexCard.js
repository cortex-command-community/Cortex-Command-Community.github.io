import React from 'react';
import './CortexCard.css';

function CortexCard({right, children}) {
    return (
        <div className='cortex-card' style={{
            display: 'flex',
            justifyContent: right ? 'flex-end' : 'flex-start',
        }}>
            <div className='one'>
                <div className='two'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CortexCard;
