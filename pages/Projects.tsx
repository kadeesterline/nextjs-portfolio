import type { NextPage } from "next";
import Head from "next/head";
import SkillCarousel from "../components/SkillCarousel";

const Projects: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold"> Skills </h2>
          <SkillCarousel />
        </div>

        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold"> Projects </h2>
        </div>
      </main>
    </div>
  );
};

export default Projects;
