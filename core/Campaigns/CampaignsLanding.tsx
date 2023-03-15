import dynamic from "next/dynamic";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import * as gtag from "../../lib/gtag";
import { CgArrowLongRight, Link } from "../Imports/imports";
import { CampaignList } from "./campaigns.interface";

const CampaignCard = dynamic(() => import("./CampaignCard"));

const CampaignLanding = ({
  featuredCampaigns,
}: {
  featuredCampaigns: CampaignList[];
}) => {
  return (
    <section className="bg-white">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Engagements
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          Campaigns
        </h3>
        {featuredCampaigns[0]?.blogs?.length ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
            {featuredCampaigns[0]?.blogs.map((item) => (
              <CampaignCard campaignItem={item} key={item.id} />
            ))}
          </div>
        ) : null}
        <div className="mt-4 d-flex">
          <Link
            href="/campaigns"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            onClick={() => {
              gtag.event({
                action: "View All Campaigns Clicked",
                label: "View All Campaigns",
                category: "engagement",
                value: "",
              });
            }}
          >
            View More
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </section>
  );
};

export default CampaignLanding;
