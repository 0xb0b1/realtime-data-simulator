import React, { useEffect } from "react";
import Chart from "chart.js";
import { useSimulation } from "../../hooks/useSimulation";
// import range from "../../utils/range";
import { Container } from "./styles";

function Dashboard() {
  const { myData } = useSimulation();

  const min: number = myData.min;
  const max: number = myData.max;

  const chartRef: any = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            label: "",
            data: [5, 1, 2, 6, 10, 9, 8, 7, 2, 5],
          },
        ],
      },
    });
  });

  return (
    <Container>
      <div>
        <canvas id="myChart" ref={chartRef}></canvas>
      </div>
      {/* <Line data={data} options={options} height={150} width={350} /> */}
    </Container>
  );
}

export default Dashboard;
