import React from "react";
import { useContext } from "react";
import OffCanvasComponent from "../../components/OffCanvasComponent/OffCanvasComponent";

import { OverlayContext } from "../../context/OverlayContext";

const GetStarted = () => {
  const { showStartedForm, toggleStartedForm } = useContext(OverlayContext);
  return (
    <OffCanvasComponent
      title={"Get Started"}
      show={showStartedForm}
      handleClose={toggleStartedForm}
    >
      <div>Get Started form</div>
    </OffCanvasComponent>
  );
};

export default GetStarted;
