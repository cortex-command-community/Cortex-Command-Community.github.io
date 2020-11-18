import React from 'react';
import Background from '../Home/Background/Background';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CortexCard from './CortexCard/CortexCard';
import CortexCardContainer from './CortexCardContainer/CortexCardContainer';
import CortexCardContents from './CortexCardContents/CortexCardContents';
import MagicArrow from './MagicArrow/MagicArrow';

/*image imports*/
import DummySquadImg from './img/Team.png'
import JoystickImg from './img/Joystick.png'
import BuymenuImg from './img/BuyMenu.png'

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
                            image={DummySquadImg}
                            alt='A Handdrawn/Pixelart Image of a Dummy Squad from Cortex Command.'
                        />
                    </CortexCard>
                    <CortexCard right>
                        <CortexCardContents
                            right
                            title='New Content'
                            body='New weapons, characters, and scenes.' image={BuymenuImg}
                            alt='A Handdrawn/Pixelart Image of the Buy Menu from Cortex Command.'
                        />
                    </CortexCard>
                    <CortexCard>
                        <CortexCardContents
                            title='Improved Strategic Gameplay'
                            body='The team has focused on accentuating the most satisfying gameplay elements.'
                            image={JoystickImg}
                            alt='A Handdrawn/Pixelart Image of a Joystick, an input method that can be used to (ineffiecently) play Cortex Command.'
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
