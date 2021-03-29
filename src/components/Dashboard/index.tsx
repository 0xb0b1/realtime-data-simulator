import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

import LineGraph from "../LineGraph";

function Dashboard() {
  const { myData } = useSimulation();

  let XAxis: number = 0;

  return (
    <Container>
      <LineGraph intervalSec={myData.simulationInterval} XAxis={XAxis} />
    </Container>
  );
}

export default Dashboard;
