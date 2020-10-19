import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Template(props) {
  return (
    <div style={{ minHeight: '100%' }}>
      <Header />
      <div style={{
        margin: 'auto',
        padding: '0',
        maxWidth: '800px',
      }}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Template;
