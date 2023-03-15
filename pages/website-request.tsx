import dynamic from "next/dynamic";
import Image from "next/image";
import apiRequest from "../components/Axios/api-request";
import HtmlParser from "../components/HtmlParser/HtmlParser";
import WebsiteForm from "../core/Forms/WebsiteForm";
import { CgArrowLongRight, Link } from "../core/Imports/imports";
import Seo from "../core/Seo/Seo";
import { PageData } from "../lib/app.interface";
const AnimateInView = dynamic(
  () => import("../components/AnimateInView/AnimateInView")
);
const Freelancer = dynamic(() => import("../core/Freelancer/Freelancer"));
export interface TeamMember {
  id: number;
  name: string;
  info: string;
  image: string;
}

const WebsiteRequest = ({
  teamMembers,
  pageContent,
}: {
  teamMembers: TeamMember[];
  pageContent: PageData;
}) => {
  return (
    <>
      {pageContent && <Seo pageContent={pageContent} />}
      <section className="bg-white ">
        <AnimateInView className="container py-5 d-flex flex-column justify-content-start ">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Want us to design or upgrade your website?
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Website Development
          </h3>

          {pageContent?.content && (
            <>
              <div className="position-relative blogs-image">
                <Image
                  src={pageContent?.pageImage}
                  alt={pageContent?.pageTitle}
                  fill
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-12 col-md-8 fs-5">
                <HtmlParser content={pageContent?.content} />
              </div>
            </>
          )}

          <div className="my-4 d-flex">
            <Link
              href="/services"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              Our Other Services
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
          <section className="">
            <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
              Request A Website
            </h3>
            <WebsiteForm />
          </section>
        </AnimateInView>
      </section>
      <Freelancer />
    </>
  );
};

export default WebsiteRequest;

export async function getStaticProps() {
  const pageContentResponse = await apiRequest(`pagecontents/website`);
  const [pageContentData] = await Promise.all([pageContentResponse]);
  const pageContent = pageContentData ? pageContentData : {};

  return {
    props: {
      pageContent,
    },
    revalidate: 60,
  };
}
