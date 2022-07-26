// import { data } from "autoprefixer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiLink, FiArrowLeft } from "react-icons/fi";
import Iframe from "react-iframe";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Project = ({ project }) => {
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState("");

  function handleImgClick(index, item) {
    console.log(item.props.src);
    setImage(item.props.src);
    setShowImage(true);
  }

  function hideImg() {
    setShowImage(false);
    setImage("");
  }

  return (
    <div>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="m-5 p-5">
          <div className="border-b-2">
            <div className="grid grid-cols-5">
              <h1 className="text-4xl font-bold pb-4 col-span-4">
                {project.name}
              </h1>
              <Link href={"/Projects"}>
                <a className="font-bold text-slate-500 hover:bg-slate-200  m-2 p-2 rounded-md h-10 flex justify-center col-span-1">
                  <FiArrowLeft className="m-1" />
                  Back
                </a>
              </Link>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-wrap p-2 pb-0 m-2 mb-0 text-slate-500 col-span-2">
                {project.stack.map((el) => (
                  <div className="p-1 m-1">{el}</div>
                ))}
              </div>

              <div className="flex p-2 pb-0 m-2 mb-0 ">
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
          </div>

          {project.longDescription ? (
            <div>
              <h2 className="text-2xl font-bold p-2 m-2">Description</h2>

              <p>{project.longDescription}</p>
            </div>
          ) : null}

          {project.demo ? (
            <div>
              <h2 className="text-2xl font-bold p-2 m-2">Video Demo</h2>
              <Iframe
                url={project.demo}
                position="relative"
                className="h-96 w-full"
              />
            </div>
          ) : null}

          {project.images ? (
            <div>
              <h2 className="text-2xl font-bold p-2 m-2">
                Images and Diagrams
              </h2>
              <Carousel
                className="m-2 p-2 "
                centerMode={true}
                centerSlidePercentage={50}
                infiniteLoop={true}
                showThumbs={false}
                onClickItem={handleImgClick}
              >
                {project.images.map((image) => (
                  <Image src={image} width="325" height="200" />
                ))}
              </Carousel>
              <p className="text-slate-500">
                <em>click an image to expand it</em>
              </p>
            </div>
          ) : null}
        </div>
        {showImage ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl p-8 m-2 bg-slate-600 rounded-md">
                <button
                  className=" text-slate-200 absolute top-3 right-4"
                  onClick={hideImg}
                >
                  X
                </button>
                <Image src={image} width="750" height="450" />
              </div>
            </div>
          </div>
        ) : null}
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
      longDescription:
        "Harmony is a messaging and collaboration tool similar to discord or slack. It was built using React, Tailwind, Ruby on Rails and Postgres. Users are able to join, create and invite others to join their room. Users can then send messages inside of a rooms channels. Text can be formatted using TipTapjs, gifs can be sent using the Giphy API and image/file upload and storage is being done with ActiveStorage and AWS S3. There are two different user groups for every board, normal users and moderators. Moderators are able to delete anyones messages while users are able to edit and delete their own messages. There is full CRUD on Rooms, Channels, Posts, and Replies.",
      github: "https://github.com/kadeesterline/harmony",
      deployed: "",
      demo: "",
      stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL", "AWS S3"],
      images: [
        "/project-images/harmony-photos/home-screen.png",
        "/project-images/harmony-photos/room-view.png",
        "/project-images/harmony-photos/wireframe1.png",
        "/project-images/harmony-photos/wireframe2.png",
        "/project-images/harmony-photos/wireframe3.png",
        "/project-images/harmony-photos/frontend-flow.png",
        "/project-images/harmony-photos/erd.png",
      ],
    },
    {
      index: 20,
      name: "Hard Park",
      description:
        "Hard Park is a social media platform built with a focus on cars.",
      longDescription:
        "Hard Park is a social media platform built with a focus on cars. It was built using React, Bootstrap, Sinatra, ActiveRecord and SQLite. Users are able to post their car with a brief description as well as like and leave comments on posts. Users can also filter through the cars in order to see specific categories of cars.",
      github: "https://github.com/kadeesterline/hard-park-front-end",
      deployed: "",
      demo: "https://youtube.com/embed/srQ6e-Yz7tY",
      stack: ["React", "Bootstrap", "Sinatra", "ActiveRecord", "SQLite"],
      images: [
        "/project-images/hardpark-photos/home-page.png",
        "/project-images/hardpark-photos/the-lot.png",
        "/project-images/hardpark-photos/frontend-flow.png",
        "/project-images/hardpark-photos/ERD.png",
      ],
    },
    {
      index: 30,
      name: "KanBan",
      description: "KanBan is a project management tool similar to trello.",
      longDescription:
        "KanBan is a project management tool similar to trello. It was built using React, Tailwind, Ruby on Rails and Postgres. It's being hosted on Heroku, you can visit the hosted site by clicking the link icon up above. Users are able to join and create project boards that have different lists for tasks. Lists represent a different stage in a tasks lifecycle, for example 'to do' or 'in progress'. Users can drag and drop task items between lists using Atlassians Drag and Drop library. All four CRUD actions can be performed on boards, lists and tasks.",
      github: "https://github.com/kadeesterline/kanban-project",
      deployed: "https://kanbanflatiron.herokuapp.com/",
      demo: "https://youtube.com/embed/gBGESedbZBw",
      stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL"],
      images: [
        "/project-images/kanban-photos/board-view.png",
        "/project-images/kanban-photos/home-view.png",
        "/project-images/kanban-photos/edit-view.png",
        "/project-images/kanban-photos/wireframe1.png",
        "/project-images/kanban-photos/wireframe2.png",
        "/project-images/kanban-photos/erd.png",
      ],
    },
  ];

  // const dataJSON = JSON.stringify(data);

  for (let i = 0; i < data.length; i++) {
    if (data[i].index == id) {
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
