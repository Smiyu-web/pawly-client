import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import TodayWeight from "./TodayWeight";
import Graph from "./Graph";
import AddWeight from "./AddWeight";
import { LOAD_WEIGHTS } from "../../GraphQL/Queries";

const Weight = () => {
  const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data);

      // setWeights(data);
    }
  }, [data]);

  return (
    <div>
      <TodayWeight />
      <Graph />
      <AddWeight />
    </div>
  );
};

export default Weight;
