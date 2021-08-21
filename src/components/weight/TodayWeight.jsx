import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_WEIGHTS } from "../../GraphQL/Queries";

const TodayWeight = () => {
  // const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  // const [result, setResult] = useState();

  // useEffect(() => {
  //   if (data) {
  //     setResult(data);
  //   }
  // }, [data]);

  return (
    <div className="flex">
      <h1>7.8</h1>
      <div className="ml-2">kg</div>
    </div>
  );
};

export default TodayWeight;
