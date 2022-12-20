import React from "react";
import AnimateInView from "../components/AnimateInView/AnimateInView";

const AboutUs = () => {
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Want to know more about us?
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          About Us
        </h3>
      </AnimateInView>
    </section>
  );
};

export default AboutUs;
