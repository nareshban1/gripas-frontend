import React from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import Image from "next/image";
import { CgArrowLongRight, Link, motion } from "../Imports/imports";

const portfolioItems = [
  {
    name: "How to create a tiktok ad",
    image: "/all.jpg",
    id: "1",
  },
  {
    name: "How to implement google analytics",
    image: "/facebook.jpg",
    id: "2",
  },
  {
    name: "Social Marketing Tips and Tricks",
    image: "/product.jpg",
    id: "3",
  },
];

const BlogsLanding = () => {
  return (
    <section className="bg-white py-5">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Content
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-primary lh-base">
          Blogs
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
          {portfolioItems.map((item) => (
            <Link href={`/blogs/${item.id}`} key={item.id}>
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
            </Link>
          ))}
        </div>
        <div className="mt-5 d-flex">
          <Link
            href="/blogs"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            View More
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </section>
  );
};

export default BlogsLanding;
