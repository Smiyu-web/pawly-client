import React from "react";

const TodayWeight = ({ todayData }) => {
  return (
    <div className="flex">
      {todayData ? <h1>{todayData.weightNum}</h1> : <h1>0.0</h1>}
      <div className="ml-2">kg</div>
    </div>
  );
};

export default TodayWeight;
