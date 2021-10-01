import React from 'react';

export default function Button(props) {
  function handleClick(e) {
    if (props.gameOn) {
      props.setGameState((prevState) => {
        return {
          ...prevState,
          value: prevState.value ^ props.value,
        };
      });
    }
  }

  return (
    <div
      className={props.selected ? 'button activeButton' : 'button'}
      onClick={handleClick}
    >
      <div className="buttonLabel">{props.value}</div>
    </div>
  );
}
