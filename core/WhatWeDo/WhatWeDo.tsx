import Image from "next/image";
import { useEffect, useState } from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import Markdown from "../../components/Markdown/Markdown";
import * as gtag from "../../lib/gtag";
import { AnimatePresence, CgArrowLongRight, Link, m } from "../Imports/imports";

export interface ServiceItem {
  id: number;
  serviceimage: string;
  name: string;
  slug: string;
  details: string;
  is_active: boolean;
  is_featured: boolean;
}

const WhatWeDo = (props: { featuredServices: ServiceItem[] }) => {
  const { featuredServices } = props;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  useEffect(() => {
    if (featuredServices) setSelectedService(featuredServices[0]);
  }, [featuredServices]);

  return (
    <section className="bg-white py-5">
      <AnimateInView className="container py-5 workSection d-flex flex-column justify-content-center">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text  font-size-sm">
          Services
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          What We Do
        </h3>
        <div className="row d-flex ">
          <div className="col-lg-7 col-12 order-1 order-md-1">
            <ul className="p-0">
              {featuredServices?.map((service) => (
                <li
                  key={service.id}
                  className={`font-size-xl fw-bold  my-5 cursor-pointer  ${
                    selectedService?.id === service.id
                      ? "active text-primary "
                      : "service-list"
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  {service.name}
                  {selectedService?.id === service.id && (
                    <AnimatePresence mode="wait">
                      <m.div
                        key={selectedService?.id}
                        initial={{ opacity: 0, y: 0, x: -10 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 0, x: -10 }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="h-100 w-100 position-relative"
                      >
                        <p className="service-info fw-md-medium text-dark my-2">
                          <Markdown markdown={service.details} />
                        </p>
                      </m.div>
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-5 col-12 order-0 order-lg-2 workSection-image my-lg-0 my-4">
            <AnimatePresence mode="wait">
              <m.div
                key={selectedService?.id}
                initial={{ opacity: 0, y: 0, x: 100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 0, x: -100 }}
                transition={{
                  duration: 0.2,
                }}
                className="h-100 w-100 position-relative"
              >
                {selectedService && (
                  <Image
                    src={selectedService?.serviceimage ?? ""}
                    alt={selectedService?.name ?? ""}
                    fill
                    sizes=""
                    style={{ objectFit: "contain" }}
                  />
                )}
              </m.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-4 d-flex">
          <Link
            href="/services"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            onClick={() => {
              gtag.event({
                action: "More Services Clicked",
                label: "More Services",
                category: "engagement",
                value: "",
              });
            }}
          >
            More Services
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </section>
  );
};

export default WhatWeDo;
