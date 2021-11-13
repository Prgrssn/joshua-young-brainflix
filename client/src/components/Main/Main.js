import React from "react";
import Hero from "../Hero/Hero";
import VideoList from "../Videolist/VideoList";
import "./Main.scss";

export default function Main({ video, heroVideo, changeVideo, handleSubmit }) {
  return (
    <main className="main-section">
      <Hero
        key={video}
        video={video}
        heroVideo={heroVideo}
        handleSubmit={handleSubmit}
      />
      <VideoList
        key={video.id}
        video={video}
        heroVideo={heroVideo}
        changeVideo={changeVideo}
      />
    </main>
  );
}
