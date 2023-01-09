import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import Button from "../components/Button/Button";
import { OverlayContext } from "../context/OverlayContext";
import PackageCard from "../core/Packages/PackageCard";
import { packages } from "../core/Packages/Packages";

const Packages = () => {
  const { toggleCustomForm } = useContext(OverlayContext);

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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {packages.map((pack, index) => (
              <div className="col " key={index}>
                <PackageCard pack={pack} />
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
          <p className="font-size-rg text-white fw-medium mb-3">
            Contact us to discuss a package that fits your needs.
          </p>
          <div className="mt-4 d-flex">
            <Button
              label="Custom Package"
              className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
              onClick={toggleCustomForm}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
