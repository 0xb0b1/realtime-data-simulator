import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

import LineGraph from "../LineGraph";

function Dashboard() {
  const { myData } = useSimulation();

  console.log(myData.min);

  let XAxis: number = 0;

  return (
    <Container>
      <LineGraph
        min={myData.minimum}
        max={myData.maximum}
        intervalSec={myData.simulationInterval}
        XAxis={XAxis}
      />
    </Container>
  );
}

export default Dashboard;
