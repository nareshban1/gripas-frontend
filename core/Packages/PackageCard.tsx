import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "../Imports/imports";

const PackageCard = ({ pack }: { pack: any }) => {
  return (
    <div
      className={`border box-sizing-border rounded-0 p-3 shadow h-100 d-flex flex-column position-relative`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="fs-4 spaced-text fw-bold">{pack.packageName}</h5>
        {pack.isDiscounted && (
          <div className="ribbon ">
            <span>
              <div className="glow"></div>Offer
            </span>
          </div>
        )}
      </div>

      <p className="fw-semibold">{pack.subInfo}</p>

      <div className="my-3">
        {pack.services.map((service: any, index: number) => (
          <p key={index}>
            {service.count} {service.name}
          </p>
        ))}
      </div>
      <div className="d-flex flex-column justify-content-end  mt-auto">
        <span
          className={`fw-medium fs-5 text-decoration-line-through ${
            pack.isDiscounted ? "visible" : "invisible"
          }`}
        >
          Rs.{pack.actualPrice}
        </span>
        <div className="d-flex align-items-baseline ">
          <h1 className="fs-1 fw-bold m-0 me-2">
            Rs.{pack.price.toLocaleString()}
          </h1>
          <span>per month</span>
        </div>
      </div>

      <div className="d-flex mt-3">
        <Link
          href="/packages"
          className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
        >
          Buy Package
          <CgArrowLongRight className="ms-2 long-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
