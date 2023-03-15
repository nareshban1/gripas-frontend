import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import apiRequest from "../../components/Axios/api-request";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import { Blog } from "../../core/Blogs/blogs.interface";
import { PaginatedCampaigns } from "../../core/Campaigns/campaigns.interface";
import Seo, { PageContentData } from "../../core/Seo/Seo";

const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);

const CampaignDetail = ({
  campaignResponseData,
}: {
  campaignResponseData: Blog;
}) => {
  const [pageContent, setPageContent] = useState<PageContentData | null>(null);

  useEffect(() => {
    if (campaignResponseData) {
      setPageContent({
        content: campaignResponseData?.content,
        pageDescription: campaignResponseData?.content,
        pageTitle: "Campaign Privacy Policy",
      });
    }
    return () => {
      setPageContent(null);
    };
  }, [campaignResponseData]);

  return (
    <>
      {pageContent && <Seo pageContent={pageContent} />}
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h3 className="fs-1 fw-bold lh-1 my-3 text-dark lh-base text-center">
            {campaignResponseData?.title}
          </h3>
          <div className="my-5 bg-white">
            <div className="col col-lg-10 mx-auto fs-5 fw-md-medium text-dark blogs-content">
              <HtmlParser content={campaignResponseData?.content ?? ""} />
            </div>
          </div>
        </AnimateInView>
      </section>
    </>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { campaignSlug: string };
}) {
  const campaignSlug = params.campaignSlug;
  const campaignResponse = await apiRequest(`get-campaign/${campaignSlug}`);

  const [campaignResponseData] = await Promise.all([campaignResponse]);

  return {
    props: {
      campaignResponseData,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allCampaign = await apiRequest<PaginatedCampaigns>(`all-campaigns/`);

  const [allCampaignResponseData] = await Promise.all([allCampaign]);
  const paths = allCampaignResponseData?.data?.map((campaign) => ({
    params: { campaignSlug: campaign.slug },
  }));
  return { paths, fallback: "blocking" };
}

export default CampaignDetail;
