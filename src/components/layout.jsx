import React from "react";
import Head from "next/head";
import Nabvar from "./navbar/Nabvar";

const Layout = ({ description, title, children }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <main>
        {children}
        <Nabvar />
      </main>
    </div>
  );
};

export default Layout;
