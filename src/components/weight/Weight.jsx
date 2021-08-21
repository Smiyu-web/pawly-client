import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_WEIGHTS } from "../../GraphQL/Mutations";
import TodayWeight from "./TodayWeight";
import Graph from "./Graph";
import AddWeight from "./AddWeight";

const Weight = () => {
  const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  const [result, setResult] = useState();

  useEffect(() => {
    if (data) {
      setResult(data);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <TodayWeight />
      <Graph />
      <AddWeight />
    </div>
  );
};

export default Weight;
