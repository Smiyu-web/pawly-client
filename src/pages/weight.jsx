import React from "react";
import Layout from "../components/layout";
import Weight from "../components/weight/Weight";

const weight = () => {
  const description = "";
  const title = "pawly - weight";
  return (
    <div>
      <Layout description={description} title={title}>
        <Weight />
      </Layout>
    </div>
  );
};

export default weight;
