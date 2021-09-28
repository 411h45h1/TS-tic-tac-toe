import { Finished, Game, Home } from "./pages";
import useGameLogic from "./useGameLogic";

const App = () => {
  let game = useGameLogic();

  const Screens = () =>
    game.status === "created" ? (
      <Home OnStartGame={game.OnStartGame} />
    ) : game.status === "playing" ? (
      <Game board={game.board} handleClick={game.handleClick} />
    ) : game.status === "finished" ? (
      <Finished name={game.winner} restart={game.OnRestartGame} />
    ) : null;

  return (
    <div className="App">
      <Screens />
    </div>
  );
};

export default App;
