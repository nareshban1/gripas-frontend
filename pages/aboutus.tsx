import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import Freelancer from "../core/Freelancer/Freelancer";

const portfolioItems = [
  {
    name: "Naresh Ban",
    image: "/defaultuser.jpg",
    id: "1",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "2",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "3",
  },
  {
    name: "Naresh Ban",
    image: "/defaultuser.jpg",
    id: "4",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "5",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "6",
  },
];

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
        <p className="col-12 col-md-8">
          We’re a team of talented creatives who live and breathe great design.
          We’re not just coders who take instructions, we’re artists who take
          inspiration from the wider creative world of music, film and the arts.
          By soaking up culture, sharing new ideas and staying on the pulse of
          the latest trends, we develop brands, design websites and deliver
          campaigns that break the mould, and fight back against boring.
        </p>
        <p className="col-12 col-md-8">
          We’re a team of talented creatives who live and breathe great design.
          We’re not just coders who take instructions, we’re artists who take
          inspiration from the wider creative world of music, film and the arts.
          By soaking up culture, sharing new ideas and staying on the pulse of
          the latest trends, we develop brands, design websites and deliver
          campaigns that break the mould, and fight back against boring.
        </p>
        <div className="my-4 d-flex">
          <Link
            href="/portfolio"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            Our Services
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          The Team
        </h3>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {portfolioItems.map((item) => (
            <div className="col cursor-pointer" key={item.id}>
              <div className="position-relative border border-primary h-100 ">
                <Image
                  src={item?.image}
                  alt={item.name}
                  height={200}
                  width={400}
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <p className="p-4 spaced-text fw-bold fs-5 text-dark m-0">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimateInView>
      <Freelancer />
    </section>
  );
};

export default AboutUs;
