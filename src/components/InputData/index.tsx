import { Container } from "./styles";

function InputData() {
  return (
    <Container>
      <input type="number" placeholder="Minimum value" />
      <input type="number" placeholder="Maximum value" />
      <input type="number" placeholder="Frequency in points/second" />
      <input type="number" placeholder="Interval in seconds" />
      <button type="submit">RUN</button>
    </Container>
  );
}

export default InputData;
