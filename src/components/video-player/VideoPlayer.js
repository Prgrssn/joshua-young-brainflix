import React from "react";
import "./Video.scss";

export default function VideoPlayer(props) {
  return (
    <div className="video-player">
      <video
        controls
        poster={props.video}
        src={props.video}
        className="video-player__video"
      ></video>
    </div>
  );
}
