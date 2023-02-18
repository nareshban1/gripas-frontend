import { useContext } from "react";
import Button from "../../components/Button/Button";
import { OverlayContext } from "../../context/OverlayContext";
import { PackageDetail } from "./Packages";

const PackageCard = ({ pack }: { pack: PackageDetail }) => {
  const { togglePackageBuyForm, setPackage } = useContext(OverlayContext);
  return (
    <div
      className={`package-card border box-sizing-border rounded-0 p-3 shadow h-100 d-flex flex-column position-relative`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="fs-4 spaced-text fw-bold">{pack.packagename}</h5>
        {pack.is_offer && (
          <div className="ribbon ">
            <span>
              <div className="glow"></div>Offer
            </span>
          </div>
        )}
      </div>

      <p className="fw-semibold">{pack.packageinfo}</p>

      <div className="my-3">
        {pack.services.map((serviceDetail, index: number) => (
          <p key={index}>
            <>
              {serviceDetail.count} {serviceDetail.service.servicename}
            </>
          </p>
        ))}
      </div>
      <div className="d-flex flex-column justify-content-end  mt-auto">
        <span
          className={`fw-medium fs-5 text-decoration-line-through ${
            pack.is_discounted ? "visible" : "invisible"
          }`}
        >
          Rs.{pack.actualprice}
        </span>
        <div className="d-flex align-items-baseline ">
          <h1 className="fs-1 fw-bold m-0 me-2">
            Rs.{pack.price.toLocaleString()}
          </h1>
          <span>per month</span>
        </div>
      </div>

      <div className="d-flex mt-3">
        <Button
          className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          onClick={() => {
            togglePackageBuyForm();
            setPackage(pack.id);
          }}
          label=" Buy Package"
        ></Button>
      </div>
    </div>
  );
};

export default PackageCard;
