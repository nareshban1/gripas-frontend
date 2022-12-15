import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Particle from "./Particle";
const HeroSection = () => {
  return (
    <div className="bg-primary position-relative hero-section">
      <Particle />
      <AnimateInView className="container mx-auto bg-transparent position-relative h-100 align-items-center">
        <div className="row flex-lg-row align-items-center w-100 m-0 h-100 flex-grow-1 ">
          <div className="col-12 col-lg-8 col-xl-7 ps-0 z-index">
            <h1 className="display-lg-3 fw-bold lh-1 mb-3 text-white lh-base ">
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
        </div>
      </AnimateInView>
    </div>
  );
};

export default HeroSection;
