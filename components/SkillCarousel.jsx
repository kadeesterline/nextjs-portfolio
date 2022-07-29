import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";

const SkillCarousel = () => {
  return (
    <Carousel
      className="m-2 p-2 dark:text-black"
      centerMode={true}
      centerSlidePercentage={30}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={2000}
    >
      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <AiOutlineConsoleSql />
        </i>
        <p className="m-2 p-2">SQL</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiGit />
        </i>
        <p className="m-2 p-2">Git</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiJavascript />
        </i>
        <p className="m-2 p-2">JavaScript</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiHtml5 />
        </i>
        <p className="m-2 p-2">HTML</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiCss3 />
        </i>
        <p className="m-2 p-2">CSS</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiReact />
        </i>
        <p className="m-2 p-2">React</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiRuby />
        </i>
        <p className="m-2 p-2">Ruby</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiRubyonrails />
        </i>
        <p className="m-2 p-2">Ruby on rails</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <SiLinux />
        </i>
        <p className="m-2 p-2">Linux</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-3 p-3">
          <TbApi />
        </i>
        <p className="m-2 p-2">REST API's</p>
      </div>
    </Carousel>
  );
};

export default SkillCarousel;
