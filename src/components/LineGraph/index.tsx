import Chart from "chart.js";
import React, { useEffect } from "react";

import { Container } from "./styles";

interface LineGraphProps {
  min: number;
  max: number;
  XAxis: number;
  intervalSec: number;
}

function LineGraph({ min, max, XAxis, intervalSec }: LineGraphProps) {
  const chartRef: any = React.createRef();

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
                suggestedMin: 0,
              },
            },
          ],
          xAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });

    // function to add a new XAxe, point[x, y].
    const addData = (chart: any, label: any, data: any) => {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset: any) => {
        dataset.data.push(data);
      });
      chart.data.datasets[0].label = `X: ${label}, Y: ${data}`;

      chart.update();
    };

    const showPointXY = () => {};

    // live updating the chart adding a new point[x, y].
    setInterval(() => {
      addData(myLineChart, XAxis++, Math.floor(Math.random() * (11 - 1) + 1));
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
