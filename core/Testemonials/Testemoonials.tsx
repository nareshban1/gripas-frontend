import React from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import TestimonialsSlider from "./TestimonialsSlider";

const Testemoonials = () => {
  return (
    <section className="bg-white py-5">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Testemonials
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          What people say
        </h3>
        <div className="position-relative d-flex flex-column overflow-hidden">
          <TestimonialsSlider />
        </div>
      </AnimateInView>
    </section>
  );
};

export default Testemoonials;
