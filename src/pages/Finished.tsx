interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
  return (
    <div className="finishedCont">
      <h1>{name ? `Player: ${name} wins!!!` : "It's a tie "}</h1>
      <button onClick={restart}>Restart</button>
    </div>
  );
};
export default Finished;
