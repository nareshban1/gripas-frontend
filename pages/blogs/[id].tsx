import Image from "next/image";
import React from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { portfolioItems } from ".";
import { CgArrowLongRight, Link, motion } from "../../core/Imports/imports";
import Freelancer from "../../core/Freelancer/Freelancer";

const BlogDetail = () => {
  return (
    <>
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <p className=" fw-regular lh-1 text-dark lh-base text-center fs-5 m-0">
            2022-12-25
          </p>
          <h3 className="fs-1 fw-bold lh-1 my-3 text-dark lh-base text-center">
            {portfolioItems[0]?.name}
          </h3>
          <p className=" fw-medium lh-1 text-dark lh-base text-center fs-5 m-0">
            By Roshan Saud
          </p>

          <div className="my-4">
            <div className="position-relative blogs-image">
              <Image
                src={portfolioItems[0]?.image}
                alt={portfolioItems[0]?.name}
                fill
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div className="my-5 bg-white">
              <div className="col col-lg-8 mx-auto fs-5 fw-md-medium text-dark ">
                <p className=" my-4">
                  We specialize on &quot;Social Media Marketing&quot; with three
                  package available, currently. Further, we believe in driving
                  business through creativity. We specialize on &quot;Social
                  Media Marketing&quot; with three package available, currently.
                  Further, we believe in driving business through creativity. We
                  specialize on &quot;Social Media Marketing&quot; with three
                  package available, currently. Further, we believe in driving
                  business through creativity. We specialize on &quot;Social
                  Media Marketing&quot; with three package available, currently.
                  Further, we believe in driving business through creativity.
                </p>

                <p className=" my-4">
                  We specialize on &quot;Social Media Marketing&quot; with three
                  package available, currently. Further, we believe in driving
                  business through creativity. We specialize on &quot;Social
                  Media Marketing&quot; with three package available, currently.
                  Further, we believe in driving business through creativity. We
                  specialize on &quot;Social Media Marketing&quot; with three
                  package available, currently. Further, we believe in driving
                  business through creativity. We specialize on &quot;Social
                  Media Marketing&quot; with three package available, currently.
                  Further, we believe in driving business through creativity.
                </p>
              </div>
            </div>
          </div>
        </AnimateInView>
      </section>
      <section className="bg-white py-5">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Content
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-primary lh-base">
            More from the blog
          </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
            {[...portfolioItems].splice(0, 3).map((item) => (
              <motion.div
                className="col cursor-pointer"
                whileHover={{ scale: 1.05 }}
                key={item.id}
              >
                <div className="position-relative  h-100 ">
                  <Image
                    src={item?.image}
                    alt={item.name}
                    height={350}
                    width={400}
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                  <p className="py-3 mb-0 spaced-text fw-bold fs-5 text-dark">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 d-flex">
            <Link
              href="/blogs"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              View All
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </AnimateInView>
      </section>
      <Freelancer />
    </>
  );
};

export default BlogDetail;
