import "../styles/index.css";
import { Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
