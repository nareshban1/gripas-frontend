import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import apiRequest from "../components/Axios/api-request";
import BlogsLanding from "../core/Blogs/BlogsLanding";
import CampaignLanding from "../core/Campaigns/CampaignsLanding";
import Freelancer from "../core/Freelancer/Freelancer";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoSection from "../core/InfoSection/InfoSection";
import Packages from "../core/Packages/Packages";
import Portfolio from "../core/PortFolio/Portfolio";
import Seo from "../core/Seo/Seo";
import Testemonials from "../core/Testemonials/Testemonials";
import WhatWeDo from "../core/WhatWeDo/WhatWeDo";
import { PageData } from "../lib/app.interface";

export const getServerSideProps: GetServerSideProps<{
  featuredServices: any;
  featuredPortfolios: any;
  testemonials: any;
  featuredPackages: any;
  featuredBlogs: any;
  pageContent: any;
  featuredCampaigns: any;
}> = async () => {
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
};

export default function Home({
  featuredServices,
  featuredPortfolios,
  testemonials,
  featuredPackages,
  featuredBlogs,
  pageContent,
  featuredCampaigns,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
