import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import Markdown from "../../components/Markdown/Markdown";
import { CgArrowLongRight, Link, motion } from "../../core/Imports/imports";
import LinkToPackage from "../../core/Packages/LinkToPackage";

export interface BlogList {
  id: number;
  listType: string;
  upload_time: string;
  blogs: BlogItem[];
}

export interface BlogItem {
  id: number;
  category: Category[];
  title: string;
  slug: string;
  content: string;
  created_at: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
}

const BlogDetail = ({
  blogResponseData,
  recommendedResposeData,
}: {
  blogResponseData: BlogItem;
  recommendedResposeData: BlogList[];
}) => {
  const blogData = useCallback(() => {
    const recommendedList = recommendedResposeData?.find(
      (item) => item.listType === "recommended"
    );
    return (
      <>
        {recommendedList?.blogs ? (
          <>
            {recommendedList?.blogs.map((blog) => (
              <Link href={`/blogs/${blog.slug}`} key={blog?.slug}>
                <motion.div
                  className="col cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  key={blog.id}
                >
                  <div className="position-relative  h-100 ">
                    <Image
                      src={blog?.image}
                      alt={blog?.title}
                      height={350}
                      width={400}
                      style={{ objectFit: "cover", width: "100%" }}
                    />
                    <p className="py-3 mb-0 spaced-text fw-bold fs-5 text-dark">
                      {blog?.title}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </>
        ) : null}
      </>
    );
  }, [recommendedResposeData]);

  return (
    <>
      <section className="bg-white ">
        <Head>
          <title>Blog View</title>
          <meta
            name="description"
            content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <p className=" fw-regular lh-1 text-dark lh-base text-center fs-5 m-0">
            2022-12-25
          </p>
          <h3 className="fs-1 fw-bold lh-1 my-3 text-dark lh-base text-center">
            {blogResponseData?.title}
          </h3>
          <p className=" fw-medium lh-1 text-dark lh-base text-center fs-5 m-0">
            By Roshan Saud
          </p>

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
              <div className="col col-lg-8 mx-auto fs-5 fw-md-medium text-dark ">
                <Markdown markdown={blogResponseData?.content} />
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
            {blogData()}
          </div>
          <div className="mt-5 d-flex">
            <Link
              href="/blogs"
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            >
              View All
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          </div>
        </AnimateInView>
      </section>
      <LinkToPackage />
    </>
  );
};

export default BlogDetail;

export async function getServerSideProps(context: { query: { slug: any } }) {
  const { slug } = context.query;
  const blogResponse = await axios.get(
    `${process.env.API_ENDPOINT}blogs/${slug}`
  );
  const recommendedResponse = await axios.get(
    `${process.env.API_ENDPOINT}blogslist/?listType=recommended`
  );

  const [blogResponseData, recommendedResposeData] = await Promise.all([
    blogResponse?.data,
    recommendedResponse?.data,
  ]);

  return {
    props: {
      blogResponseData,
      recommendedResposeData,
    },
  };
}
