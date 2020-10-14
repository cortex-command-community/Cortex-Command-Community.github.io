import React from 'react';
import './App.css';
import Background from '../Background/Background';
import PageBody from '../PageBody/PageBody';

function App() {
  return (
    <>
      <Background></Background>
      <section style={{
        height: '100vh',
      }}>
      </section>
      <section style={{
        height: '20vh',
      }}>
      </section>
      <section>
        <PageBody/>
      </section>
    </>
  );
}

export default App;
