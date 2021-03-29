import Chart from "chart.js";
import React, { useEffect } from "react";

import { Container } from "./styles";

interface LineGraphProps {
  data: any;
  labels: any;
}

function LineGraph(props: LineGraphProps) {
  const chartRef: any = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels:
          props.labels.length === props.data.length
            ? props.labels
            : new Array(props.data.length).fill("Data"),
        datasets: [
          {
            label: "",
            data: props.data,
          },
        ],
      },
    });
  }, [chartRef]);
  return (
    <Container>
      <canvas id="myChart" ref={chartRef}></canvas>
      {/* <Line data={data} options={options} height={150} width={350} /> */}
    </Container>
  );
}

export default LineGraph;
