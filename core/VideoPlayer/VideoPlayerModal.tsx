import { Modal } from "react-bootstrap";

const VideoPlayerModal = (props: any) => {
  return (
    <Modal {...props} size="xl" centered className="border-0 p-0">
      <Modal.Body className="bg-primary p-0">
        <div className="container p-0 d-flex" style={{ height: "40rem" }}>
          <iframe
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            allow="accelerometer; autoplay; encrypted-media; "
            allowFullScreen
            className="rounded-0 h-100"
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoPlayerModal;
