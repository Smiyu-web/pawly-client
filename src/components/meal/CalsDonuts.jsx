import React from "react";
import { Doughnut } from "react-chartjs-2";

const full = 100;
const breakfast = 20;
const lunch = 20;
const dinner = 40;
const snack = 8;
const result = full - breakfast - lunch - dinner - snack;

const data = {
  labels: ["breakfast", "lunch", "dinner", "snack"],
  datasets: [
    {
      // label: "# of Votes",
      data: [breakfast, lunch, dinner, snack, result],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "#ffffff",
      ],
      borderColor: ["#000000"],
      borderWidth: 1,
    },
  ],
};
const CalsDonuts = () => {
  return (
    <div className="cals_donuts">
      <Doughnut data={data} />
    </div>
  );
};

export default CalsDonuts;
