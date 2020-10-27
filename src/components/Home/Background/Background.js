import React, { useEffect, useState } from 'react';
import Title from './Title/Title';
import Moon from './planetoids/Moon';
import Planet from './planetoids/Planet';

function Background() {
    const titleHeight = 151; // Pixel height of title image
    const planetHeight = 550; // Pixel size of planet image, 1:1 aspect ratio
    // const moonHeight = 176;   // Pixel size of moon image, 1:1 aspect ratio

    const moonParallaxRateX = .2;
    const moonParallaxRateY = .8;

    const calculateExtraPlanetOffset = () => {
        return (Math.min(planetHeight, window.innerWidth) / 4);
    };

    const calculateInitialTitleOffset = () => {
        return window.innerHeight / 2;
    };

    const calculateInitialMoonOffsetX = () => {
        return ((window.innerWidth + planetHeight) / 2) - (planetHeight / 8);
    };

    const calculateInitialMoonOffsetY = () => {
        return window.innerHeight - 1.8 * calculateExtraPlanetOffset();
    };

    const calculateTitleY = () => {
        const scrollTitleOffset = calculateExtraPlanetOffset() + window.innerHeight / 2;
        if (window.pageYOffset < scrollTitleOffset) {
            return calculateInitialTitleOffset();
        } else {
            return calculateInitialTitleOffset() + scrollTitleOffset - window.pageYOffset;
        }
    };

    const calculateMoonY = () => {
        const finalOffset = -150;

        let offset = calculateInitialMoonOffsetY() - moonParallaxRateY * window.pageYOffset;
        return Math.max(offset, finalOffset)
    };

    const calculateMoonX = () => {
        return calculateInitialMoonOffsetX() - moonParallaxRateX * window.pageYOffset;
    };

    const [titleY, setTitleY] = useState(calculateInitialTitleOffset());
    const [moonX, setMoonX] = useState(calculateInitialMoonOffsetX());
    const [moonY, setMoonY] = useState(calculateInitialMoonOffsetY());
    const [planetSize, setPlanetSize] = useState(planetHeight);

    const setOffset = () => {
        setTitleY(calculateTitleY);

        setMoonX(calculateMoonX);
        setMoonY(calculateMoonY);

        setPlanetSize(Math.min(planetHeight, window.innerWidth));
    }

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
            <div style={{ height: (window.innerHeight / 2) + (planetSize / 4) }}></div>
            <section className='full-pager' style={{
                minHeight: planetSize,
                height: window.innerHeight,
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Title yCenter={titleY} titleHeight={titleHeight} />
                <Planet planetHeight={planetSize} offset={calculateInitialTitleOffset()} />
            </section>
            <Moon yCenter={moonY} xCenter={moonX} />
        </>
    );
}

export default Background;
