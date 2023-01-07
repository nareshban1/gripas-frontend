import { useContext } from "react";
import { CgArrowLongRight } from "../Imports/imports";
import { OverlayContext } from "../../context/OverlayContext";
import Button from "../../components/Button/Button";

const Freelancer = () => {
  const { toggleFreelanceForm } = useContext(OverlayContext);

  return (
    <div className="py-5 bg-primary">
      <div className="container py-5">
        <h2 className=" fw-bold lh-1 m-0 text-white lh-base text-start hero-sub-text font-size-sm">
          Opportunity
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-white lh-base">
          Are you a Freelancer?
        </h3>
        <p className="font-size-rg text-white fw-medium mb-5">
          Our Vision is to empower youngsters and bring latest automation
          technologies.
        </p>
        <div className="mt-4 d-flex">
          <Button
            label="Contact Us"
            className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            onClick={toggleFreelanceForm}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
