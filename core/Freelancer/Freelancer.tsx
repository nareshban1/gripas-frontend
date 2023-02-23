import { useContext } from "react";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import { OverlayContext } from "../../context/OverlayContext";

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
