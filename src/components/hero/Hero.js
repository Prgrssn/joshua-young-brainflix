import React from "react";
import CommentList from "../comment-list/CommentList";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-section__video-title">Video Title</h1>
      <div className="hero-section__video-description">
        <p className="hero-section__video-description--description">
          Video Description.
        </p>
        <p className="hero-section__video-description--comments">3 Comments</p>
      </div>
      <CommentList />
    </section>
  );
}
