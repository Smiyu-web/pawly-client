import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_WEIGHTS } from "../../GraphQL/Queries";

const TodayWeight = () => {
  const { error, loading, data } = useQuery(LOAD_WEIGHTS);
  const [weight, setWeight] = useState();

  useEffect(() => {
    if (data) {
      console.log(data);
      const today = data.weights[0].createdAt;
      console.log(today);
      console.log(today.toLocaleString());

      setWeight(data);
    }
  }, [data]);

  return (
    <div className="weight">
      <h1>7.8</h1>
      <div>kg</div>
    </div>
  );
};

export default TodayWeight;
