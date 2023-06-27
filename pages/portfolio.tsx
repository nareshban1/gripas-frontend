import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import apiRequest from "../components/Axios/api-request";
import HtmlParser from "../components/HtmlParser/HtmlParser";
import ReactModal from "../components/Modal/ReactModal";
import { IPortfolioItem } from "../core/PortFolio/Portfolio";
import Seo from "../core/Seo/Seo";
import { PageData, poppins } from "../lib/app.interface";

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
          <div className="row row-cols-md-2 row-col-1  g-4">
            {allPortfolios && allPortfolios?.length ? (
              <>
                {allPortfolios.map((item) => (
                  <div className="col" key={item.id}>
                    <div
                      className="cursor-pointer  border box-sizing-border"
                      onClick={() => {
                        setSelectedItem(item);
                        openModal();
                      }}
                    >
                      <div className="item-grid-item-image">
                        <Image src={item.image} alt={item.name} fill />
                      </div>
                      <div className="item-grid-item-description  p-3">
                        <h4 className="spaced-text fw-bold">{item.name}</h4>
                        <div
                          className={`service-info fw-md-medium text-dark mt-2 ${poppins.className}`}
                        >
                          <HtmlParser content={item.shortDescription} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </AnimateInView>
      </section>

      <ReactModal
        heading={selectedItem ? selectedItem.name : "Details"}
        isOpen={isOpen}
        toggle={closeModal}
      >
        {selectedItem && (
          <div className="row">
            <div className="col-4">
              <div className="item-grid-item-image">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  style={{ objectPosition: "left" }}
                />
              </div>
            </div>
            <div className="col">
              <div className="item-grid-item-description mt-3">
                {selectedItem?.client && (
                  <div
                    className={`service-info fw-md-medium text-dark my-3  ${poppins.className}`}
                  >
                    <p className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
                      Client Details
                    </p>
                    <p className="m-0 fw-bold fs-5">
                      {selectedItem?.client?.name}
                    </p>
                    <p className="m-0">{selectedItem?.client?.details}</p>
                    <p className="m-0 fw-light">
                      {selectedItem?.client?.location}
                    </p>
                  </div>
                )}
                <p className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
                  Project Details
                </p>
                <div
                  className={`service-info fw-md-medium text-dark my-2 ${poppins.className}`}
                >
                  <HtmlParser content={selectedItem.details} />
                </div>
              </div>
            </div>
          </div>
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
