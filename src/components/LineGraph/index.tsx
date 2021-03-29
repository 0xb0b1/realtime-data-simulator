import Chart from "chart.js";
import React, { useEffect } from "react";
import { useSimulation } from "../../hooks/useSimulation";

import { Container } from "./styles";

function LineGraph() {
  const chartRef: any = React.createRef();

  const { myData } = useSimulation();

  const min: any = myData.minimum;
  const max: any = myData.maximum;

  let XAxis: number = 0;
  let intervalSec = myData.simulationInterval;

  useEffect(() => {
    buildChart();
  });

  const buildChart = () => {
    const myChartRef = chartRef.current.getContext("2d");

    const myLineChart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "X: 0, Y: 0",
            data: [],
            fill: true,
            backgroundColor: "#33cc91",
            borderColor: "#41856C",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                suggestedMin: min,
                min: min,
                max: max,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                min: min,
              },
            },
          ],
        },
      },
    });

    // function to add a new XAxe, point[x, y].
    const addData = (chart: any, label: number, data: number) => {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset: any) => {
        dataset.data.push(data);
      });
      chart.data.datasets[0].label = `X: ${label}, Y: ${data}`;

      chart.update();
    };

    // live updating the chart adding a new point[x, y].
    setInterval(() => {
      addData(
        myLineChart,
        XAxis++,
        Math.floor(Math.random() * (max - min) + min)
      );
    }, intervalSec * 1000);
  };

  return (
    <Container>
      <canvas id="myChart" ref={chartRef}></canvas>
      {/* <Line data={data} options={options} height={150} width={350} /> */}
    </Container>
  );
}

export default LineGraph;
