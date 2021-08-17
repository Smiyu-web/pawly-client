import React from "react";
import Layout from "../components/layout";
import Meal from "../components/meal/Meal";

const meal = () => {
  const description = "";
  const title = "";
  return (
    <div>
      <Layout description={description} title={title}>
        <Meal />
      </Layout>
    </div>
  );
};

export default meal;
