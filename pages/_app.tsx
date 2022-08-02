import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
// import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ duration: 0.5 }}
      variants={{
        pageInitial: {
          opacity: 0.33,
          // scale: 1.5,
        },
        pageAnimate: {
          opacity: 1,
          // scale: 1,
        },
        pageExit: {
          opacity: 0,
          // scale: 0.5,
        },
      }}
    >
      {/* <ThemeProvider> */}
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      {/* </ThemeProvider> */}
    </motion.div>
  );
}

export default MyApp;
