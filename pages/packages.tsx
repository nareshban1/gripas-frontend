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
            {packages &&
              packages?.map((pack, index) => (
                <div className="col " key={index}>
                  <PackageCard pack={pack} />
                </div>
              ))}
          </div>
        </AnimateInView>
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
