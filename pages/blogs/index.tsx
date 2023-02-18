import Image from "next/image";
import React from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import { motion } from "framer-motion";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
export const portfolioItems = [
  {
    name: "How to create a tiktok ad",
    image: "/all.jpg",
    id: "1",
  },
  {
    name: "How to implement google analytics",
    image: "/facebook.jpg",
    id: "2",
  },
  {
    name: "Social Marketing Tips and Tricks",
    image: "/product.jpg",
    id: "3",
  },
  {
    name: "How to create a tiktok ad",
    image: "/all.jpg",
    id: "1",
  },
  {
    name: "How to implement google analytics",
    image: "/facebook.jpg",
    id: "2",
  },
  {
    name: "Social Marketing Tips and Tricks",
    image: "/product.jpg",
    id: "3",
  },
  {
    name: "How to create a tiktok ad",
    image: "/all.jpg",
    id: "1",
  },
  {
    name: "How to implement google analytics",
    image: "/facebook.jpg",
    id: "2",
  },
  {
    name: "Social Marketing Tips and Tricks",
    image: "/product.jpg",
    id: "3",
  },
];

export interface PaginatedBlogs {
  next: any;
  itemsOnPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  previous: any;
  count: number;
  totalPages: number;
  currentPage: number;
  data: Blogitem[];
}

export interface Blogitem {
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

const Blogs = ({
  featuredBlogs,
  allBlogs,
}: {
  featuredBlogs: Blogitem[];
  allBlogs: PaginatedBlogs;
}) => {
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
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Content
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          Blogs
        </h3>

        <h2 className=" fw-bold lh-1 mt-3 text-dark lh-base text-start  fs-5">
          Featured
        </h2>
        <Link href={`/blogs/${featuredBlogs[0].slug}`}>
          <motion.div
            className="col cursor-pointer my-3"
            key={featuredBlogs[0].id}
          >
            <div className="position-relative h-100 ">
              <Image
                src={featuredBlogs[0]?.image}
                alt={featuredBlogs[0].title}
                height={350}
                width={400}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <div className="py-4 bg-white">
                <p className=" spaced-text fw-bold fs-5 text-dark ">
                  {featuredBlogs[0].title}
                </p>
                <p className="fs-5 fw-md-medium text-dark my-2">
                  We specialize on &quot;Social Media Marketing&quot; with three
                  package available, currently. Further, we believe in driving
                  business through creativity.
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
      </AnimateInView>
      <AnimateInView className="container py-5">
        <h2 className=" fw-bold lh-1 my-3 text-dark lh-base text-start  fs-5">
          All Blogs
        </h2>

        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 ">
          {allBlogs.data.map((item) => (
            <div className="col" key={item.id}>
              <Link href={`/blogs/${item.slug}`}>
                <motion.div
                  className="cursor-pointer h-100"
                  whileHover={{ scale: 1.05 }}
                  key={item.id}
                >
                  <div className="position-relative  h-100 ">
                    <Image
                      src={item?.image}
                      alt={item.title}
                      height={350}
                      width={400}
                      style={{ objectFit: "cover", width: "100%" }}
                    />
                    <p className="py-3 spaced-text fw-bold fs-5 text-dark ">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-5 d-flex justify-content-end">
          <Link
            href="/blogs"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            <CgArrowLongLeft className=" me-2 long-arrow" />
            Previous Page
          </Link>
          <Link
            href="/blogs"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center ms-3"
          >
            Next Page
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </section>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const featuredBlogsResponse = await axios.get(
    `${process.env.API_ENDPOINT}featured-blog/`
  );
  const allBlogsResponse = await axios.get(`${process.env.API_ENDPOINT}blogs/`);

  const [featuredBlogs, allBlogs] = await Promise.all([
    featuredBlogsResponse?.data,
    allBlogsResponse?.data,
  ]);

  return {
    props: {
      featuredBlogs,
      allBlogs,
    },
  };
}
