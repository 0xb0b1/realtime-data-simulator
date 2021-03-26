import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import InputData from "./components/InputData";
import { SimulationProvider } from "./hooks/useSimulation";

function App() {
  return (
    <SimulationProvider>
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact>
            <InputData />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </SimulationProvider>
  );
}

export default App;
