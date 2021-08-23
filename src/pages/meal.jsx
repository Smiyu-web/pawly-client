import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/layout";
import Meal from "../components/meal/Meal";

const meal = () => {
  const description = "";
  const title = "pawly - meal";
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Layout description={description} title={title}>
        <Meal />
      </Layout>
    </motion.div>
  );
};

export default meal;
