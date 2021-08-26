import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="keywords"
            content="puppy, dog, health, management, record, weight, meal, exercise, graph"
          />
          <meta name="author" content="Hiro, Miyu Setoyama" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
