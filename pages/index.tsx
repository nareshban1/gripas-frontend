import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import apiRequest from "../components/Axios/api-request";
import HeroSection from "../core/HeroSection/HeroSection";
import InfoSection from "../core/InfoSection/InfoSection";
import Seo from "../core/Seo/Seo";

import dynamic from 'next/dynamic';

const BlogsLanding = dynamic(() => import('../core/Blogs/BlogsLanding'), {
  loading: () => <p>Loading...</p>,
})
const CampaignLanding = dynamic(() => import('../core/Campaigns/CampaignsLanding'), {
  loading: () => <p>Loading...</p>,
})
const Freelancer = dynamic(() => import('../core/Freelancer/Freelancer'), {
  loading: () => <p>Loading...</p>,
})
const Testemonials = dynamic(() => import('../core/Testemonials/Testemonials'), {
  loading: () => <p>Loading...</p>,
})
const WhatWeDo = dynamic(() => import('../core/WhatWeDo/WhatWeDo'), {
  loading: () => <p>Loading...</p>,
})
const Packages = dynamic(() => import('../core/Packages/Packages'), {
  loading: () => <p>Loading...</p>,
})
const Portfolio = dynamic(() => import('../core/PortFolio/PortfolioSlider'), {
  loading: () => <p>Loading...</p>,
})



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
