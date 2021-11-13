import React from "react";
import "./VideoList.scss";
import VideoCard from "../Video-card/VideoCard";

export default function VideoList({ video, heroVideo, changeVideo }) {
  return (
    <section className="video-list-section">
      <h2 className="video-list-section__title">NEXT VIDEOS</h2>
      {video
        .filter((video) => video.id !== heroVideo.id)
        .map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
    </section>
  );
}
