import React from "react";
// import VideoCardInfo from "../video-card-info/VideoCardInfo";
import "./VideoCard.scss";

export default function VideoCard(props) {
  console.log(props);
  return (
    <article className="video-card">
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
    </article>
  );
}
