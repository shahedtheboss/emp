import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Library from "./components/Library";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
