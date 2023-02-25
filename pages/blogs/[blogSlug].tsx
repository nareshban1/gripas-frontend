import dynamic from "next/dynamic";
import Image from "next/image";
import apiRequest from "../../components/Axios/api-request";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import {
  Blog,
  BlogList,
  PaginatedBlogs,
} from "../../core/Blogs/blogs.interface";
import { CgArrowLongRight, Link } from "../../core/Imports/imports";
import * as gtag from "../../lib/gtag";

const LinkToPackage = dynamic(
  () => import("../../core/Packages/LinkToPackage")
);
const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);
const RecommendedList = dynamic(
  () => import("../../core/Blogs/RecommendedList")
);

const BlogDetail = ({
  blogResponseData,
  recommendedResposeData,
}: {
  blogResponseData: Blog;
  recommendedResposeData: BlogList[];
}) => {
  return (
    <>
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <p className=" fw-regular lh-1 text-dark lh-base text-center fs-5 m-0">
            {new Date(blogResponseData?.createdAt)?.toLocaleDateString()}
          </p>
          <h3 className="fs-1 fw-bold lh-1 my-3 text-dark lh-base text-center">
            {blogResponseData?.title}
          </h3>
          {blogResponseData?.author && (
            <p className=" fw-medium lh-1 text-dark lh-base text-center fs-5 m-0">
              By {blogResponseData?.author}
            </p>
          )}

          <div className="my-4">
            <div className="position-relative blogs-image">
              <Image
                src={blogResponseData?.image}
                alt={blogResponseData?.title}
                fill
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div className="my-5 bg-white">
              <div className="col col-lg-10 mx-auto fs-5 fw-md-medium text-dark blogs-content">
                <HtmlParser content={blogResponseData?.content ?? ""} />
              </div>
            </div>
          </div>
        </AnimateInView>
      </section>
      <section className="bg-white py-5">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Content
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-primary lh-base">
            More from the blog
          </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
            <RecommendedList recommendedResposeData={recommendedResposeData} />
          </div>
          <div className="mt-5 d-flex">
            <Link
              href="/blogs"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
              onClick={() => {
                gtag.event({
                  action: "View All Blogs Clicked",
                  label: "View All Blogs",
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
      <LinkToPackage />
    </>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { blogSlug: string };
}) {
  const blogSlug = params.blogSlug;
  const blogResponse = await apiRequest(`get-blog/${blogSlug}`);
  const recommendedResponse = await apiRequest(
    `blog-group/?listType=recommended`
  );
  const [blogResponseData, recommendedResposeData] = await Promise.all([
    blogResponse,
    recommendedResponse,
  ]);

  return {
    props: {
      blogResponseData,
      recommendedResposeData,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allBlogs = await await apiRequest<PaginatedBlogs>(`all-blogs`);

  const [allBlogsResponseData] = await Promise.all([allBlogs]);
  const paths = allBlogsResponseData?.data?.map((blog: any) => ({
    params: { blogSlug: blog.slug },
  }));
  return { paths, fallback: true };
}

export default BlogDetail;
