import dynamic from "next/dynamic";
import React from "react";
import { BlogList } from "./blogs.interface";
const BlogsCard = dynamic(() => import("./BlogsCard"));

const RecommendedList = ({
  recommendedResponseData,
}: {
  recommendedResponseData: BlogList[];
}) => {
  return (
    <>
      {recommendedResponseData[0]?.blogs ? (
        <>
          {recommendedResponseData[0]?.blogs.map((blog) => (
            <BlogsCard blogItem={blog} key={blog.id} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default RecommendedList;
