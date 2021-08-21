import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import { client } from "./api/apollo";

function MyApp({ Component, pageProps, router }) {
  return (
    <ApolloProvider client={client}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ApolloProvider>
  );
}

export default MyApp;
