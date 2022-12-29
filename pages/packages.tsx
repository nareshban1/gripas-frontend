import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../components/AnimateInView/AnimateInView";

const Packages = () => {
  return (
    <>
      <section className="bg-white py-5">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Awesome Packages with Flexible Pricing
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Packages
          </h3>
        </AnimateInView>
      </section>
      <div className={"my-5 py-5 bg-primary"}>
        <div className="container py-5">
          <h2 className=" fw-bold lh-1 m-0 text-white lh-base text-start hero-sub-text font-size-sm ">
            Customization
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-white lh-base">
            Did not find any packages that fits your requirements?
          </h3>
          <div className="mt-4 d-flex">
            <Link
              href="/packages"
              className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              Custom Package
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
