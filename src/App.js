import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
