import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ heroVideo }) {
  return (
    <article className="video-player">
      <video
        controls
        poster={heroVideo.image}
        className="video-player__video"
      ></video>
    </article>
  );
}
