import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Certificate from "./pages/certificate";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/certificate">
            <Certificate />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
