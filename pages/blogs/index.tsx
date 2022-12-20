import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { motion } from "framer-motion";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
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

const Blogs = () => {
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Content
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          Blogs
        </h3>

        <h2 className=" fw-bold lh-1 mt-3 text-dark lh-base text-start hero-sub-text font-size-sm">
          Featured
        </h2>
        <motion.div
          className="col cursor-pointer my-3"
          key={portfolioItems[0].id}
        >
          <div className="position-relative border border-primary h-100 ">
            <Image
              src={portfolioItems[0]?.image}
              alt={portfolioItems[0].name}
              height={350}
              width={400}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <div className="p-4 bg-white">
              <p className=" spaced-text fw-bold fs-5 text-dark ">
                {portfolioItems[0].name}
              </p>
              <p className="service-info fw-md-medium text-dark my-2">
                We specialize on &quot;Social Media Marketing&quot; with three
                package available, currently. Further, we believe in driving
                business through creativity.
              </p>
            </div>
          </div>
        </motion.div>
        <h2 className=" fw-bold lh-1 my-3 text-dark lh-base text-start hero-sub-text font-size-sm">
          All Blogs
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          {portfolioItems.map((item) => (
            <motion.div
              className="col cursor-pointer"
              whileHover={{ scale: 1.05 }}
              key={item.id}
            >
              <div className="position-relative border border-primary h-100 ">
                <Image
                  src={item?.image}
                  alt={item.name}
                  height={350}
                  width={400}
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <p className="p-4 spaced-text fw-bold fs-5 text-dark">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <Link
            href="/blogs"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            <CgArrowLongLeft className=" me-2 long-arrow" />
            Previous Page
          </Link>
          <Link
            href="/blogs"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center ms-3"
          >
            Next Page
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </section>
  );
};

export default Blogs;
