import React from "react";
import "./VideoList.scss";
import VideoCard from "../video-card/VideoCard";

export default function VideoList({ changeVideo, video }) {
  return (
    <section className="video-list-section">
      {video.map((video) => {
        return (
          <VideoCard
            key={video.title}
            video={video}
            changeVideo={changeVideo}
          />
        );
      })}
    </section>
  );
}
