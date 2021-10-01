import React from 'react';

export default function SubmitButton(props) {
  function handleClick(e) {
    if (props.label === 'Start') {
      props.startGame();
    } else {
      props.submitGuess();
    }
  }

  return (
    <div
      className="button activeButton submitButton"
      style={{ margin: 'auto' }}
      onClick={handleClick}
    >
      <div className="buttonLabel">{props.label}</div>
    </div>
  );
}
