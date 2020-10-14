import React from 'react';
import './Station.css';

function Planet(props) {
    return (
        <div style={{
            display: 'block',
            height: 'auto',
            width: 'auto',
            maxHeight: '550px',
            maxWidth: '550px',
            margin: 'auto',
            position: 'sticky',
            top: props.yCenter - 275,
            marginTop: '-275px',
            zIndex: '9',
            marginBottom: '250px'
        }}>
            <div style={{
                left: '50%',
                transform: 'translate(-50%, 0)',
                position: 'relative',
                zIndex: '10',
                textAlign: 'center'
            }}>
                <img src='./station.png' className='station' alt="" style={{
                    transformOrigin: `0 ${550 / 2 + 27}px`,
                }}/>
            </div>
            <img src='./planet.png' alt="" style={{
            }} />
        </div>
    );
}

export default Planet;
