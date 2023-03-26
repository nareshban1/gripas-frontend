import Link from "next/link";
import React from "react";
import { m } from "framer-motion";
import Image from "next/image";
import { Blog } from "./blogs.interface";
import * as gtag from "../../lib/gtag";
const BlogsCard = ({ blogItem }: { blogItem: Blog }) => {
  return (
    <Link
      href={`/blogs/${blogItem.slug}`}
      onClick={() => {
        gtag.event({
          action: `${blogItem.title} Viewed`,
          label: blogItem.title,
          category: "engagement",
          value: "",
        });
      }}
    >
      <m.div
        className="col cursor-pointer"
        whileHover={{ scale: 1.05 }}
        key={blogItem.id}
      >
        <div className="position-relative  h-100 ">
          <Image
            src={blogItem?.image}
            alt={blogItem.title}
            height={350}
            width={400}
            style={{ objectFit: "fill", width: "100%" }}
          />
          <p className="py-3 mb-0 spaced-text fw-bold fs-5 text-dark">
            {blogItem.title}
          </p>
        </div>
      </m.div>
    </Link>
  );
};

export default BlogsCard;
