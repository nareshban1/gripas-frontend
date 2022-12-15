import Head from "next/head";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoCard from "../core/InfoCard/InfoCard";
import InfoSection from "../core/InfoSection/InfoSection";
import Packages from "../core/Packages/Packages";
import Portfolio from "../core/PortFolio/Portfolio";
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
    </div>
  );
}
