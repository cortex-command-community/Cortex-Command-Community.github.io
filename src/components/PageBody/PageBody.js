import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';

function PageBody() {
    return (
        <>
            <div style={{
                position: 'sticky',
                top: '0',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                zIndex: '100',
                pointerEvents: 'none',
            }}>
                <div style={{ height: 181 }} />
                <div style={{
                    position: 'relative',
                    pointerEvents: 'initial',
                    flexGrow: '1',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Header />
                    <div style={{
                        backgroundColor: '#242424',
                        flexGrow: '1',
                    }}>
                        <img src='./banner.png' alt='' style={{
                            width: '100%',
                        }}></img>
                        <div id="main-content" style={{
                            maxWidth: '800px',
                            backgroundColor: '#242424',
                            margin: '-400px auto',
                            padding: '50px',
                            boxSizing: 'border-box',
                            fontSize: '16pt',
                            zIndex: '10',
                            position: 'relative',
                        }}>
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageBody;