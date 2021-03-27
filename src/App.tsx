import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import InputData from "./components/InputData";
import { SimulationDataProvider } from "./hooks/useSimulation";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <SimulationDataProvider>
      <GlobalStyle />

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
    </SimulationDataProvider>
  );
}

export default App;
