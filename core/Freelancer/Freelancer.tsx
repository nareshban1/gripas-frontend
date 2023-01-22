import { useContext } from "react";
import { CgArrowLongRight } from "../Imports/imports";
import { OverlayContext } from "../../context/OverlayContext";
import Button from "../../components/Button/Button";
import InfoComponent from "../../components/InfoComponent/InfoComponent";

const Freelancer = () => {
  const { toggleFreelanceForm } = useContext(OverlayContext);

  return (
    <InfoComponent
      subtitle="Opportunity"
      title="Are you a Freelancer?"
      info="Our Vision is to empower youngsters and bring latest automation
        technologies."
      label="Contact Us"
      onButtonClick={toggleFreelanceForm}
    />
  );
};

export default Freelancer;
