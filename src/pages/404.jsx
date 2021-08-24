import React, { useState } from "react";
import { motion } from "framer-motion";
import SyncLoader from "react-spinners/SyncLoader";

import Layout from "../components/layout";

const Custom404 = () => {
  const description = "";
  const title = "pawly - 404";

  let [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Layout description={description} title={title}>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <SyncLoader loading={loading} size={10} color="#FBBF23" />
          <h6 className="mt-5">coming soon</h6>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Custom404;
