import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";
const services = [
  {
    name: "Social Media Marketing",
    image: "/hero.svg",
    id: 1,
  },
  {
    name: "Video Advertisements",
    image: "/video.svg",
    id: 2,
  },
  {
    name: "Tiktok Marketing",
    image: "/Tiktok.svg",
    id: 3,
  },
  {
    name: "Short Comercial Advertisements",
    image: "/commercial.svg",
    id: 4,
  },
];

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState(services?.[0]);
  console.log(selectedService);
  return (
    <section className="bg-white py-5">
      <AnimateInView>
        <div className="container py-5 workSection d-flex flex-column justify-content-center">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text ">
            What We
            <span className="text-dark"> Do</span>
          </h2>

          <div className="row d-flex ">
            <div className="col-lg-7 col-12 order-1 order-md-1">
              <ul className="p-0">
                {services.map((service) => (
                  <li
                    key={service.id}
                    className={`display-lg-5 display-6 fw-bold  my-4 cursor-pointer  ${
                      selectedService.id === service.id
                        ? "active text-primary "
                        : "service-list"
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    {service.name}
                    {selectedService.id === service.id && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedService?.id}
                          initial={{ opacity: 0, y: 0 ,x:-10}}
                          animate={{ opacity: 1, y: 0 , x:0 }}
                          exit={{ opacity: 0, y: 0, x:-10 }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="h-100 w-100 position-relative"
                        >
                          <p className="service-info fw-md-medium text-dark mt-2">
                            We specialize on &quot;Social Media Marketing&quot; with three
                            package available, currently. Further, we believe in
                            driving business through creativity.{" "}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5 col-12 order-0 order-lg-2 workSection-image my-lg-0 my-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService?.id}
                  initial={{ opacity: 0, y: 0 ,x:100}}
                  animate={{ opacity: 1, y: 0 , x:0 }}
                  exit={{ opacity: 0, y: 0, x:-100 }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="h-100 w-100 position-relative"
                >
                  <Image
                    src={selectedService?.image}
                    alt={selectedService.name}
                    fill
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-4 d-flex">
            <Link
              href="/services"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              More Services
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};

export default WhatWeDo;
