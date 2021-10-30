import React, { Component } from "react";
import "./VideoList.scss";
import VideoCard from "../video-card/VideoCard";

export default function VideoList({ video, heroVideo, changeVideo }) {
  return (
    <section className="video-list-section">
      <h2 className="video-list-section__title">Next Videos</h2>
      {video
        .filter((video) => video.id !== heroVideo.id)
        .map((video) => (
          <VideoCard
            key={video.title}
            video={video}
            changeVideo={changeVideo}
          />
        ))}
    </section>
  );
}
