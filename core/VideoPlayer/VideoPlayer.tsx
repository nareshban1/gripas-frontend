import React from "react";
import { Modal } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";

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
      <AiFillPlayCircle
        size={48}
        className="text-primary ms-2 cursor-pointer"
        onClick={() => setModalShow(true)}
      />
      <VideoPlayerModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default VideoPlayer;
