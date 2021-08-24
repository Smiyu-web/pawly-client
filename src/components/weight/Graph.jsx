import React from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ result }) => {
  const daysArr = [];
  const weightArr = [];
  result?.map((r) => {
    return daysArr.push(r.day) && weightArr.push(r.weightNum);
  });

  const chart_data = {
    labels: daysArr,
    datasets: [
      {
        data: weightArr,
        fill: false,
        backgroundColor: "#FBBF23",
        borderColor: "#fbbe2345",
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

  return (
    <div className="w-screen flex justify-center items-center my-10">
      <div className="w-90vw md:w-70vw">
        <Line data={chart_data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
