import React from "react";
import ReactPlayer from "react-player";
import video from "../../assets/videos/video.mp4";
import "./VideoPage.css";
const VideoPage = () => {
  return (
    <div className="video-page">
      <ReactPlayer
        width="100%"
        height="100%"
        playIcon
        url={video}
        controls="true"
      ></ReactPlayer>
    </div>
  );
};

export default VideoPage;
