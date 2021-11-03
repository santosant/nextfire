import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
