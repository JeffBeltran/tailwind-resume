import Head from "next/head";
import React, { useEffect } from "react";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let tracker = window.document.createElement("script");
    let firstScript = window.document.getElementsByTagName("script")[0];
    tracker.defer = true;
    tracker.setAttribute("site", "ENLQOGXA");
    tracker.setAttribute("spa", "auto");
    tracker.src = "https://jay.tailwindemployee.com/script.js";
    firstScript.parentNode.insertBefore(tracker, firstScript);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Oxygen:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
