import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { poppins } from "../../pages/_app";
import { motion } from "framer-motion";
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
      backdrop={false}
      className={`offcanvas ${poppins.className} p-4`}
    >
      <Offcanvas.Header closeButton className="p-0">
        <Offcanvas.Title className="spaced-text fw-bold fs-4">
          {title}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="h-100 scrollable p-0 mt-4">
        {children}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasComponent;
