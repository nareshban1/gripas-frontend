import Link from "next/link";
import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
      <AnimateInView>
        <div className="container py-5 workSection d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text ">
            Our Portfolio
          </h2>
          <div className="row row-cols-2 g-5 my-3">
            {portfolioItems.map((item) => (
              <motion.div
                layoutId={item.id}
                onClick={() => setSelected(item)}
                className="col cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="position-relative product-card">
                  <Image src={item?.image} alt={item.name} fill />
                  <motion.h3
                    layoutId={item.name}
                    className="position-absolute p-4 spaced-text fw-bold display-6 text-white"
                  >
                    {item.name}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {selected && (
              <motion.div
                layoutId={selected.id}
                className="portfolio-view"
                onClick={() => setSelected(null)}
              >
                <div className="position-relative h-100 d-flex flex-column align-items-center justify-content-center container">
                  <div className="product-image overflow-hidden position-relative">
                    <Image
                      src={selected?.image}
                      alt={selected.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="position-relative">
                    <div className="p-4">
                      <motion.h3
                        layoutId={selected.name}
                        className="spaced-text fw-bold display-6 text-white"
                      >
                        {selected.name}
                      </motion.h3>
                      <motion.h4 className="fw-regular  text-white">
                        We specialize on "Social Media Marketing" with three
                        package available, currently. Further, we believe in
                        driving business through creativity.
                      </motion.h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 d-flex">
            <Link
              href="/portfolio"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              View More
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};

export default Portfolio;
