import React from "react";
import "./VideoCard.scss";

export default function VideoCard({ video, changeVideo }) {
  return (
    <div
      className="video-card"
      onClick={(event) => {
        changeVideo(video.id);
      }}
    >
      <div className="video-card__img-container">
        <img
          className="video-card__img-container--img"
          src={video.image}
          alt={video.title}
        ></img>
      </div>
      <div className="video-card__details">
        <p className="video-card__details--title">{video.title}</p>
        <p className="video-card__details--channel">{video.channel}</p>
      </div>
    </div>
  );
}
