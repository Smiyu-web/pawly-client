import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/layout";
import Weight from "../components/weight/Weight";

const weight = () => {
  const description =
    "Pawly is a puppy health management application. Able to keep a redord of puppy's weight, what they eat, and how long they do exercise.";
  const title = "pawly - weight";
  return (
    <Layout description={description} title={title}>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Weight />
      </motion.div>
    </Layout>
  );
};

export default weight;
