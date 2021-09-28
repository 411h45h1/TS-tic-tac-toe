import React from "react";

interface Props {
  board: string[];
  handleClick(index: number): void;
}

const Game = (props: Props) => {
  const { board, handleClick } = props;

  return (
    <div className="gameCont">
      {board.map((value, index) => (
        <button className="gameButton" onClick={() => handleClick(index)}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default Game;
