import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-white">
      <div className="container py-5 workSection d-flex flex-column justify-content-center">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text ">
          What We
          <span className="text-dark"> Do</span>
        </h2>

        <div className="row ">
          <div className="col-md-7 col-12">
            <ul className="p-0">
              <li className="text-primary  display-5 fw-bold my-4 cursor-pointer service-list active">
                Social Media Marketing
              </li>
              <li className="text-dark display-5 fw-bold my-4 cursor-pointer service-list">
                Influencer Marketing
              </li>
              <li className="text-dark display-5 fw-bold my-4 cursor-pointer service-list">
                Advertisement
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-12"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
