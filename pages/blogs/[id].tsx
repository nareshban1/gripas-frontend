import Image from "next/image";
import React from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { motion } from "framer-motion";
import { portfolioItems } from "../../core/PortFolio/Portfolio";

const BlogDetail = () => {
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Content
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          Blogs
        </h3>

        <h2 className=" fw-bold lh-1 mt-3 text-dark lh-base text-start  fs-5">
          Featured
        </h2>
        <motion.div
          className="col cursor-pointer my-3"
          key={portfolioItems[0].id}
        >
          <div className="position-relative  h-100 ">
            <Image
              src={portfolioItems[0]?.image}
              alt={portfolioItems[0].name}
              height={350}
              width={400}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <div className="py-4 bg-white">
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
      </AnimateInView>
    </section>
  );
};

export default BlogDetail;
