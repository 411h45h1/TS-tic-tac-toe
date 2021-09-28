import useSound from "use-sound";

interface Props {
  board: string[];
  handleClick(index: number): void;
}

const Game = (props: Props) => {
  const { board, handleClick } = props;
  const [click] = useSound(`${process.env.PUBLIC_URL}/sounds/click.wav`, {
    volume: 0.5,
  });

  return (
    <div className="gameCont">
      {board.map((value, index) => (
        <div
          key={index}
          className="gameButton"
          onClick={() => {
            click();
            handleClick(index);
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Game;
