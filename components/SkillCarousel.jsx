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
      className="m-2 p-2"
      centerMode={true}
      centerSlidePercentage={25}
      infiniteLoop={true}
    >
      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <AiOutlineConsoleSql />
        </i>
        <p className="m-2 p-2">SQL</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiGit />
        </i>
        <p className="m-2 p-2">Git</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiJavascript />
        </i>
        <p className="m-2 p-2">JavaScript</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiHtml5 />
        </i>
        <p className="m-2 p-2">HTML</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiCss3 />
        </i>
        <p className="m-2 p-2">CSS</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiReact />
        </i>
        <p className="m-2 p-2">React</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiRuby />
        </i>
        <p className="m-2 p-2">Ruby</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiRubyonrails />
        </i>
        <p className="m-2 p-2">Ruby on rails</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <SiLinux />
        </i>
        <p className="m-2 p-2">Linux</p>
      </div>

      <div className="w-4 grid">
        <i className="text-6xl m-2 p-2">
          <TbApi />
        </i>
        <p className="m-2 p-2">REST API's</p>
      </div>
    </Carousel>
  );
};

export default SkillCarousel;
