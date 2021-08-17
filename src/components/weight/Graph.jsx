import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "7/1",
    "7/2",
    "7/3",
    "7/4",
    "7/5",
    "7/6",
    "7/7",
    "7/8",
    "7/9",
    "7/10",
    "7/11",
    "7/12",
    "7/13",
    "7/14",
    "7/15",
    "7/16",
    "7/17",
    "7/18",
    "7/19",
    "7/20",
    "7/21",
    "7/22",
    "7/23",
    "7/24",
    "7/25",
    "7/26",
    "7/27",
    "7/28",
    "7/29",
    "7/30",
    "7/31",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [7.2, 7.1, 7.3, 7.2, 7.5, 7.6, 7.6],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  // scales: {
  //   yAxes: [
  //     {
  //       ticks: {
  //         beginAtZero: true,
  //       },
  //     },
  //   ],
  // },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Graph = () => (
  <div className="w-80vw">
    <Line data={data} options={options} />
  </div>
);

export default Graph;
