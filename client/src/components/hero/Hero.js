import React from "react";
import CommentForm from "../Comment-form/CommentForm";
import CommentList from "../Comment-list/CommentList";
import VideoDetails from "../Hero-video-details/VideoDetails";
import "./Hero.scss";

export default function Hero({ video, heroVideo, handleSubmit }) {
  return (
    <section className="hero-section">
      <VideoDetails key={video.id} video={heroVideo} />
      <CommentForm handleSubmit={handleSubmit} />
      <CommentList key={heroVideo.id} heroVideo={heroVideo} />
    </section>
  );
}
