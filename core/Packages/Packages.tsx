import AnimateInView from "../../components/AnimateInView/AnimateInView";
import * as gtag from "../../lib/gtag";
import { CgArrowLongRight, Link } from "../Imports/imports";
import PackageCard from "./PackageCard";

export const packages = [
  {
    id: 1,
    packageName: "Lite",
    subInfo: "Best For Small-Enterprises",
    price: 9999,
    isFeatured: true,
    isRecommended: false,
    isDiscounted: true,
    actualPrice: 11999,
    services: [
      {
        id: 1,
        name: "Awareness Post",
        count: 1,
      },
      {
        id: 2,
        name: "Engagement Post",
        count: 2,
      },
      {
        id: 3,
        name: "Social Media Cover",
        count: 2,
      },
      {
        id: 4,
        name: "Motion Graphics",
        count: 1,
      },
      {
        id: 5,
        name: "Monthly Analytics",
        count: null,
      },
      {
        id: 6,
        name: "Monthly Social Media Marketing Plan",
        count: null,
      },
      {
        id: 6,
        name: "Upto 10 Hastags Research",
      },
    ],
  },
  {
    id: 2,
    packageName: "Pro",
    subInfo: "Best For Startups",
    price: 19999,
    isRecommended: true,
    isFeatured: true,
    isDiscounted: true,
    actualPrice: 22999,
    services: [
      {
        id: 1,
        name: "Awareness Post",
        count: 1,
      },
      {
        id: 2,
        name: "Engagement Post",
        count: 2,
      },
      {
        id: 3,
        name: "Social Media Cover",
        count: 2,
      },
      {
        id: 4,
        name: "Motion Graphics",
        count: 1,
      },
      {
        id: 5,
        name: "Monthly Analytics",
        count: null,
      },
      {
        id: 6,
        name: "Monthly Social Media Marketing Plan",
        count: null,
      },
      {
        id: 6,
        name: "Upto 10 Hastags Research",
      },
    ],
  },
  {
    id: 3,
    packageName: "Enterprise",
    subInfo: "Best For Startups",
    price: 29999,
    isFeatured: true,
    isRecommended: false,
    isDiscounted: false,
    actualPrice: 29999,
    services: [
      {
        id: 1,
        name: "Awareness Post",
        count: 1,
      },
      {
        id: 2,
        name: "Engagement Post",
        count: 2,
      },
      {
        id: 3,
        name: "Social Media Cover",
        count: 2,
      },
      {
        id: 4,
        name: "Motion Graphics",
        count: 1,
      },
      {
        id: 5,
        name: "Monthly Analytics",
        count: null,
      },
      {
        id: 6,
        name: "Monthly Social Media Marketing Plan",
        count: null,
      },
      {
        id: 6,
        name: "Upto 10 Hastags Research",
      },
      {
        id: 6,
        name: "Upto 10 Hastags Research",
      },
    ],
  },
];
const Packages = ({ className }: { className?: string }) => {
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
          {packages
            .filter((pack) => pack.isFeatured)
            .map((pack, index) => (
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
