import dynamic from "next/dynamic";
import Image from "next/image";
import apiRequest from "../components/Axios/api-request";
import HtmlParser from "../components/HtmlParser/HtmlParser";
import Seo from "../core/Seo/Seo";

import { ServiceItem } from "../core/WhatWeDo/WhatWeDo";
import { PageData } from "../lib/app.interface";
const LinkToPackage = dynamic(() => import("../core/Packages/LinkToPackage"));
const AnimateInView = dynamic(
  () => import("../components/AnimateInView/AnimateInView")
);

const Services = ({
  allServices,
  pageContent,
}: {
  allServices: ServiceItem[];
  pageContent: PageData;
}) => {
  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            How we help?
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Our Services
          </h3>
          {allServices?.map((service, index) => (
            <div key={service.id} className={`row my-5 align-items-center`}>
              <div
                className={`col-md-6 order-1  ${
                  index % 2 === 0 ? "order-md-1 " : "order-md-2"
                }`}
              >
                <h1 className={`font-size-xl fw-bold my-3 text-primary `}>
                  {service.name}
                </h1>
                <p className="service-info fw-md-medium text-dark my-2">
                  <HtmlParser content={service.details} />
                </p>
              </div>
              <div
                className={`col-md-6 order-0  ${
                  index % 2 === 0 ? "order-md-2 " : "order-md-1"
                }`}
              >
                <div className="service-image">
                  <Image src={service?.image} alt={service.name} fill />
                </div>
              </div>
            </div>
          ))}
        </AnimateInView>
      </section>
      <LinkToPackage />
    </>
  );
};

export default Services;

export async function getStaticProps() {
  const allServicesResponse = await apiRequest(`services/`);
  const pageDetailsResponse = await apiRequest(`pagecontents/services`);

  const [allServices, pageContentData] = await Promise.all([
    allServicesResponse,
    pageDetailsResponse,
  ]);
  const pageContent = pageContentData ? pageContentData : {};

  return {
    props: {
      allServices,
      pageContent,
    },
    revalidate: 60,
  };
}
