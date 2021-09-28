import { Finished, Game, Home } from "./pages";
import useGameLogic from "./useGameLogic";

const App = () => {
  let game = useGameLogic();

  const HomeScreen = () =>
    game.status === "created" ? (
      <Home OnStartGame={game.OnStartGame} />
    ) : game.status === "playing" ? (
      <Game />
    ) : game.status === "finished" ? (
      <Finished />
    ) : null;

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
};

export default App;
