import React from 'react';

export default function Target(props) {
  return (
    <div
      className={`gameLabel ${
        props.value === props.target && props.gameOn
          ? 'correctTarget'
          : props.gameOn && 'incorrectTarget'
      }`}
    >
      <div>Target:</div>
      {/* <div style={{ display: 'inline', width: '150px' }}>
        {' '}
        &#9658;&nbsp;&#9658;&nbsp;
      </div> */}
      <div style={{ display: 'inline', width: '150px' }}>{props.target}</div>
      {/* <div style={{ display: 'inline', width: '150px' }}>
        &nbsp;&#9668;&nbsp;&#9668;
      </div> */}
    </div>
  );
}
