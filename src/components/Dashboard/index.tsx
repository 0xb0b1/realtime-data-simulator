import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

function Dashboard() {
  const { myData } = useSimulation();

  return (
    <Container>
      <h1></h1>
    </Container>
  );
}

export default Dashboard;
