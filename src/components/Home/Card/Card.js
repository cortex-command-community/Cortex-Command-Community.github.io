import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card' style={{
            display: 'flex',
            justifyContent: props.right ? 'flex-end' : 'flex-start',
        }}>
            <div className='one' style={{
                width: '80%',
            }}>
                <div className='two'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Card;
