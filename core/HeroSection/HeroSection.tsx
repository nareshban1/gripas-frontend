import Image from "next/image";
import React, { useCallback } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgArrowLongRight, CgArrowLongRightC } from "react-icons/cg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Particle from "./Particle";
const HeroSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="bg-none py-5 position-relative">
      <div className="container mx-auto py-5 my-5">
        <div className="row flex-lg-row align-items-center g-5 py-5 w-100 m-0 py-5 my-4 ">
          <div className="col-lg-6 ps-0 position-relative z-index">
            <h1 className="display-3 fw-bold lh-1 mb-3 text-white lh-base ">
              Driving business through{" "}
              <span className="text-white text-decoration-underline">
                creativity
              </span>
            </h1>
            <p className="lead text-white fw-medium mb-5 hero-sub-text">
              Our Vision is to empower youngsters and bring latest automation
              technologies.
            </p>
            <div className="text-right d-flex">
              <button className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center">
                Get Started <CgArrowLongRight className="ms-2 long-arrow" />
              </button>
              <VideoPlayer />
            </div>
          </div>

          {/* <Particle /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
