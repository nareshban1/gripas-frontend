import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="my-5 pt-5">
      <h2 className=" fw-bold lh-1 mb-3 text-dark lh-base text-center">
        What We
        <span className="text-primary"> Do</span>
      </h2>
      <div className="row mt-5">
        <div className="col-12 col-md-4 ">
          <div className="text-center w-100 p-4">
            <Image
              src="/serviceIcon.svg"
              alt="service Name"
              width={106}
              height={106}
            />
            <h4 className="fw-bold text-primary my-3">Grapics Designing</h4>
            <p className="text-dark">
              We specialize on "Social Media Marketing" with three package
              available, currently. Further, we believe in driving business
              through creativity.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="text-center w-100 p-4">
            <Image
              src="/serviceIcon.svg"
              alt="service Name"
              width={106}
              height={106}
            />
            <h4 className="fw-bold text-primary my-3">Grapics Designing</h4>
            <p className="text-dark">
              We specialize on "Social Media Marketing" with three package
              available, currently. Further, we believe in driving business
              through creativity.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="text-center w-100 p-4">
            <Image
              src="/serviceIcon.svg"
              alt="service Name"
              width={106}
              height={106}
            />
            <h4 className="fw-bold text-primary my-3">Grapics Designing</h4>
            <p className="text-dark">
              We specialize on "Social Media Marketing" with three package
              available, currently. Further, we believe in driving business
              through creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          type="button"
          className="btn btn-primary px-4 py-2 me-md-2 rounded-pill"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
