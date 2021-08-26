import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_WEIGHTS } from "../../GraphQL/Queries";
import TodayWeight from "./TodayWeight";
import Graph from "./Graph";
import AddWeight from "./AddWeight";
import EditWeight from "./EditWeight";
import Loading from "../ui/Loading";
import DeleteWeight from "./DeleteWeight";

const Weight = () => {
  const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  // useEffect(() => {
  //   try {
  //     setIsLoading(true);
  //     if (data) {
  //       setResult(data.weights);
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [data]);

  useEffect(() => {
    if (data) {
      setResult(data.weights);
    }
  }, [data]);

  return (
    <>
      {/* {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : ( */}
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <TodayWeight todayData={todayData} today={today} />
        <Graph result={result} />
        <div className="flex">
          <AddWeight today={today} />
          <EditWeight today={today} todayData={todayData} />
          <DeleteWeight todayData={todayData} />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Weight;
