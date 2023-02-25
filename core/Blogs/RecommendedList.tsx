import dynamic from "next/dynamic";
import React from "react";
import { BlogList } from "./blogs.interface";
const BlogsCard = dynamic(() => import("./BlogsCard"));

const RecommendedList = ({
  recommendedResposeData,
}: {
  recommendedResposeData: BlogList[];
}) => {
  return (
    <>
      {recommendedResposeData[0]?.blogs ? (
        <>
          {recommendedResposeData[0]?.blogs.map((blog) => (
            <BlogsCard blogItem={blog} key={blog.id} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default RecommendedList;
