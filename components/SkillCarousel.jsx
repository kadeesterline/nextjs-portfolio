import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SkillCarousel = () => {
  return (
    <Carousel className="m-2 p-2" centerMode={true} centerSlidePercentage={33}>
      <div>
        <p>SQL</p>
      </div>
      <div>
        <p>Git</p>
      </div>
      <div>
        <p>HTML</p>
      </div>
      <div>
        <p>CSS</p>
      </div>
      <div>
        <p>React</p>
      </div>
      <div>
        <p>Ruby</p>
      </div>
      <div>
        <p>Linux</p>
      </div>
      <div>
        <p>REST API's</p>
      </div>
    </Carousel>
  );
};

export default SkillCarousel;
