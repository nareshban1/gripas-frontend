import { m } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import apiRequest from "../../components/Axios/api-request";
import { Blog } from "../../core/Blogs/blogs.interface";

const AllBlogs = dynamic(() => import("../../core/Blogs/AllBlogs"));
const AnimateInView = dynamic(
  () => import("../../components/AnimateInView/AnimateInView")
);

const Blogs = ({ featuredBlogs }: { featuredBlogs: Blog[] }) => {
  return (
    <section className="bg-white ">
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
            <Link href={`/blogs/${featuredBlogs?.[0]?.slug}`}>
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
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                  <div className="py-4 bg-white">
                    <p className=" spaced-text fw-bold fs-5 text-dark ">
                      {featuredBlogs[0]?.title}
                    </p>
                    <p className="fs-5 fw-md-medium text-dark my-2">
                      We specialize on &quot;Social Media Marketing&quot; with
                      three package available, currently. Further, we believe in
                      driving business through creativity.
                    </p>
                  </div>
                </div>
              </m.div>
            </Link>
          </>
        ) : null}
      </AnimateInView>
      <AllBlogs />
    </section>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const featuredBlogsResponse = await apiRequest(
    `${process.env.API_ENDPOINT}featured-blog/`
  );

  const [featuredBlogs] = await Promise.all([featuredBlogsResponse]);

  return {
    props: {
      featuredBlogs,
    },
  };
}
