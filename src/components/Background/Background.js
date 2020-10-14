import React, { useEffect, useState } from 'react';
import Title from './Title/Title';
import Moon from './planetoids/Moon';
import Planet from './planetoids/Planet';
import MagicArrow from './MagicArrow/MagicArrow';
// import Nebula from './Nebula/Nebula';

const titleHeight = 181;
const planetHeight = 550;

const extraPlanetOffset = planetHeight / 4;

const initialTitleOffset = window.innerHeight / 2;
const initialPlanetOffset = window.innerHeight + extraPlanetOffset;

const finalOffset = window.innerHeight - titleHeight / 2 + extraPlanetOffset;

const titleBreakpoints = [0, window.innerHeight / 2 + extraPlanetOffset, finalOffset]
const planetBreakpoints = [0, finalOffset]

const calculateTitleY = () => {
    if (window.pageYOffset < titleBreakpoints[1]) {
        return initialTitleOffset;
    } else if (window.pageYOffset >= titleBreakpoints[1] && window.pageYOffset < titleBreakpoints[2]) {
        return initialTitleOffset + titleBreakpoints[1] - window.pageYOffset;
    } else {
        return titleHeight / 2;
    }
}

const calculatePlanetY = () => {
    if (window.pageYOffset < planetBreakpoints[1]) {
        return initialPlanetOffset - window.pageYOffset;
    } else {
        return titleHeight / 2;
    }
}

function Background() {
    let moonY;

    const setOffset = () => {
        setTitleY(calculateTitleY);
        setPlanetY(calculatePlanetY);
    }

    const [titleY, setTitleY] = useState(initialTitleOffset);
    const [planetY, setPlanetY] = useState(initialPlanetOffset);

    useEffect(() => {
        window.addEventListener('resize', setOffset)
        window.addEventListener("scroll", setOffset);
        
        return () => {
            window.removeEventListener("resize", setOffset);
            window.removeEventListener("scroll", setOffset);
        }
    }, []);

    return (
        <>
            {/* <Nebula/> */}
            <Title yCenter={titleY}/>
            <Planet yCenter={planetY}/>
            <Moon yCenter={moonY}/>
            <MagicArrow/>
        </>
    );
}

export default Background;
