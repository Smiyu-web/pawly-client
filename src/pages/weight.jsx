import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/layout";
import Weight from "../components/weight/Weight";

const weight = () => {
  const description = "";
  const title = "pawly - weight";
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Layout description={description} title={title}>
        <Weight />
      </Layout>
    </motion.div>
  );
};

export default weight;
