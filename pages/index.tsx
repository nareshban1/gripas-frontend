import dynamic from "next/dynamic";
import apiRequest from "../components/Axios/api-request";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoSection from "../core/InfoSection/InfoSection";
import Seo from "../core/Seo/Seo";
import { PageData } from "../lib/app.interface";

const BlogsLanding = dynamic(() => import("../core/Blogs/BlogsLanding"));
const Freelancer = dynamic(() => import("../core/Freelancer/Freelancer"));
const Packages = dynamic(() => import("../core/Packages/Packages"));
const Portfolio = dynamic(() => import("../core/PortFolio/Portfolio"));
const Testemonials = dynamic(() => import("../core/Testemonials/Testemonials"));
const WhatWeDo = dynamic(() => import("../core/WhatWeDo/WhatWeDo"));

export default function Home(props: {
  featuredServices: any;
  featuredPortfolios: any;
  testemonials: any;
  featuredPackages: any;
  featuredBlogs: any;
  pageContent: PageData;
}) {
  const {
    featuredServices,
    featuredPortfolios,
    testemonials,
    featuredPackages,
    featuredBlogs,
    pageContent,
  } = props;

  return (
    <>
      <Seo pageContent={pageContent} />
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
    `services/?isFeatured=true`
  );
  const featuredPortfolioResponse = await apiRequest(
    `portfolios/?isFeatured=true`
  );
  const featuredPackagesResponse = await apiRequest(
    `packages/?isFeatured=true`
  );
  const testemonialsResponse = await apiRequest(`testemonials/`);
  const featuredBlogsResponse = await apiRequest(
    `blog-group/?listType=landing`
  );
  const pageDetailsResponse = await apiRequest(`pagecontents/home`);
  const [
    featuredServices,
    featuredPortfolios,
    featuredBlogs,
    testemonials,
    featuredPackages,
    pageContentData,
  ] = await Promise.all([
    featuredServicesResponse,
    featuredPortfolioResponse,
    featuredBlogsResponse,
    testemonialsResponse,
    featuredPackagesResponse,
    pageDetailsResponse,
  ]);
  console.log(featuredServices);
  const pageContent = pageContentData ? pageContentData : {};

  return {
    props: {
      featuredServices,
      featuredPortfolios,
      featuredPackages,
      featuredBlogs,
      testemonials,
      pageContent,
    },
  };
}
