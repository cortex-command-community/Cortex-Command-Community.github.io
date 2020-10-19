import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Template(props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <div style={{
        margin: 'auto',
        maxWidth: '800px',
        width: '100%',
        flex: '1',
      }}>
        <div style={{ padding: '0 8px', }}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Template;
