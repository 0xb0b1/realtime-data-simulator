import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

function Dashboard() {
  const { myData } = useSimulation();

  const min = myData.minimum;
  const max = myData.maximum;

  console.log(min, max);

  return <Container></Container>;
}

export default Dashboard;
