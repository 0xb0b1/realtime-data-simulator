import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSimulation } from "../../hooks/useSimulation";
import { Container } from "./styles";

function InputData() {
  const { createSimulation } = useSimulation();
  const { push } = useHistory();

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

    push("/dashboard");

    // create dashboard
  }

  return (
    <Container onSubmit={handleCreateSimulationData}>
      <label>
        Minimum value:
        <input
          type="number"
          value={minimum}
          placeholder="Minimum value"
          onChange={(event) => setMinimum(Number(event.target.value))}
        />
      </label>

      <label>
        Maximum value:
        <input
          type="number"
          value={maximum}
          placeholder="Maximum value"
          onChange={(event) => setMaximum(Number(event.target.value))}
        />
      </label>

      <label>
        Frequency
        <input
          type="number"
          value={frequency}
          placeholder="Frequency points/second"
          onChange={(event) => setFrequency(Number(event.target.value))}
        />
      </label>

      <label>
        Interval in seconds
        <input
          type="number"
          value={simulationInterval}
          placeholder="Interval in seconds"
          onChange={(event) =>
            setSimulationInterval(Number(event.target.value))
          }
        />
      </label>

      <button type="submit">RUN</button>
    </Container>
  );
}

export default InputData;
