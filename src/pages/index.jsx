import Layout from "../components/layout";
import HomePage from "../components/home/HomePage";
import { motion } from "framer-motion";

export default function Home() {
  const description = "";
  const title = "pawly";
  return (
    <Layout description={description} title={title}>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <HomePage />
      </motion.div>
    </Layout>
  );
}
