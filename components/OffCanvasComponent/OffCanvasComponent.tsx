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
      className={`offcanvas ${poppins.className} p-3`}
    >
      <motion.div
        initial={{ opacity: 0, y: 0, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 0, x: -10 }}
        transition={{
          duration: 0.2,
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="spaced-text fw-bold fs-4">
            {title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </motion.div>
    </Offcanvas>
  );
};

export default OffCanvasComponent;
