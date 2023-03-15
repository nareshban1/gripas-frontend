import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import apiRequest from "../../components/Axios/api-request";
import { PaginatedCampaigns } from "./campaigns.interface";
const CampaignCard = dynamic(() => import("./CampaignCard"));

const AllCampaigns = () => {
  const [allCampaigns, setAllCampaigns] = useState<PaginatedCampaigns | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const getBlogs = async () => {
      const allCampaignsResponse = await apiRequest<PaginatedCampaigns>(
        `all-blogs/?page=${pageNumber}`
      );
      setAllCampaigns(allCampaignsResponse ?? null);
    };
    getBlogs();
  }, [pageNumber]);

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <AnimateInView className="container pb-5">
      {allCampaigns?.data?.length ? (
        <>
          <h2 className=" fw-bold lh-1 my-3 text-dark lh-base text-start  fs-5">
            All Blogs
          </h2>

          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 ">
            {allCampaigns?.data.map((item: any) => (
              <div className="col" key={item.id}>
                <CampaignCard campaignItem={item} />
              </div>
            ))}
          </div>

          <div className="mt-5 d-flex justify-content-end">
            {allCampaigns?.hasPrevious && (
              <Link
                href="/blogs"
                className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
                onClick={previousPage}
              >
                <CgArrowLongLeft className=" me-2 long-arrow" />
                Previous Page
              </Link>
            )}

            {allCampaigns?.hasNext && (
              <Link
                href="/blogs"
                className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center ms-3"
                onClick={nextPage}
              >
                Next Page
                <CgArrowLongRight className="ms-2 long-arrow" />
              </Link>
            )}
          </div>
        </>
      ) : null}
    </AnimateInView>
  );
};

export default AllCampaigns;
