import React from 'react';

export default function Scoreboard(props) {
  return (
    <div className="gameLabel scoreboard">
      Score:
      <br />
      {props.score}
    </div>
  );
}
