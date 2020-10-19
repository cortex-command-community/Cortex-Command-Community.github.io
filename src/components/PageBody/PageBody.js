import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import './PageBody.css';

function PageBody(props) {
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
                <div style={{ height: props.titleHeight }} />
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
                        <div id="main-content" className="main-content" style={{
                            maxWidth: '800px',
                            backgroundColor: '#242424',
                            padding: '50px',
                            boxSizing: 'border-box',
                            fontSize: '16pt',
                            zIndex: '10',
                            margin: 'auto',
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
