import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_WEIGHTS } from "../../GraphQL/Queries";
import TodayWeight from "./TodayWeight";
import Graph from "./Graph";
import AddWeight from "./AddWeight";

const Weight = () => {
  const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  const [result, setResult] = useState();

  useEffect(() => {
    if (data) {
      setResult(data.weights);
    }
  }, [data]);

  const getDay = new Date();
  const year = getDay.getFullYear();
  const month = getDay.getMonth() + 1;
  const date = getDay.getDate();
  const today = year + "-" + month + "-" + date;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <TodayWeight result={result} today={today} />
      <Graph result={result} />
      <AddWeight today={today} />
    </div>
  );
};

export default Weight;
