import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { VscGithub } from "react-icons/vsc";
import { FaDev, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center rounded-lg lg:text-left bg-slate-200 dark:bg-slate-600">
        <div className="lg:px-4 lg:mt-12">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey there, I'm Kade
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              If you had asked me a few years ago if I thought I'd be a software
              engineer some day I would have looked at you like you were crazy.
              While I was fixing computers and knew that I absolutely loved
              everything that had to do with them, I didn't see my self as
              someone who could learn the skills it takes to be a software
              engineer. I proved my self wrong within the first week of my
              bootcamp experience. Not only did I enjoy working with code, I
              understood it quickly. Now, I'm excited to continue solving
              problems with software and I look forward to learning new skills.
              My current technical skills include JavaScript, HTML/CSS, React,
              Ruby, Sinatra, Ruby on Rails, PostgreSQL, TailwindCSS,
              BootstrapCSS and Git. In my free time I'm a huge basketball fan
              (Go Blazers!) and spend a lot of time on the weekends at car
              meets, shows and cruises.
            </p>
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
          <div className="flex lg:mg-12 lg:px-4 justify-between  ">
            <a className="p-2 text-xl font-bold">
              <FaLinkedin />
            </a>
            <a className="p-2 text-xl font-bold">
              <VscGithub />
            </a>
            <a className="p-2 text-xl font-bold">
              <FaDev />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
