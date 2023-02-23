import dynamic from "next/dynamic";
import React from "react";
import { BlogList } from "./blogs.interface";
const BlogsCard = dynamic(() => import("./BlogsCard"));

const RecommendedList = ({
  recommendedResposeData,
}: {
  recommendedResposeData: BlogList[];
}) => {
  const recommendedList = recommendedResposeData?.find(
    (item) => item.listType === "recommended"
  );
  return (
    <>
      {recommendedList?.blogs ? (
        <>
          {recommendedList?.blogs.map((blog) => (
            <BlogsCard blogItem={blog} key={blog.id} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default RecommendedList;
