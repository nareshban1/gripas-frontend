import React from "react";
import { Modal } from "react-bootstrap";
import { VscPlay } from "react-icons/vsc";

function VideoPlayerModal(props: any) {
  return (
    <Modal {...props} size="xl" centered className="border-0" fullscreen>
      <Modal.Header closeButton className="bg-light border-0"></Modal.Header>
      <Modal.Body className="bg-light">
        <iframe
          width={"100%"}
          height={"100%"}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; "
          allowFullScreen
          className="rounded"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

const VideoPlayer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button className="btn btn-outline-light btn-text-white rounded-0 ms-3">
        <VscPlay size={24} onClick={() => setModalShow(true)} />
      </button>

      <VideoPlayerModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default VideoPlayer;
