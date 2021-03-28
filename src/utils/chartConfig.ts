export let data: any = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "11s"],
  datasets: [
    {
      data: [1, 5, 8, 2, 8, 9, 5, 9],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 10, 0, 0.4)",
    },
  ],
};

export let options: any = {
  responsive: true,
  scales: {
    y: {
      type: "linear",
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          // min: min,
          // max: max,
        },
      },
    ],
  },
};
