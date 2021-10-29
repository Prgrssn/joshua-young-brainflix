import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

export default function HeroVideoDetails(props) {
  return (
    <section className="hero-detail-section">
      <h1 className="hero-video__title">{props.video.title}</h1>
      <div className="detail-container">
        <h4 className="detail-container__channel">{props.video.channel}</h4>
        <h5 className="detail-container__date">{props.video.timestamp}</h5>
      </div>
      <div className="vl-container">
        <div className="vl-container__view-container">
          <img
            className="vl-container__view-container--view-icon"
            src={views}
            alt="view icon"
          />
          <p className="vl-container__view-container--views">
            {props.video.views}
          </p>
        </div>
        <div className="vl-container__likes-container">
          <img
            className="vl-container__likes-container--likes-icon"
            src={likes}
            alt="like icon"
          />
          <p className="vl-container__likes-container--likes">
            {props.video.likes}
          </p>
        </div>
      </div>
    </section>
  );
}
