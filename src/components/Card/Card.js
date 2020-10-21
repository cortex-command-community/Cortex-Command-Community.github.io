import React from 'react';

function Card(props) {
  return (
    <div style={{ margin: '48px 0'}}>
      <div style={{
        marginTop: '12px',
        border: '1px solid #333',
        padding: '12px 18px',
        borderRadius: '6px',
      }}>
        <h2 style={{
          marginTop: '-28px',
          padding: '0 4px',
          width: 'fit-content',
          background: '#eee',
        }}>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
