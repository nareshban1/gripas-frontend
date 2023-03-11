import React, { PropsWithChildren, ReactNode } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../Button/Button";

interface ModalProps extends PropsWithChildren {
  heading: string | ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const ReactModal = ({ heading, children, isOpen, toggle }: ModalProps) => {
  console.log(isOpen);
  return (
    <Modal
      show={isOpen}
      onHide={toggle}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="rounded-0 border-0"
    >
      <Modal.Header closeButton className="d-flex align-items-center">
        <Modal.Title className="spaced-text fw-bold m-0">{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          onClick={toggle}
          label="Close"
        ></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReactModal;
