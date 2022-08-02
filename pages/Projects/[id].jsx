import { data } from "autoprefixer";
import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import ReactPlayer from "react-player";

const Project = ({ project }) => {
  console.log("PROJECT : ", project);
  return (
    <div>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold pb-4">{project.name}</h1>
            <Link href={"/Projects"}>
              <a className="font-bold text-slate-500 hover:bg-slate-200  m-2 p-2 rounded-md h-10">
                Back to Projects
              </a>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="flex p-2 pb-0 m-2 mb-0 text-slate-500">
              {project.stack.map((el) => (
                <div className="p-1 m-1">{el}</div>
              ))}
            </div>
            <div className="flex p-2 pb-0 m-2 mb-0">
              <Link href={project.github}>
                <a className=" m-1 p-1">
                  <FaGithub />
                </a>
              </Link>
              {project.deployed ? (
                <Link href={project.deployed}>
                  <a className="m-1 p-1">
                    <FiLink />
                  </a>
                </Link>
              ) : null}
              {project.demo ? (
                <Link href={project.demo}>
                  <a className=" m-1 p-1">
                    <FaYoutube />
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
          {/* NEEDS TO BE STYLED STILL */}
          {project.demo ? (
            <div>
              <h2 className="text-2xl font-bold p-2 m-2">Video Demo</h2>
              <div className="h-96">
                <ReactPlayer url={project.demo} width="100%" height="100%" />
              </div>
            </div>
          ) : null}

          <div>
            {/* Project description(long) */}
            <h2 className="text-2xl font-bold p-2 m-2">Description</h2>
          </div>
          <div>
            {/* Project images / diagrams */}
            <h2 className="text-2xl font-bold p-2 m-2">Images and Diagrams</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const projects = [{ id: 10 }, { id: 20 }, { id: 30 }];

  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const project = await findProject(id);

  return {
    props: {
      project,
    },
  };
};

const findProject = async (id) => {
  const data = [
    {
      index: 10,
      name: "Harmony",
      description:
        "Harmony is a messaging and collaboration tool similar to discord or slack.",
      github: "https://github.com/kadeesterline/harmony",
      deployed: "",
      demo: "",
      stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL", "AWS S3"],
      images: [
        "/project-images/harmony-photos/home-screen.png",
        "/project-images/harmony-photos/room-view.png",
      ],
    },
    {
      index: 20,
      name: "Hard Park",
      description:
        "Hard Park is a social media platform built with a focus on cars.",
      github: "https://github.com/kadeesterline/hard-park-front-end",
      deployed: "",
      demo: "https://youtu.be/srQ6e-Yz7tY",
      stack: ["React", "Bootstrap", "Sinatra", "ActiveRecord", "SQLite"],
      images: [
        "/project-images/hardpark-photos/home-page.png",
        "/project-images/hardpark-photos/the-lot.png",
      ],
    },
    {
      index: 30,
      name: "KanBan",
      description: "KanBan is a project management tool similar to trello.",
      github: "https://github.com/kadeesterline/kanban-project",
      deployed: "https://kanbanflatiron.herokuapp.com/",
      demo: "https://youtu.be/gBGESedbZBw",
      stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL"],
      images: [
        "/project-images/kanban-photos/board-view.png",
        "/project-images/kanban-photos/home-view.png",
      ],
    },
  ];

  // const dataJSON = JSON.stringify(data);

  for (let i = 0; i < data.length; i++) {
    console.log("TARGET:", data[i].index);
    if (data[i].index == id) {
      console.log;
      return data[i];
    } else {
      console.log(
        "ERROR: index ",
        id,
        " not found. found ",
        data[i].index,
        "instead"
      );
    }
  }
};
