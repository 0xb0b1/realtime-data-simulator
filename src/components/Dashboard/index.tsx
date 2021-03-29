import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

import LineGraph from "../LineGraph";

function Dashboard() {
  const { myData } = useSimulation();

  const min: number = myData.min;
  const max: number = myData.max;

  let XAxis: number = 0;

  return (
    <Container>
      <LineGraph
        min={min}
        max={max}
        intervalSec={myData.simulationInterval}
        XAxis={XAxis}
      />
    </Container>
  );
}

export default Dashboard;
