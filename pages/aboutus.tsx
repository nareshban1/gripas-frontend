import dynamic from "next/dynamic";
import Image from "next/image";
import apiRequest from "../components/Axios/api-request";
import HtmlParser from "../components/HtmlParser/HtmlParser";
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

const AboutUs = ({
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
            Want to know more about us?
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            About Us
          </h3>
          {pageContent?.content && (
            <div className="col-12 col-md-8 fs-5">
              <HtmlParser content={pageContent?.content} />
            </div>
          )}

          <div className="my-4 d-flex">
            <Link
              href="/services"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              Our Services
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
          <section className="py-5">
            <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
              The Team
            </h3>
            {teamMembers && teamMembers?.length ? (
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                {teamMembers?.map((item) => (
                  <div className="col cursor-pointer" key={item.id}>
                    <div className="position-relative  h-100 ">
                      <Image
                        src={item?.image}
                        alt={item.name}
                        height={250}
                        width={400}
                        style={{ objectFit: "cover", width: "100%" }}
                      />
                      <p className="py-3 spaced-text fw-bold fs-5 text-dark m-0">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        </AnimateInView>
      </section>
      <Freelancer />
    </>
  );
};

export default AboutUs;

export async function getStaticProps() {
  const teamMembersResponse = await apiRequest(`teams/`);
  const pageContentResponse = await apiRequest(`pagecontents/about`);
  const [teamMembers, pageContentData] = await Promise.all([
    teamMembersResponse,
    pageContentResponse,
  ]);
  const pageContent = pageContentData ? pageContentData : {};

  return {
    props: {
      teamMembers,
      pageContent,
    },
    revalidate: 60,
  };
}
