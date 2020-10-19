import React from 'react';
import './App.css';
import Background from '../Background/Background';
import PageBody from '../PageBody/PageBody';

const titleHeight = 161; // Pixel height of title image

function App() {
  return (
    <>
      <Background titleHeight={titleHeight}></Background>
      <section style={{
        height: '100vh',
      }}>
      </section>
      <section>
        <PageBody titleHeight={titleHeight}/>
      </section>
    </>
  );
}

export default App;
