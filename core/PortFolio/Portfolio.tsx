import Link from "next/link";
import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PortfolioParallax from "./PortfolioParallax";

const portfolioItems = [
  {
    name: "Project 1",
    image: "/all.jpg",
    id: "1",
  },
  {
    name: "Project 2",
    image: "/facebook.jpg",
    id: "2",
  },
  {
    name: "Project 3",
    image: "/product.jpg",
    id: "3",
  },
  {
    name: "Project 4",
    image: "/tiktok.jpg",
    id: "4",
  },

];

const Portfolio = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="bg-white py-5">
      <AnimateInView className="container pt-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text ">
          What have we worked on
        </h2>
      </AnimateInView>
      <section className="mb-3 mt-4">
        {/* <PortfolioParallax baseVelocity={-5}>
          {portfolioItems.map((item) => (
            <span key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                height={300}
                width={600}
              ></Image>
            </span>
          ))}
        </PortfolioParallax> */}
        <PortfolioParallax baseVelocity={5}>
          {portfolioItems.map((item) => (
            <span key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                height={300}
                width={600}
              ></Image>
            </span>
          ))}
        </PortfolioParallax>
      </section>
      <AnimateInView className="container pb-5  d-flex flex-column justify-content-start">
        <div className="mt-4 d-flex">
          <Link
            href="/portfolio"
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

export default Portfolio;
