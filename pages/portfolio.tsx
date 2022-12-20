import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import { portfolioItems } from "../core/PortFolio/Portfolio";

const Portfolio = () => {
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          What have we worked on
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          Our Portfolio
        </h3>
        <div className="container-fluid p-0">
        <div className="row position-relative w-100 g-5 m-0">
          {[...portfolioItems].map((item) => (
            <div className="col-6 item-grid" key={item.id}>
              <div className="item-grid-item">
                <div className="item-grid-item-image">
                  <Image src={item.image} alt={item.name} fill />
                </div>
                <div className="item-grid-item-description mt-3">
                  <h4 className="spaced-text fw-bold">{item.name}</h4>
                  <p className="service-info fw-md-medium text-dark my-2">
                    We specialize on &quot;Social Media Marketing&quot; with
                    three package available, currently. Further, we believe in
                    driving business through creativity.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
       
      </AnimateInView>
    </section>
  );
};

export default Portfolio;
