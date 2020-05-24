import "../styles/index.css";
import { Footer } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
