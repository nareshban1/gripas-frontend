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

export interface Policy {
  id: number;
  name: string;
  slug: string;
  policy: string;
}

const CampaignDetail = ({
  policyResponseData,
}: {
  policyResponseData: Policy;
}) => {
  const [pageContent, setPageContent] = useState<PageContentData | null>(null);

  useEffect(() => {
    if (policyResponseData) {
      setPageContent({
        content: policyResponseData?.policy,
        pageDescription: policyResponseData?.policy,
        pageTitle: policyResponseData?.name,
      });
    }
    return () => {
      setPageContent(null);
    };
  }, [policyResponseData]);

  return (
    <>
      {pageContent && <Seo pageContent={pageContent} />}
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <div className="col col-lg-10 mx-auto fs-5 fw-md-medium text-dark blogs-content">
            <h3 className="fs-3 fw-bold lh-1 my-3 text-dark lh-base ">
              {policyResponseData?.name}
            </h3>
          </div>
          <div className="bg-white">
            <div className="col col-lg-10 mx-auto fs-5 fw-md-medium text-dark blogs-content">
              <HtmlParser content={policyResponseData?.policy ?? ""} />
            </div>
          </div>
        </AnimateInView>
      </section>
    </>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { policySlug: string };
}) {
  const policySlug = params.policySlug;
  const policyResponse = await apiRequest(`privacy-policy/${policySlug}`);

  const [policyResponseData] = await Promise.all([policyResponse]);

  if (!policyResponseData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      policyResponseData,
    },
  };
}

export default CampaignDetail;
