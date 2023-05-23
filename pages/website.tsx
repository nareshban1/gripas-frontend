import dynamic from "next/dynamic";
import Image from "next/image";
import apiRequest from "../components/Axios/api-request";
import HtmlParser from "../components/HtmlParser/HtmlParser";
import WebsiteForm from "../core/Forms/WebsiteForm";
import { CgArrowLongRight, Link } from "../core/Imports/imports";
import Seo from "../core/Seo/Seo";
import { PageData, poppins } from "../lib/app.interface";
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
  allWebsites,
}: {
  teamMembers: TeamMember[];
  pageContent: PageData;
  allWebsites: any;
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

          <section className="bg-white my-5">
            <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
              Websites we built
            </h2>
            <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
              Our Works
            </h3>
            <div className="row row-cols-md-3 row-cols-2 g-4">
              {allWebsites && allWebsites?.length ? (
                <>
                  {allWebsites.map((item: any) => (
                    <div className="col" key={item.id}>
                      <a
                        className="cursor-pointer box-sizing-border"
                        target="_blank"
                        rel="noreferrer"
                        href={item.link}
                        key={item.id}
                      >
                        <div className="website-grid-item-image">
                          <Image src={item.image} alt={item.name} fill />
                        </div>
                        {/* <div className="website-grid-item-description pt-3">
                          <h5 className="spaced-text fw-medium">{item.name}</h5>
                        </div> */}
                      </a>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </section>

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
  const allWebsitesResponse = await apiRequest(`websites/`);
  const pageContentResponse = await apiRequest(`pagecontents/website`);
  const [allWebsites, pageContentData] = await Promise.all([
    allWebsitesResponse,
    pageContentResponse,
  ]);
  const pageContent = pageContentData ? pageContentData : {};

  return {
    props: {
      pageContent,
      allWebsites,
    },
    revalidate: 60,
  };
}
