import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Finished, Game, Home } from "./pages";

const App = () => {
  useEffect(() => {}, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Finished">
            <Finished />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
