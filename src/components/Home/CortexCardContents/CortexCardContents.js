import React from 'react';
import './CortexCardContents.css';

function CortexCardContents(props) {
    return (
        <div className='card-contents' style={{ 
            display: 'flex', 
            flexDirection: props.right ? 'row-reverse' : 'initial',
        }}>
            <div style={{ flex: '1' }}>
                <div style={{ 
                    padding: '8px 16px',
                }}>
                    <h1>{props.title}</h1>
                    <p>{props.body}</p>
                    
                </div>
            </div>
            {/* This is an image placeholder **Imagine an Image** */}
        <img style={{
                border: '2px solid black',
                backgroundColor: 'black',
                minHeight: '196px',
                width: '196px',
        }}
        src={props.image} alt={props.alt}
        />    
        </div>
    );
}

export default CortexCardContents;
