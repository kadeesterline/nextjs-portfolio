import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { VscGithub } from "react-icons/vsc";
import { FaDev, FaLinkedin, FaTiktok } from "react-icons/fa";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center rounded-lg lg:text-left bg-slate-200 dark:bg-slate-600">
        <div className="lg:px-4 lg:mt-12">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl">
            Hey there, I'm Kade
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Welcome to my portfolio, where you'll find all of my projects and
              blog posts. If you have any questions or just want to chat, you
              can find me on
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://www.linkedin.com/in/kade-esterline/"
              >
                {" "}
                LinkedIn{" "}
              </a>
              or, you can use the contact form right here on my portfolio.
            </p>
            <div className="flex lg:mg-12 lg:px-4 justify-evenly">
              <a
                className="mt-6  text-5xl font-bold"
                href="https://www.linkedin.com/in/kade-esterline/"
              >
                <FaLinkedin />
              </a>
              <a
                className="mt-6 text-5xl font-bold"
                href="https://github.com/kadeesterline"
              >
                <VscGithub />
              </a>
              <a
                className="mt-6 text-5xl font-bold"
                href="https://dev.to/kadeesterline"
              >
                <FaDev />
              </a>
              {/* <a
                className="mt-6 text-5xl font-bold"
                href="https://www.tiktok.com/@kadecodes"
              >
                <FaTiktok />
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 mt-6">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
