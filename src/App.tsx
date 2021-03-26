import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import InputData from "./components/InputData";
import { SimulationProvider } from "./hooks/useSimulation";

function App() {
  function createDashboard() {
    console.log("Hello");
  }

  return (
    <SimulationProvider>
      <Header />
      <InputData onSubmit={createDashboard} />
    </SimulationProvider>
  );
}

export default App;
