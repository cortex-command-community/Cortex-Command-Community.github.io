import React from 'react';
import './CortexCardContents.css';

function CortexCardContents({right, title, body}) {
    return (
        <div className='card-contents' style={{ 
            display: 'flex', 
            flexDirection: right ? 'row-reverse' : 'initial',
        }}>
            <div style={{ flex: '1' }}>
                <div style={{ 
                    padding: '8px 16px',
                }}>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
            </div>
            {/* This is an image placeholder **Imagine an Image** */}
            <div className='image-placeholder'/>
        </div>
    );
}

export default CortexCardContents;
