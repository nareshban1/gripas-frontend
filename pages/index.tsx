import Head from "next/head";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoCard from "../core/InfoCard/InfoCard";
import Packages from "../core/Packages/Packages";
import WhatWeDo from "../core/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div className="w-100">
      <Head>
        <title>Gripas Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HeroSection />
      <WhatWeDo />
      <InfoCard
        title="We have helped over a 1000+ clients "
        subContent="Launch your company or product to the next level"
      >
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-white px-4 py-2 me-md-2 rounded-pill "
          >
            Get Started
          </button>
        </div>
      </InfoCard>

      <Packages />

      <InfoCard
        title="Did not find packages according to your need?"
        subContent="Checkout our others packages or Create your own package according to your requirements."
      >
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-white px-4 py-2 me-md-2 rounded-pill mx-2 mb-3 mx-md-0 mb-md-0 "
          >
            Start Customizing
          </button>
          <button
            type="button"
            className="btn btn-outline-white px-4 py-2 me-md-2 rounded-pill ms-md-3 "
          >
            More Packages
          </button>
        </div>
      </InfoCard>
      <InfoCard
        title="Are you a Freelancer?"
        subContent="We are always in need of professional freelancers to collaborate with us"
      >
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-white px-4 py-2 me-md-2 rounded-pill "
          >
            Send Resume
          </button>
        </div>
      </InfoCard>
    </div>
  );
}
