import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import { packages } from "../core/Packages/Packages";

const Packages = () => {
  return (
    <>
      <section className="bg-white">
        <Head>
          <title>Our Packages</title>
          <meta
            name="description"
            content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <AnimateInView className="container py-5 d-flex flex-column justify-content-start ">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Awesome Packages with Flexible Pricing
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Packages
          </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {packages.map((pack, index) => (
              <div className="col " key={index}>
                <div
                  className={`border rounded-0 p-4 shadow h-100 d-flex flex-column ${
                    pack.isRecommended && "border-4 border-primary"
                  }`}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="fs-4 spaced-text fw-bold">
                      {pack.packageName}
                    </h5>
                    {pack.isDiscounted && (
                      <span className="bg-secondary px-2 py-1 fw-bolder ">
                        Discounted
                      </span>
                    )}
                  </div>

                  <p className="fw-semibold">{pack.subInfo}</p>
                  <span
                    className={`fw-medium fs-5 text-decoration-line-through ${
                      pack.isDiscounted ? "visible" : "invisible"
                    }`}
                  >
                    Rs.{pack.actualPrice}
                  </span>
                  <div className="d-flex align-items-baseline ">
                    <h1 className="fs-1 fw-bold m-0 me-2">
                      Rs.{pack.price.toLocaleString()}
                    </h1>
                    <span>per month</span>
                  </div>
                  <div className="my-5">
                    {pack.services.map((service, index) => (
                      <p key={index}>
                        {service.count} {service.name}
                      </p>
                    ))}
                  </div>
                  <div className="d-flex mt-auto">
                    <Link
                      href="/packages"
                      className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
                    >
                      Buy Package
                      <CgArrowLongRight className="ms-2 long-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>
      </section>
      <div className={"mt-5 py-5 bg-primary"}>
        <div className="container py-5">
          <h2 className=" fw-bold lh-1 m-0 text-white lh-base text-start hero-sub-text font-size-sm ">
            Customization
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-white lh-base">
            Did not find any packages that fits your requirements?
          </h3>
          <div className="mt-4 d-flex">
            <Link
              href="/packages"
              className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              Custom Package
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
