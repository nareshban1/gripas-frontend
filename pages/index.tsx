import dynamic from "next/dynamic";
import Head from "next/head";

const BlogsLanding = dynamic(() => import("../core/Blogs/BlogsLanding"));
const Freelancer = dynamic(() => import("../core/Freelancer/Freelancer"));
const HeroSection = dynamic(() => import("../core/HeroSection/HeroSection"));
const InfoSection = dynamic(() => import("../core/InfoSection/InfoSection"));
const Packages = dynamic(() => import("../core/Packages/Packages"));
const Portfolio = dynamic(() => import("../core/PortFolio/Portfolio"));
const Testemoonials = dynamic(
  () => import("../core/Testemonials/Testemoonials")
);
const WhatWeDo = dynamic(() => import("../core/WhatWeDo/WhatWeDo"));

export default function Home() {
  return (
    <div className="w-100 bg-primary overflow-hidden">
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
      <Freelancer />
    </div>
  );
}
