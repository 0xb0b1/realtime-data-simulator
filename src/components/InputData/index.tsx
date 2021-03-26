import { FormEvent, useState } from "react";
import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

function InputData() {
  const { createSimulation, createDashboard } = useSimulation();

  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [simulationInterval, setSimulationInterval] = useState(0);

  async function handleCreateSimulationData(event: FormEvent) {
    event.preventDefault();

    await createSimulation({
      maximum,
      minimum,
      frequency,
      simulationInterval,
    });

    createDashboard();
  }

  // createDashboard();

  return (
    <>
      <Container onSubmit={handleCreateSimulationData}>
        <input
          type="number"
          value={minimum}
          placeholder="Minimum value"
          onChange={(event) => setMinimum(Number(event.target.value))}
        />
        <input
          type="number"
          value={maximum}
          placeholder="Maximum value"
          onChange={(event) => setMaximum(Number(event.target.value))}
        />
        <input
          type="number"
          value={frequency}
          placeholder="Frequency in points/second"
          onChange={(event) => setFrequency(Number(event.target.value))}
        />
        <input
          type="number"
          value={simulationInterval}
          placeholder="Interval in seconds"
          onChange={(event) =>
            setSimulationInterval(Number(event.target.value))
          }
        />

        <button type="submit">RUN</button>
      </Container>
    </>
  );
}

export default InputData;
