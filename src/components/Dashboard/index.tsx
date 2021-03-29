import { useSimulation } from "../../hooks/useSimulation";
// import range from "../../utils/range";
import { Container } from "./styles";

import LineGraph from "../LineGraph";
import range from "../../utils/range";

function Dashboard() {
  const { myData } = useSimulation();

  const min: number = myData.min;
  const max: number = myData.max;

  return (
    <Container>
      <LineGraph min={min} max={max} intervalSec={myData.simulationInterval} />
    </Container>
  );
}

export default Dashboard;
