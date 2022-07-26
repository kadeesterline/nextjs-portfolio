import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider> */}
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
