import React from 'react';
import Background from '../Home/Background/Background';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Home/Card/Card';
import CardContainer from '../Home/CardContainer/CardContainer';
import CardContents from '../Home/CardContents/CardContents';
import MagicArrow from './MagicArrow/MagicArrow';

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
                <CardContainer>
                    <Card>
                        <CardContents
                            title='Upgraded Engine'
                            body='The source code has been enhanced to improve performance.'
                        />
                    </Card>
                    <Card right>
                        <CardContents
                            right
                            title='New Content'
                            body='New weapons, characters, and scenes.'
                        />
                    </Card>
                    <Card>
                        <CardContents
                            title='Improved Strategic Gameplay'
                            body='The team has focused on accentuating the most satisfying gameplay elements.'
                        />
                    </Card>
                </CardContainer>
                <div style={{ height: '48px', }} />
                <Footer />
            </div>
        </div>
    )
}

export default Home;