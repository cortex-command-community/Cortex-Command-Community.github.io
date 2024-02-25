import React from 'react';
import Background from '../Home/Background/Background';

import CortexCard from './CortexCard/CortexCard';
import CortexCardContainer from './CortexCardContainer/CortexCardContainer';
import CortexCardContents from './CortexCardContents/CortexCardContents';
import MagicArrow from './MagicArrow/MagicArrow';

function Home() {
    return (
        <div style={{ backgroundColor: '#111'}}>
            <div style={{ position: 'fixed', top: '0', zIndex: '1000', width: '100%' }}>
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
                            body='The source code has been enhanced to improve performance, modding support, and basic gameplay for a renewed experience. '
                        />
                    </CortexCard>
                    <CortexCard right>
                        <CortexCardContents
                            right
                            title='New Content'
                            body='New weapons, characters, and scenes based on the original concept art and design, as well as original content designed by our team to fill in the missing gaps in the original concepts.'
                        />
                    </CortexCard>
                    <CortexCard>
                        <CortexCardContents
                            title='Improved Strategic Gameplay'
                            body='The team has focused on accentuating the most satisfying gameplay elements, and making strategic choices matter more on the battlefield.'
                        />
                    </CortexCard>
                </CortexCardContainer>
                <div style={{ height: '48px', }} />
            </div>
        </div>
    )
}

export default Home;
