import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { useBoolean } from "usehooks-ts";
import apiRequest from "../components/Axios/api-request";
import Button from "../components/Button/Button";
import PackageModal from "../components/Modal/PackageModal";
import { OverlayContext } from "../context/OverlayContext";
import { PackageDetail } from "../core/Packages/Packages";
import Seo from "../core/Seo/Seo";
import { PageData } from "../lib/app.interface";

const AnimateInView = dynamic(
  () => import("../components/AnimateInView/AnimateInView")
);
const InfoComponent = dynamic(
  () => import("../components/InfoComponent/InfoComponent")
);
const PackageCard = dynamic(() => import("../core/Packages/PackageCard"));

const Packages = ({
  packages,
  pageContent,
}: {
  packages: PackageDetail[];
  pageContent: PageData;
}) => {
  const { toggleCustomForm, togglePackageBuyForm, setPackage } =
    useContext(OverlayContext);
  const {
    value: isOpen,
    setFalse: closeModal,
    setTrue: openModal,
  } = useBoolean(false);
  const [selectedItem, setSelectedItem] = useState<PackageDetail | null>(null);

  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white">
        <AnimateInView className="container py-5 d-flex flex-column justify-content-start ">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Awesome Packages with Flexible Pricing
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Packages
          </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {packages?.map((pack, index) => (
              <div className="col " key={index}>
                <PackageCard
                  pack={pack}
                  onClick={() => {
                    openModal();
                    setSelectedItem(pack);
                  }}
                />
              </div>
            ))}
          </div>
        </AnimateInView>
        <PackageModal
          heading={
            selectedItem ? (
              <>
                <h4 className="fw-bold">{selectedItem.packageName}</h4>
                <p className="fw-medium fs-6">{selectedItem.packageInfo}</p>
              </>
            ) : (
              "Package Details"
            )
          }
          isOpen={isOpen}
          toggle={closeModal}
          modalButton={
            <>
              {selectedItem && (
                <Button
                  className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
                  onClick={() => {
                    closeModal();
                    togglePackageBuyForm();
                    setPackage(selectedItem.id);
                  }}
                  label=" Buy Package"
                ></Button>
              )}
            </>
          }
        >
          {selectedItem && (
            <>
              <div>
                <div className="d-flex flex-column justify-content-end  mt-auto">
                  <span
                    className={`fw-medium fs-5 text-decoration-line-through ${
                      selectedItem.isDiscounted ? "visible" : "invisible"
                    }`}
                  >
                    Rs.{selectedItem.actualprice}
                  </span>
                  <div className="d-flex align-items-baseline ">
                    <h1 className="fs-1 fw-bold m-0 me-2 text-primary">
                      Rs.{selectedItem.price.toLocaleString()}
                    </h1>
                    <span>per month</span>
                  </div>
                </div>
                <h5 className="fw-semibold mt-4">What you get?</h5>
                <div className="my-3">
                  {selectedItem.services.map((serviceDetail, index: number) => (
                    <p key={index}>
                      <>
                        {serviceDetail.service.serviceName}
                        {serviceDetail.moreInfo && (
                          <>({serviceDetail.moreInfo})</>
                        )}
                      </>
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </PackageModal>
      </section>
      <InfoComponent
        subtitle="Customization"
        title="Did not find any packages that fits your requirements?"
        info="Contact us to discuss a package that fits your needs."
        label="Custom Package"
        onButtonClick={toggleCustomForm}
      />
    </>
  );
};

export async function getServerSideProps() {
  const packagesResponse = await apiRequest(`packages/`);
  const pageDetailsResponse = await apiRequest(`pagecontents/packages`);
  const [packages, pageContentData] = await Promise.all([
    packagesResponse,
    pageDetailsResponse,
  ]);
  const pageContent = pageContentData ? pageContentData : {};
  return {
    props: {
      packages,
      pageContent,
    },
  };
}

export default Packages;
