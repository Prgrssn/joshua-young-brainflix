import React from "react";
import Hero from "../hero/Hero";
import VideoList from "../videolist/VideoList";
import "./Main.scss";

export default function Main({ video, heroVideo, changeVideo }) {
  return (
    <main className="main-section">
      <Hero key={video} video={video} heroVideo={heroVideo} />
      <VideoList
        key={video.id}
        video={video}
        heroVideo={heroVideo}
        changeVideo={changeVideo}
      />
    </main>
  );
}
