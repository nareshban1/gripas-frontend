import Head from "next/head";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import BlogsLanding from "../core/Blogs/BlogsLanding";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoSection from "../core/InfoSection/InfoSection";
import Packages from "../core/Packages/Packages";
import Portfolio from "../core/PortFolio/Portfolio";
import Testemoonials from "../core/Testemonials/Testemoonials";
import WhatWeDo from "../core/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div className="w-100 bg-primary">
      <Head>
        <title>Gripas Marketing</title>
        <meta
          name="description"
          content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HeroSection />
      <InfoSection />
      <WhatWeDo />
      <Portfolio />
      <Packages />
      <Testemoonials />
      <BlogsLanding />
      <div className="py-5">
        <div className="container py-5">
          <h2 className=" fw-bold lh-1 m-0 text-white lh-base text-start hero-sub-text ">
            Opportunity
          </h2>
          <h3 className="display-6 fw-bold lh-1 my-3 text-white lh-base">
            Are you a Freelancer?
          </h3>
          <p className="lead text-white fw-medium mb-5 hero-sub-text">
            Our Vision is to empower youngsters and bring latest automation
            technologies.
          </p>
          <div className="mt-4 d-flex">
            <Link
              href="/freelancer"
              className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              Contact Us
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
