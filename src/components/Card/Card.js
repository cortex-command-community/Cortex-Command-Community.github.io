import React from 'react';

function Card(props) {
  return (
    <div style={{ margin: '48px 0'}}>
      <div style={{
        marginTop: '12px',
        border: '1px solid #ddd',
        padding: '12px 18px',
        borderRadius: '6px',
      }}>
        <h2 style={{
          marginTop: '-28px',
          paddingLeft: '8px',
          paddingRight: '8px',
          marginBottom: '-1px',
          float: 'left',
          background: '#202020',
        }}>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
