import React, { useState, useEffect } from 'react';

function Moon() {
    const [yValue, setYValue] = useState(0);

    useEffect(() => {
        const setOffset = () => {
            setYValue(window.pageYOffset);
        };

        window.addEventListener('resize', setOffset)
        window.addEventListener("scroll", setOffset);
        return () => {
            window.removeEventListener("resize", setOffset);
            window.removeEventListener("scroll", setOffset);
        }
    }, [setYValue]);

    const initialOffset = window.innerHeight - 275;
    const finalOffset = -150;
    const scrollRate = .8;

    let offset =  initialOffset - yValue * scrollRate;
    offset = Math.max(offset, finalOffset)

    let xOffset = -250 + .05 * yValue;
    xOffset = Math.min(xOffset, -200);

    return (
        <div style={{
            position: 'fixed',
            top: offset,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src='./moon.png' alt="" style={{
                position: 'relative',
                right: xOffset,
                display: 'block',
                maxHeight: '176px',
                maxWidth: '176px',
                height: 'auto',
                width: 'auto',
            }}/>
        </div>
    );
}

export default Moon;
