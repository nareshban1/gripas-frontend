import dynamic from "next/dynamic";
import apiRequest from "../../components/Axios/api-request";
import Seo from "../../core/Seo/Seo";
const AllCampaigns = dynamic(() => import("../../core/Campaigns/AllCampaigns"));
const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);
const Freelancer = dynamic(() => import("../../core/Freelancer/Freelancer"));

const Campaigns = ({ pageContent }: { pageContent: any }) => {
  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white ">
        <AnimateInView className="container pt-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Our Campaigns
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Campaigns
          </h3>
        </AnimateInView>
        <AllCampaigns />
        <Freelancer />
      </section>
    </>
  );
};

export default Campaigns;

export async function getServerSideProps() {
  const pageDetailsResponse = await apiRequest(`pagecontents/campaigns`);
  const [pageContentData] = await Promise.all([pageDetailsResponse]);
  const pageContent = pageContentData ? pageContentData : {};
  return {
    props: {
      pageContent,
    },
  };
}
