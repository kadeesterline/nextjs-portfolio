import type { NextPage } from "next";
import Head from "next/head";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { server } from "./index";

import SkillCarousel from "../components/SkillCarousel";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const Projects: NextPage = ({ projects }) => {
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
          <h2 className="text-4xl font-bold pb-4"> Projects </h2>
          {projects.map(
            (project: {
              name: string;
              description: string;
              stack: Array<string>;
              github: string;
              deployed: string;
              demo: string;
            }) => (
              <div className="border-2 p-4 m-4 rounded-md">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <div className="flex">
                  <a className="p-1 m-1" href={project.github}>
                    <FaGithub />
                  </a>
                  {project.deployed ? (
                    <a className="p-1 m-1" href={project.deployed}>
                      <FiLink />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a className="p-1 m-1" href={project.demo}>
                      <FaYoutube />
                    </a>
                  ) : null}
                </div>
                <p className="text-lg">
                  <em>{project.description}</em>
                </p>
                <ul className="flex border-b-2">
                  {project.stack.map((item) => (
                    <li className="p-2"> - {item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
