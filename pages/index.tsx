import dynamic from "next/dynamic";
import apiRequest from "../components/Axios/api-request";
import Seo from "../core/Seo/Seo";
import { PageData } from "../lib/app.interface";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoSection from "../core/InfoSection/InfoSection";
const BlogsLanding = dynamic(() => import("../core/Blogs/BlogsLanding"));
const Freelancer = dynamic(() => import("../core/Freelancer/Freelancer"));
const Packages = dynamic(() => import("../core/Packages/Packages"));
const Portfolio = dynamic(() => import("../core/PortFolio/Portfolio"));
const Testemonials = dynamic(() => import("../core/Testemonials/Testemonials"));
const WhatWeDo = dynamic(() => import("../core/WhatWeDo/WhatWeDo"));
const CampaignLanding = dynamic(
  () => import("../core/Campaigns/CampaignsLanding")
);

export default function Home(props: {
  featuredServices: any;
  featuredPortfolios: any;
  testemonials: any;
  featuredPackages: any;
  featuredBlogs: any;
  pageContent: PageData;
  featuredCampaigns: any;
}) {
  const {
    featuredServices,
    featuredPortfolios,
    testemonials,
    featuredPackages,
    featuredBlogs,
    pageContent,
    featuredCampaigns,
  } = props;
  console.log(props, "DATAAA");

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
        <CampaignLanding featuredCampaigns={featuredCampaigns} />
        <Freelancer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const featuredBlogs = await apiRequest("blog-group/?listType=landing-page");
    const featuredServices = await apiRequest("services/?isFeatured=true");
    const featuredPortfolios = await apiRequest("portfolios/?isFeatured=true");
    const featuredPackages = await apiRequest("packages/?isFeatured=true");
    const testemonials = await apiRequest("testemonials/");

    const featuredCampaigns = await apiRequest(
      "campaign-group/?listType=featured"
    );
    const pageContentData = await apiRequest("pagecontents/home");
    const pageContent = pageContentData || {};

    return {
      props: {
        featuredServices,
        featuredPortfolios,
        featuredPackages,
        featuredBlogs,
        testemonials,
        pageContent,
        featuredCampaigns,
      },
    };
  } catch (error) {
    console.error(error, "error");
    return {
      props: {
        featuredServices: [],
        featuredPortfolios: [],
        featuredPackages: [],
        featuredBlogs: [],
        testemonials: [],
        pageContent: {},
        featuredCampaigns: [],
      },
    };
  }
}
