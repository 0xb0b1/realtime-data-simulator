import { deepStrictEqual } from "assert";
import Chart from "chart.js";
import { range } from "d3";
import React, { useEffect } from "react";

import { Container } from "./styles";

interface LineGraphProps {
  min: number;
  max: number;
  intervalSec: number;
}

function LineGraph({ min, max, intervalSec }: LineGraphProps) {
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
            data: [],
            fill: false,
            borderColor: "#33cc95",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            left: 15,
            right: 15,
            bottom: 15,
          },
        },
      },
    });

    const addData = (chart: any, label: any, data: any) => {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset: any) => {
        dataset.data.push(data);
      });
      chart.update();
    };

    setInterval(() => {
      addData(
        myLineChart,
        intervalSec++,
        Math.floor(Math.random() * (10 - 1) + 1)
      );
    }, 1000);
  };

  return (
    <Container>
      <canvas id="myChart" ref={chartRef}></canvas>
      {/* <Line data={data} options={options} height={150} width={350} /> */}
    </Container>
  );
}

export default LineGraph;
