import React from "react";
import CommentForm from "../comment-form/CommentForm";
import CommentList from "../comment-list/CommentList";
import VideoPlayer from "../video-player/VideoPlayer";
import "./Hero.scss";

export default function Hero(props) {
  console.log(props);
  return (
    <section className="hero-section">
      <VideoPlayer key={props.heroData} />;
      <CommentForm />
      <CommentList comment={props.heroData} />
    </section>
  );
}
