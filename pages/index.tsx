import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Kade Esterline</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
};

export default Home;
