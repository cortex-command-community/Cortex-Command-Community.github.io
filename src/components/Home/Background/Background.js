import React, { useEffect, useState } from 'react';
import Title from './Title/Title';
import Moon from './planetoids/Moon';
import Planet from './planetoids/Planet';

function Background(props) {
    const titleHeight = props.titleHeight;
    const planetHeight = 550; // Pixel size of planet image, 1:1 aspect ratio
    // const moonHeight = 176;   // Pixel size of moon image, 1:1 aspect ratio

    const moonParallaxRateX = .2;
    const moonParallaxRateY = .8;

    const calculateExtraPlanetOffset = () => {
        return (Math.min(planetHeight, window.innerHeight) / 4);
    };

    const calculateTitleBreakpoints = () => {
        return [0, (window.innerHeight / 2) + calculateExtraPlanetOffset()]
    }

    const calculateInitialTitleOffset = () => {
        return window.innerHeight / 2;
    };

    const calculateInitialPlanetOffset = () => {
        return window.innerHeight + calculateExtraPlanetOffset();
    };

    const calculateInitialMoonOffsetX = () => {
        return ((window.innerWidth + planetHeight) / 2) - (planetHeight / 8);
    };

    const calculateInitialMoonOffsetY = () => {
        return window.innerHeight - 1.8 * calculateExtraPlanetOffset();
    };

    const calculateTitleY = () => {
        if (window.pageYOffset < calculateTitleBreakpoints()[1]) {
            return calculateInitialTitleOffset();
        } else {
            return calculateInitialTitleOffset() + calculateTitleBreakpoints()[1] - window.pageYOffset;
        }
    };

    const calculatePlanetY = () => {
        return calculateInitialPlanetOffset() - window.pageYOffset;
    };

    const calculateMoonY = () => {
        const finalOffset = -150;

        let offset = calculateInitialMoonOffsetY() - moonParallaxRateY * window.pageYOffset;
        return Math.max(offset, finalOffset)
    };

    const calculateMoonX = () => {
        return calculateInitialMoonOffsetX() - moonParallaxRateX * window.pageYOffset;
    };

    const setOffset = () => {
        setTitleY(calculateTitleY);

        setMoonX(calculateMoonX);
        setMoonY(calculateMoonY);

        setPlanetY(calculatePlanetY);
        setPlanetSize(Math.min(planetHeight, window.innerWidth));
    }

    const [titleY, setTitleY] = useState(calculateInitialTitleOffset());
    const [planetY, setPlanetY] = useState(calculateInitialPlanetOffset());
    const [moonX, setMoonX] = useState(calculateInitialMoonOffsetX());
    const [moonY, setMoonY] = useState(calculateInitialMoonOffsetY());
    const [planetSize, setPlanetSize] = useState(planetHeight);

    useEffect(() => {
        window.addEventListener('resize', setOffset)
        window.addEventListener("scroll", setOffset);

        return () => {
            window.removeEventListener("resize", setOffset);
            window.removeEventListener("scroll", setOffset);
        }
    });

    return (
        <>
            <Title yCenter={titleY} titleHeight={titleHeight} />
            <Planet yCenter={planetY} planetHeight={planetSize} />
            <Moon yCenter={moonY} xCenter={moonX} />
        </>
    );
}

export default Background;
