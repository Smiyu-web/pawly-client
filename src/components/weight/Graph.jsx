import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_WEIGHTS } from "../../GraphQL/Mutations";
import { Line } from "react-chartjs-2";

const chart_data = {
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
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Graph = () => {
  // console.log(props);
  return (
    <div className="w-screen flex justify-center items-center my-10">
      <div className="w-70vw">
        <Line data={chart_data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
