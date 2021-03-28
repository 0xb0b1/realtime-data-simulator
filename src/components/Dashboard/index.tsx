// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import { useEffect } from "react";
import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

function Dashboard() {
  const { myData } = useSimulation();
  console.log(myData);

  return <Container></Container>;
}

export default Dashboard;
