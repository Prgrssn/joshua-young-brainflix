import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer(props) {
  return (
    <div className="video-player">
      <video
        controls
        poster={props.heroVideo.image}
        className="video-player__video"
      ></video>
    </div>
  );
}
