import AnimateInView from "../../components/AnimateInView/AnimateInView";
import * as gtag from "../../lib/gtag";
import { CgArrowLongRight, Link } from "../Imports/imports";
import PackageCard from "./PackageCard";

export interface PackageDetail {
  id: number;
  packageName: string;
  packageInfo: string;
  slug: string;
  price: number;
  isRecommended: boolean;
  isDiscounted: boolean;
  isOffer: boolean;
  actualprice: number;
  services: Service[];
}

export interface Service {
  id: number;
  service: ServiceDetails;
  moreInfo: string;
  is_featured: boolean;
}

export interface ServiceDetails {
  id: number;
  serviceName: string;
  createdAt: string;
  updatedAt: string;
}

const Packages = ({
  className,
  featuredPackages,
}: {
  className?: string;
  featuredPackages: PackageDetail[];
}) => {
  return (
    <div className={`${className ? className : "py-5 bg-white"}`}>
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm ">
          Packages
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 mt-3 text-dark lh-base">
          We Have Awesome Packages with Flexible Pricing.
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5 g-3">
          {featuredPackages.map((pack, index) => (
            <div className="col " key={index}>
              <PackageCard pack={pack} />
            </div>
          ))}
        </div>
        <div className="mt-4 d-flex">
          <Link
            href="/packages"
            className="btn btn-outline-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            onClick={() => {
              gtag.event({
                action: "View All Packages Clicked",
                label: "View All Packages",
                category: "engagement",
                value: "",
              });
            }}
          >
            View All Packages
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </div>
  );
};

export default Packages;
