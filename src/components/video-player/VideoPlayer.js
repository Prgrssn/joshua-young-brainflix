import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ heroVideo }) {
  console.log(heroVideo);
  return (
    <div className="video-player">
      <video
        controls
        poster={heroVideo.image}
        className="video-player__video"
      ></video>
    </div>
  );
}
