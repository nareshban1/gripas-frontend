import dynamic from "next/dynamic";
import Image from "next/image";
import apiRequest from "../components/Axios/api-request";
import HtmlParser from "../components/HtmlParser/HtmlParser";
import ReactModal from "../components/Modal/ReactModal";
import { useBoolean } from "usehooks-ts";
import { IPortfolioItem } from "../core/PortFolio/Portfolio";
import Seo from "../core/Seo/Seo";
import { PageData, poppins } from "../lib/app.interface";
import { useState } from "react";
import Button from "../components/Button/Button";

const AnimateInView = dynamic(
  () => import("../components/AnimateInView/AnimateInView")
);
const LinkToPackage = dynamic(() => import("../core/Packages/LinkToPackage"));

export default function Portfolio({
  allPortfolios,
  pageContent,
}: {
  allPortfolios: IPortfolioItem[];
  pageContent: PageData;
}) {
  const {
    value: isOpen,
    setFalse: closeModal,
    setTrue: openModal,
  } = useBoolean(false);
  const [selectedItem, setSelectedItem] = useState<IPortfolioItem | null>(null);

  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            What have we worked on
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Our Portfolio
          </h3>
          <div className="container-fluid p-0">
            <div className="row row-cols-md-2 row-cols-1  position-relative w-100 g-5 m-0">
              {allPortfolios &&
                allPortfolios?.length &&
                allPortfolios.map((item) => (
                  <div className="col item-grid p-0 p-md-3 " key={item.id}>
                    <div
                      className="item-grid-item cursor-pointer"
                      onClick={() => {
                        setSelectedItem(item);
                        openModal();
                      }}
                    >
                      <div className="item-grid-item-image">
                        <Image src={item.image} alt={item.name} fill />
                      </div>
                      <div className="item-grid-item-description mt-3">
                        <h4 className="spaced-text fw-bold">{item.name}</h4>
                        <div
                          className={`service-info fw-md-medium text-dark my-2 ${poppins.className}`}
                        >
                          <HtmlParser content={item.shortDescription} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </AnimateInView>
      </section>

      <ReactModal
        heading={selectedItem ? selectedItem.name : "Details"}
        isOpen={isOpen}
        toggle={closeModal}
      >
        {selectedItem && (
          <>
            {" "}
            <div className="item-grid-item-image">
              <Image src={selectedItem.image} alt={selectedItem.name} fill />
            </div>
            <div className="item-grid-item-description mt-3">
              {selectedItem?.client && (
                <div
                  className={`service-info fw-md-medium text-dark my-3  ${poppins.className}`}
                >
                  <h5 className="m-0 fw-semibold">Client Details</h5>
                  <p className="m-0 fw-medium fs-5">
                    {selectedItem?.client?.name}
                  </p>
                  <p className="m-0">{selectedItem?.client?.details}</p>
                  <p className="m-0 fw-light">
                    {selectedItem?.client?.location}
                  </p>
                </div>
              )}
              <div
                className={`service-info fw-md-medium text-dark my-2 ${poppins.className}`}
              >
                <HtmlParser content={selectedItem.details} />
              </div>
            </div>
          </>
        )}
      </ReactModal>

      <LinkToPackage />
    </>
  );
}

export async function getServerSideProps() {
  const allPortfolioResponse = await apiRequest(`portfolios/`);
  const pageDetailsResponse = await apiRequest(`pagecontents/portfolio`);
  const [allPortfolios, pageContentData] = await Promise.all([
    allPortfolioResponse,
    pageDetailsResponse,
  ]);
  const pageContent = pageContentData ? pageContentData : {};
  return {
    props: {
      allPortfolios,
      pageContent,
    },
  };
}
