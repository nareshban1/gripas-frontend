import dynamic from "next/dynamic";
import apiRequest from "../../components/Axios/api-request";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import Seo from "../../core/Seo/Seo";
const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);

const Policy = ({ pageContent }: { pageContent: any }) => {
  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Our Policy
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Gripas Marketing Privacy Policy
          </h3>
          {pageContent?.content && (
            <div className="col-12 fs-5">
              <HtmlParser content={pageContent?.content} />
            </div>
          )}
        </AnimateInView>
      </section>
    </>
  );
};

export default Policy;

export async function getServerSideProps() {
  const pageDetailsResponse = await apiRequest(`pagecontents/privacy-policy`);
  const [pageContentData] = await Promise.all([pageDetailsResponse]);
  const pageContent = pageContentData ? pageContentData : {};
  return {
    props: {
      pageContent,
    },
  };
}
