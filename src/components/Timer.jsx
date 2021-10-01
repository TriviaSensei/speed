import React from 'react';

export default function Timer(props) {
  return (
    <div
      className={`gameLabel timer ${props.timeLeft < 5 && 'incorrectTarget'}`}
    >
      Time:
      <br />
      {props.timeLeft.toFixed(1)}
    </div>
  );
}
