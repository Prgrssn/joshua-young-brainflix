import React from "react";
// import VideoCardInfo from "../video-card-info/VideoCardInfo";
import "./VideoCard.scss";

export default function VideoCard(props) {
  return (
    <div
      className="video-card"
      onClick={(event) => {
        props.changeVideo(props.video.id);
      }}
    >
      <div className="video-card__img-container">
        <img
          className="video-card__img-container--img"
          src={props.video.image}
          alt={props.video.title}
        ></img>
      </div>
      <div className="video-card__details">
        <p className="video-card__details--title">{props.video.title}</p>
        <p className="video-card__details--channel">{props.video.channel}</p>
      </div>
    </div>
  );
}
