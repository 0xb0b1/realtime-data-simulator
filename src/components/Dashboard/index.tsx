import { useSimulation } from "../../hooks/useSimulation";
// import range from "../../utils/range";
import { Container } from "./styles";

import LineGraph from "../LineGraph";

function Dashboard() {
  const { myData } = useSimulation();

  const min: number = myData.min;
  const max: number = myData.max;

  const managerData = [
    3910,
    3706,
    2850,
    4005,
    3750,
    2912,
    3200,
    3645,
    4205,
    3211,
    3354,
    3904,
  ];
  const yearLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Container>
      <LineGraph data={managerData} labels={yearLabels} />
    </Container>
  );
}

export default Dashboard;
