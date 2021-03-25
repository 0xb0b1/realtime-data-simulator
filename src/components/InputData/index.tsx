import { FormEvent, useEffect, useState } from "react";
import { useSimulation } from "../../hooks/useSimulation";
import { api } from "../../services/api";
import { Container } from "./styles";

function InputData() {
  // const { createSimulation } = useSimulation();

  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [simulationInterval, setSimulationInterval] = useState(0);

  useEffect(() => {
    api.get("/data").then((response) => console.log(response.data));
  });

  async function handleCreateSimulationData(event: FormEvent) {
    event.preventDefault();

    console.log({
      maximum,
      minimum,
      frequency,
      simulationInterval,
    });

    setMinimum(0);
    setMaximum(0);
    setFrequency(0);
    setSimulationInterval(0);
  }

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
