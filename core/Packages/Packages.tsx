import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Packages = () => {
  return (
    <div className="my-5 py-5">
      <div className="container py-5">
        <h2 className=" fw-bold lh-1 m-0 text-white lh-base text-start hero-sub-text ">
          Packages
        </h2>
        <h3 className="display-6 fw-bold lh-1 my-3 text-white lh-base">
          We Have Awesome Packages with Flexible Pricing.
        </h3>
        <div className="mt-4 d-flex">
          <Link
            href="/packages"
            className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            View Packages
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
