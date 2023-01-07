import React from "react";
import { VscPlay } from "react-icons/vsc";
import Button from "../../components/Button/Button";
import VideoPlayerModal from "./VideoPlayerModal";

const VideoPlayer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        className="btn btn-outline-light btn-text-white rounded-0 ms-3"
        onClick={() => setModalShow(true)}
        actionlabel="Promotional Video"
        hasArrow={false}
        icon={<VscPlay size={24} />}
      ></Button>
      <VideoPlayerModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default VideoPlayer;
