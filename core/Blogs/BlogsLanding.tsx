import dynamic from "next/dynamic";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import * as gtag from "../../lib/gtag";
import { CgArrowLongRight, Link } from "../Imports/imports";
import { BlogList } from "./blogs.interface";

const BlogsCard = dynamic(() => import("./BlogsCard"));

const BlogsLanding = ({ featuredBlogs }: { featuredBlogs: BlogList[] }) => {
  return (
    <section className="bg-white py-5">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Content
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-primary lh-base">
          Blogs
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
          {featuredBlogs[0]?.blogs.map((item) => (
            <BlogsCard blogItem={item} key={item.id} />
          ))}
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
  );
};

export default BlogsLanding;
