import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import SkillCarousel from "../components/SkillCarousel";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

// type Project = {
//   name: string;
//   github: string;
//   demo: string;
//   deployed: string;
//   description: string;
//   images: Array<string>;
// };

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold"> Resume </h2>
          <p className="p-2 m-2">
            You can find my full resume{" "}
            <a
              href="https://drive.google.com/file/d/1xdWaXm6tMRbWmHdiuY5irmAyiAdSrS3G/view?usp=sharing"
              className="text-blue-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </div>

        <div className="max-w-4xl m-5 p-5">
          <h2 className="text-4xl font-bold"> Skills </h2>
          <SkillCarousel />
        </div>

        <div className="m-5 p-5">
          <h2 className="text-4xl font-bold pb-4"> Projects </h2>
          {projects.map((project) => (
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
                {/* {project.demo ? (
                  <a
                    className="p-1 m-1 text-slate-500 dark:text-slate-700"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                ) : null} */}
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
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = [
    {
      id: 1,
      name: "Harmony",
      description:
        "Harmony is a messaging and collaboration tool similar to discord or slack.",
      github: "https://github.com/kadeesterline/harmony",
      // deployed: "",
      // demo: "",
      stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL", "AWS S3"],
      images: [
        "/project-images/harmony-photos/home-screen.png",
        "/project-images/harmony-photos/room-view.png",
      ],
    },
    {
      id: 2,
      name: "Hard Park",
      description:
        "Hard Park is a social media platform built with a focus on cars.",
      github: "https://github.com/kadeesterline/hard-park-front-end",
      // deployed: "",
      // demo: "",
      stack: ["React", "Bootstrap", "Sinatra", "ActiveRecord", "SQLite"],
      images: [
        "/project-images/hardpark-photos/home-page.png",
        "/project-images/hardpark-photos/the-lot.png",
      ],
    },
    {
      id: 3,
      name: "KanBan",
      description: "KanBan is a project management tool similar to trello.",
      github: "https://github.com/kadeesterline/kanban-project",
      deployed: "https://kanbanflatiron.herokuapp.com/",
      // demo: "",
      stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL"],
      images: [
        "/project-images/kanban-photos/board-view.png",
        "/project-images/kanban-photos/home-view.png",
      ],
    },
  ];

  const projects = data;

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
