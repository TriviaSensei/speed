import React from 'react';
import Button from './Button';
export default function ButtonContainer(props) {
  const vals = [64, 32, 16, 8, 4, 2, 1];

  return (
    <div className="buttonContainer">
      {vals.map((el, ind) => {
        return (
          <Button
            key={6 - ind}
            value={el}
            selected={(props.value & vals[ind]) > 0}
            setGameState={props.setGameState}
            gameOn={props.gameOn}
          />
        );
      })}
    </div>
  );
}
