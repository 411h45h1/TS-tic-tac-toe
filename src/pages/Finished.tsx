import useSound from "use-sound";

interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
  const [errorSound] = useSound(`${process.env.PUBLIC_URL}/sounds/denied.wav`, {
    volume: 0.5,
  });

  const [click] = useSound(`${process.env.PUBLIC_URL}/sounds/click.wav`, {
    volume: 0.5,
  });

  const [win] = useSound(`${process.env.PUBLIC_URL}/sounds/gba win.wav`, {
    volume: 0.5,
  });

  if (!name) {
    errorSound();
  } else win();

  return (
    <div className="finishedCont">
      <h1>{name ? `Player: ${name} wins!!!` : "It's a draw "}</h1>
      <button
        onClick={() => {
          restart();
          click();
        }}
      >
        Restart
      </button>
    </div>
  );
};
export default Finished;
