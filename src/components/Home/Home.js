import React from 'react';
import Background from '../Home/Background/Background';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CortexCard from './CortexCard/CortexCard';
import CortexCardContainer from './CortexCardContainer/CortexCardContainer';
import CortexCardContents from './CortexCardContents/CortexCardContents';
import MagicArrow from './MagicArrow/MagicArrow';

/*image imports*/
import NewImg from './img/stuff.GIF'
import SniperImg from './img/sniper.GIF'
import IntenseImg from './img/crabs.GIF'

function Home() {
    return (
        <div style={{ backgroundColor: '#111'}}>
            <div style={{ position: 'fixed', top: '0', zIndex: '1000', width: '100%' }}>
                <Header />
            </div>
            <MagicArrow />
            <Background />
            {/* This div covers the scroll arrow for lower content. */}
            <div style={{
                position: 'relative',
                zIndex: '101',
                backgroundColor: '#111'
            }}>
                <div className='scroll-anchor' style={{ position: 'relative', top: '-80px' }} />
                <CortexCardContainer>
                    <CortexCard>
                        <CortexCardContents
                            title='Upgraded Engine'
                            body='The source code has been enhanced to improve performance.'
                            image={NewImg}
                            alt=''
                        />
                    </CortexCard>
                    <CortexCard right>
                        <CortexCardContents
                            right
                            title='New Content'
                            body='New weapons, characters, and scenes.'
                            image={IntenseImg}
                            alt=''
                        />
                    </CortexCard>
                    <CortexCard>
                        <CortexCardContents
                            title='Improved Strategic Gameplay'
                            body='The team has focused on accentuating the most satisfying gameplay elements.'
                            image={SniperImg}
                            alt=''
                        />
                    </CortexCard>
                </CortexCardContainer>
                <div style={{ height: '48px', }} />
                <Footer />
            </div>
        </div>
    )
}

export default Home;
