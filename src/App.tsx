import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import InputData from "./components/InputData";
import { SimulationProvider } from "./hooks/useSimulation";

function App() {
  const [dashboard, setDashboard] = useState("");

  function createDashboard() {
    //
  }
  return (
    <SimulationProvider>
      <Header />
      <InputData />
    </SimulationProvider>
  );
}

export default App;
