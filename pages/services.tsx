import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import Markdown from "../components/Markdown/Markdown";
import { ServiceItem } from "../core/WhatWeDo/WhatWeDo";
const LinkToPackage = dynamic(() => import("../core/Packages/LinkToPackage"));

const Services = ({ allServices }: { allServices: ServiceItem[] }) => {
  return (
    <section className="bg-white ">
      <Head>
        <title>Our Services</title>
        <meta
          name="description"
          content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
                <Markdown markdown={service.details ?? ""} />
              </p>
            </div>
            <div
              className={`col-md-6 order-0  ${
                index % 2 === 0 ? "order-md-2 " : "order-md-1"
              }`}
            >
              <div className="position-relative service-image">
                <Image
                  src={service?.serviceimage}
                  alt={service.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        ))}
      </AnimateInView>
      <LinkToPackage />
    </section>
  );
};

export default Services;

export async function getServerSideProps() {
  const allServicesResponse = await axios.get(
    `${process.env.API_ENDPOINT}services/`
  );

  const [allServices] = await Promise.all([allServicesResponse?.data]);

  return {
    props: {
      allServices,
    },
  };
}
