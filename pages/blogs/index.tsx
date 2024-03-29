import { m } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import apiRequest from "../../components/Axios/api-request";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import AllBlogs from "../../core/Blogs/AllBlogs";
import { Blog } from "../../core/Blogs/blogs.interface";
import Seo from "../../core/Seo/Seo";
import * as gtag from "../../lib/gtag";
const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);
const Freelancer = dynamic(() => import("../../core/Freelancer/Freelancer"));

export default function Blogs({
  featuredBlogs,
  pageContent,
}: {
  featuredBlogs: Blog[];
  pageContent: any;
}) {
  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white ">
        <AnimateInView className="container pt-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Content
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Blogs
          </h3>
        </AnimateInView>
        <AnimateInView className="container py-2  d-flex flex-column justify-content-start">
          {featuredBlogs?.length ? (
            <>
              <h2 className=" fw-bold lh-1 mt-3 text-dark lh-base text-start  fs-5">
                Featured
              </h2>
              <Link
                href={`/blogs/${featuredBlogs?.[0]?.slug}`}
                onClick={() => {
                  gtag.event({
                    action: `${featuredBlogs?.[0]?.title} Viewed`,
                    label: featuredBlogs?.[0]?.title,
                    category: "engagement",
                    value: "",
                  });
                }}
              >
                <m.div
                  className="col cursor-pointer my-3"
                  key={featuredBlogs[0].id}
                >
                  <div className="position-relative h-100 ">
                    <Image
                      src={featuredBlogs[0]?.image}
                      alt={featuredBlogs[0]?.title}
                      height={350}
                      width={400}
                      style={{ objectFit: "contain", width: "100%" }}
                    />
                    <div className="py-4 bg-white">
                      <p className=" spaced-text fw-bold fs-5 text-dark ">
                        {featuredBlogs[0]?.title}
                      </p>
                      <div className="fs-6 fw-md-medium text-dark my-2">
                        <HtmlParser
                          content={featuredBlogs[0]?.content.substring(0, 200)}
                        />
                      </div>
                    </div>
                  </div>
                </m.div>
              </Link>
            </>
          ) : null}
        </AnimateInView>
        <AllBlogs />
        <Freelancer />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const featuredBlogs = await apiRequest(`featured-blog/`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    const pageDetailsResponse = await apiRequest(`pagecontents/blogs`);
    const pageContent = pageDetailsResponse || {};

    return {
      props: {
        featuredBlogs,
        pageContent,
      },
    };
  } catch (error) {
    console.error(error, "error");
    return {
      props: {
        featuredBlogs: [],
        pageContent: {},
      },
    };
  }
}
