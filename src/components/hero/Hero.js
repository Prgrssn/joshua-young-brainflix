import React from "react";
import CommentForm from "../comment-form/CommentForm";
import CommentList from "../comment-list/CommentList";
import VideoDetails from "../hero-video-details/VideoDetails";
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
