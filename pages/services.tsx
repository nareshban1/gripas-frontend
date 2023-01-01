import dynamic from "next/dynamic";
import Image from "next/image";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import { services } from "../core/WhatWeDo/WhatWeDo";
const LinkToPackage = dynamic(() => import("../core/Packages/LinkToPackage"));
const Services = () => {
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          How we help?
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          Our Services
        </h3>
        {services.map((service, index) => (
          <div key={service.id} className={`row my-5 align-items-center`}>
            <div
              className={`col-md-6 order-1  ${
                index % 2 === 0 ? "order-md-1 " : "order-md-2"
              }`}
            >
              <h1 className={`font-size-xl fw-bold my-3 text-primary `}>
                {" "}
                {service.name}
              </h1>
              <p className="service-info fw-md-medium text-dark my-2">
                We specialize on &quot;Social Media Marketing&quot; with three
                package available, currently. Further, we believe in driving
                business through creativity.{" "}
              </p>
            </div>
            <div
              className={`col-md-6 order-0  ${
                index % 2 === 0 ? "order-md-2 " : "order-md-1"
              }`}
            >
              <div className="position-relative service-image">
                <Image
                  src={service?.image}
                  alt={service.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        ))}
      </AnimateInView>
      <LinkToPackage className="py-5 bg-primary" />
    </section>
  );
};

export default Services;
