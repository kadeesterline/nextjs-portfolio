import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { VscGithub } from "react-icons/vsc";
import { FaDev, FaLinkedin, FaTiktok } from "react-icons/fa";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className=" mx-4 text-center rounded-lg lg:text-left bg-slate-200 dark:bg-slate-600">
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center flex flex-col-reverse">
          <div className="lg:px-4 lg:mt-12">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl">
              Hey there, I'm Kade
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4 ">
                If you had asked me a few years ago if I thought I'd be a
                software engineer some day I would have looked at you like you
                were crazy. While I was fixing computers and knew that I
                absolutely loved everything that had to do with them, I didn't
                see my self as someone who could learn the skills it takes to be
                a software engineer. I proved my self wrong within the first
                week of my bootcamp experience. Not only did I enjoy working
                with code, I understood it quickly. Now, I'm excited to continue
                solving problems with software and I look forward to learning
                new skills.
              </p>
              <div className="flex lg:mg-12 lg:px-4 justify-evenly mb-3">
                <a
                  className="mt-6 mb-3 text-5xl font-bold"
                  href="https://www.linkedin.com/in/kade-esterline/"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="mt-6 mb-3 text-5xl font-bold"
                  href="https://github.com/kadeesterline"
                >
                  <VscGithub />
                </a>
                <a
                  className="mt-6 mb-3 text-5xl font-bold"
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
        <div className="mx-4">
          <div>
            <h2 className="text-4xl border-b-2 font-bold pb-4">Skills</h2>
            <ul className="flex flex-wrap">
              <li className="p-2 m-1">- JavaScript</li>
              <li className="p-2 m-1">- HTML/CSS</li>
              <li className="p-2 m-1">- React</li>
              <li className="p-2 m-1">- Ruby</li>
              <li className="p-2 m-1">- Ruby on Rails</li>
              <li className="p-2 m-1">- Git</li>
              <li className="p-2 m-1">- Linux</li>
              <li className="p-2 m-1">- SQL</li>
              <li className="p-2 m-1">- API Development</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl border-b-2 font-bold pb-4">Resume</h2>
            <p className="mb-4 pb-4">
              You can find my full resume{" "}
              <a
                href="https://drive.google.com/file/d/1xdWaXm6tMRbWmHdiuY5irmAyiAdSrS3G/view?usp=sharing"
                className="text-blue-400 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
