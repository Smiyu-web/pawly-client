import Layout from "../components/layout";
import HomePage from "../components/home/HomePage";

export default function Home() {
  const description = "";
  const title = "";
  return (
    <div>
      <Layout description={description} title={title}>
        <HomePage />
      </Layout>
    </div>
  );
}
