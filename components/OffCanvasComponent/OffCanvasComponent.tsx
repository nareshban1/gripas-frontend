import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
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
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasComponent;
