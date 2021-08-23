import React from "react";

const TodayWeight = ({ result, today }) => {
  console.log(today);
  console.log(result);
  const todayWeight = (arr) => {
    for (let i = 0; i < arr?.length; i++) {
      if (arr[i].day === today) return arr[i].weightNum;
    }
    return 0.0;
  };

  console.log(todayWeight(result));

  return (
    <div className="flex">
      <h1>7.8</h1>
      <div className="ml-2">kg</div>
    </div>
  );
};

export default TodayWeight;
