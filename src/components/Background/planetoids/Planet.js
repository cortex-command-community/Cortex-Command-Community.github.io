import React from 'react';
import './Station.css';

const stationHeight = 27;

function Planet(props) {
    return (
        <div style={{
            display: 'block',
            height: 'auto',
            width: 'auto',
            maxHeight: props.planetHeight + stationHeight,
            maxWidth: props.planetHeight + (2 * stationHeight),
            margin: 'auto',
            position: 'sticky',
            top: props.yCenter - (props.planetHeight + stationHeight) / 2,
            marginTop: -1 * (props.planetHeight + stationHeight) / 2,
            zIndex: '9',
            marginBottom: '250px',
            textAlign: 'center',
        }}>
            <div style={{
                position: 'absolute',
                top: - stationHeight,
                bottom: - stationHeight,
                width: '100%',
                zIndex: '10',
                overflow: 'hidden',
                textAlign: 'initial'
            }}>
                <img src='./station.png' className='station' alt="" style={{
                    transformOrigin: `0 ${(props.planetHeight / 2) + stationHeight}px`,
                }}/>
            </div>
            <img src='./planet.png' alt="" style={{
                height: '100%',
                width: '100%',
                maxHeight: props.planetHeight,
                maxWidth: props.planetHeight,
            }} />
        </div>
    );
}

export default Planet;
