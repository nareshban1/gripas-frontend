import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const HeroSection = () => {
  return (
    <div className="my-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 w-100 m-0">
        <div className="col col-sm-8 col-lg-6 pe-0">
          <Image
            src="/hero.svg"
            className="d-block mx-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 ps-0">
          <h1 className="display-3 fw-bold lh-1 mb-3 text-dark lh-base">
            Driving business through{" "}
            <span className="text-primary">creativity</span>
          </h1>
          <p className="lead text-dark fw-medium my-4">
            Our Vision is to empower youngsters and bring latest automation
            technologies.
          </p>
          <div className="text-right">
            <button
              type="button"
              className="btn btn-primary px-4 py-2 me-md-2 rounded-pill"
            >
              Get Started
            </button>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
