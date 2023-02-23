import dynamic from "next/dynamic";
import Head from "next/head";
import process from "process";
import apiRequest from "../components/Axios/api-request";

const BlogsLanding = dynamic(() => import("../core/Blogs/BlogsLanding"));
const Freelancer = dynamic(() => import("../core/Freelancer/Freelancer"));
const HeroSection = dynamic(() => import("../core/HeroSection/HeroSection"));
const InfoSection = dynamic(() => import("../core/InfoSection/InfoSection"));
const Packages = dynamic(() => import("../core/Packages/Packages"));
const Portfolio = dynamic(() => import("../core/PortFolio/Portfolio"));
const Testemonials = dynamic(() => import("../core/Testemonials/Testemonials"));
const WhatWeDo = dynamic(() => import("../core/WhatWeDo/WhatWeDo"));

export default function Home(props: any) {
  const {
    featuredServices,
    featuredPortfolios,
    testemonials,
    featuredPackages,
    featuredBlogs,
  } = props;
  return (
    <>
      <Head>
        <title>Gripas Marketing</title>
        <meta
          name="description"
          content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="w-100 bg-primary overflow-hidden">
        <HeroSection />
        <InfoSection />
        <WhatWeDo featuredServices={featuredServices} />
        <Portfolio featuredPortfolios={featuredPortfolios} />
        <Packages featuredPackages={featuredPackages} />
        <Testemonials testemonials={testemonials} />
        <BlogsLanding featuredBlogs={featuredBlogs} />
        <Freelancer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const featuredServicesResponse = await apiRequest(
    `${process.env.API_ENDPOINT}services/?is_featured=true`
  );
  const featuredPortfolioResponse = await apiRequest(
    `${process.env.API_ENDPOINT}portfolios/?is_featured=true`
  );
  const featuredPackagesResponse = await apiRequest(
    `${process.env.API_ENDPOINT}packages/?is_featured=true`
  );
  const testemonialsResponse = await apiRequest(
    `${process.env.API_ENDPOINT}testemonials/`
  );
  const featuredBlogsResponse = await apiRequest(
    `${process.env.API_ENDPOINT}blogslist/?listType=landing`
  );

  const [
    featuredServices,
    featuredPortfolios,
    featuredBlogs,
    testemonials,
    featuredPackages,
  ] = await Promise.all([
    featuredServicesResponse,
    featuredPortfolioResponse,
    featuredBlogsResponse,
    testemonialsResponse,
    featuredPackagesResponse,
  ]);

  return {
    props: {
      featuredServices,
      featuredPortfolios,
      featuredPackages,
      featuredBlogs,
      testemonials,
    },
  };
}
