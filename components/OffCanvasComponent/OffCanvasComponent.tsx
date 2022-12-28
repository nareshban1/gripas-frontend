import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { poppins } from "../../pages/_app";
const OffCanvasComponent = ({
  show,
  title,
  handleClose,
  children,
}: {
  title: any;
  show: any;
  handleClose: any;
  children?: any;
}) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={"end"}
      className={`offcanvas ${poppins.className} p-3`}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="spaced-text fw-bold fs-4">
          {title}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasComponent;
