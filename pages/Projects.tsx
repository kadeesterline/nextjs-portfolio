import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { server } from "../config/index";

import SkillCarousel from "../components/SkillCarousel";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

type Project = {
  name: string;
  github: string;
  demo: string;
  deployed: string;
  description: string;
  images: Array<string>;
};

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold"> Resume </h2>
          <p className="p-2 m-2">
            You can find my full resume{" "}
            <a
              href="https://drive.google.com/file/d/1xdWaXm6tMRbWmHdiuY5irmAyiAdSrS3G/view?usp=sharing"
              className="text-blue-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-600"
            >
              here
            </a>
          </p>
        </div>

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
              images: Array<string>;
            }) => (
              <div className="border-2 p-4 m-4 rounded-md bg-slate-100 dark:bg-slate-200">
                <h3 className="text-2xl font-bold dark:text-black">
                  {project.name}
                </h3>
                <div className="flex">
                  <a
                    className="p-1 m-1 text-slate-500 dark:text-slate-700"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  {project.deployed ? (
                    <a
                      className="p-1 m-1 text-slate-500 dark:text-slate-700"
                      href={project.deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLink />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      className="p-1 m-1 text-slate-500 dark:text-slate-700"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  ) : null}
                </div>
                <p className="text-lg text-slate-500 dark:text-slate-600">
                  <em>{project.description}</em>
                </p>
                <ul className="flex border-b-2">
                  {project.stack.map((item) => (
                    <li className="p-2 text-slate-500 dark:text-slate-400">
                      {" "}
                      - {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-evenly p-3">
                  {project.images.map((image) => (
                    <Image src={image} width="325" height="200" />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
