import React from "react";
import CommentForm from "../comment-form/CommentForm";
import VideoDetails from "../hero-video-details/VideoDetails";
import VideoPlayer from "../video-player/VideoPlayer";

export default function Hero(props) {
  return (
    <aritlce className="hero-section">
      <VideoPlayer />
      <h1 className="hero-section__video-title">{props.title}</h1>
      <VideoDetails />
      <div className="hero-section__video-description">
        <p className="hero-section__video-description--description">
          {props.description}
        </p>
        <p className="hero-section__video-description--comments">3 Comments</p>
      </div>
      <CommentForm />
    </aritlce>
  );
}
