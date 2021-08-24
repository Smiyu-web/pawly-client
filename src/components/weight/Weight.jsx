import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_WEIGHTS } from "../../GraphQL/Queries";
import TodayWeight from "./TodayWeight";
import Graph from "./Graph";
import AddWeight from "./AddWeight";
import EditWeight from "./EditWeight";

const Weight = () => {
  const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  const [result, setResult] = useState();

  const getDay = new Date();
  const year = getDay.getFullYear();
  const month = getDay.getMonth() + 1;
  const date = getDay.getDate();
  const today = year + "-" + month + "-" + date;

  function getDataByDay() {
    return result?.find((data) => data.day === today);
  }
  const todayData = getDataByDay();
  const todayWeight = todayData?.weightNum;

  useEffect(() => {
    if (data) {
      setResult(data.weights);
    }
  }, [data]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <TodayWeight todayData={todayData} today={today} />
      <Graph result={result} />
      <div className="flex">
        <AddWeight today={today} todayData={todayData} />
        <EditWeight today={today} todayWeight={todayWeight} />
      </div>
    </div>
  );
};

export default Weight;
