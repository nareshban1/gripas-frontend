import { Modal } from "react-bootstrap";

const VideoPlayerModal = (props: any) => {
  return (
    <Modal {...props} size="xl" centered className="border-0 p-0">
      <Modal.Body className="bg-primary p-0">
        <div className="container p-0 d-flex" style={{ height: "40rem" }}>
          <video width={"100%"} height={"100%"} controls autoPlay>
            <source
              src="https://synthesia-ttv-data.s3-eu-west-1.amazonaws.com/video_data/aa6112d8-9626-4a24-8156-e276b23d6b19/transfers/target_transfer.mp4"
              type="video/mp4"
              className="rounded-0 h-100"
            />
          </video>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoPlayerModal;
