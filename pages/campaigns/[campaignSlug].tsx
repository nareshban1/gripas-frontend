import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import apiRequest from "../../components/Axios/api-request";
import Button from "../../components/Button/Button";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import { OverlayContext } from "../../context/OverlayContext";
import {
  CompleteCampaign,
  PaginatedCampaigns,
} from "../../core/Campaigns/campaigns.interface";
import Seo, { PageContentData } from "../../core/Seo/Seo";
import * as gtag from "../../lib/gtag";
const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);
const CampaignDetail = ({
  campaignResponseData,
}: {
  campaignResponseData: CompleteCampaign;
}) => {
  const [pageContent, setPageContent] = useState<PageContentData | null>(null);
  const { setCampaign, toggleCampaignForm } = useContext(OverlayContext);
  useEffect(() => {
    if (campaignResponseData) {
      setPageContent({
        content: campaignResponseData?.shortDescription,
        pageDescription: campaignResponseData?.shortDescription,
        pageTitle: campaignResponseData?.name,
        pageImage: campaignResponseData?.image,
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
            {campaignResponseData?.name}
          </h3>
          <div className="my-4">
            <div className="position-relative blogs-image">
              <Image
                src={campaignResponseData?.image}
                alt={campaignResponseData?.name}
                fill
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="my-5 bg-white">
              <div className="col col-lg-10 mx-auto fs-5 fw-md-medium text-dark blogs-content">
                <HtmlParser content={campaignResponseData?.details ?? ""} />
                <div className="d-flex mt-5">
                  <Link
                    href={`/privacypolicy/${campaignResponseData?.policy?.slug}`}
                    className="btn btn-outline-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
                    onClick={() => {
                      gtag.event({
                        action: "View Policy clicked",
                        label: "View Policy",
                        category: "engagement",
                        value: "",
                      });
                    }}
                  >
                    View Campaign Policy
                    <CgArrowLongRight className="ms-2 long-arrow" />
                  </Link>
                  <Button
                    label={"Get Started"}
                    className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center ms-3"
                    onClick={() => {
                      setCampaign({
                        campaignId: campaignResponseData?.id,
                        campaignName: campaignResponseData?.name,
                      });
                      toggleCampaignForm();
                    }}
                    action={"Campaign Get Started Clicked"}
                    actionlabel={"Campaign Get Started"}
                    actionCategory={"engagement"}
                    value={""}
                  />
                </div>
              </div>
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
  if (!campaignResponseData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      campaignResponseData,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allCampaign = await apiRequest<PaginatedCampaigns>(`all-campaign/`);

  const [allCampaignResponseData] = await Promise.all([allCampaign]);
  const paths = allCampaignResponseData?.data?.map((campaign) => ({
    params: { campaignSlug: campaign.slug },
  }));
  return { paths, fallback: "blocking" };
}

export default CampaignDetail;
