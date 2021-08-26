import React, { useState } from "react";
import { motion } from "framer-motion";
import SyncLoader from "react-spinners/SyncLoader";

import Layout from "../components/layout";

const Custom404 = () => {
  const description =
    "Pawly is a puppy health management application. Able to keep a redord of puppy's weight, what they eat, and how long they do exercise.";
  const title = "pawly - 404";

  let [loading, setLoading] = useState(true);

  return (
    <Layout description={description} title={title}>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <SyncLoader loading={loading} size={10} color="#FBBF23" />
          <h6 className="mt-5">coming soon</h6>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Custom404;
