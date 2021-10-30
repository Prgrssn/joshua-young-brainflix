import React from "react";
import "./VideoDetails.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

export default function HeroVideoDetails({ video }) {
  const formattedDate = Intl.DateTimeFormat("EN-us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(video.timestamp);

  return (
    <section className="hero-detail">
      <h1 className="hero-detail__vid-title">{video.title}</h1>
      <div className="hero-detail__vid-aux-deet-container">
        <h4 className="hero-detail__vid-aux-deet-container__channel">
          {video.channel}
        </h4>
        <h5 className="hero-detail__vid-aux-deet-container__date">
          {formattedDate}
        </h5>
      </div>
      <div className="hero-detail__soc-container">
        <div className="hero-detail__soc-container--view-container">
          <img
            className="soc-container__view-container--view-icon"
            src={views}
            alt="view icon"
          />
          <p className="soc-container__view-container--views">{video.views}</p>
        </div>
        <div className="soc-container__likes-container">
          <img
            className="soc-container__likes-container--likes-icon"
            src={likes}
            alt="like icon"
          />
          <p className="soc-container__likes-container--likes">{video.likes}</p>
        </div>
      </div>
      <div className="hero-detail__des-container">
        <p className="hero-detail__des-container--des">{video.description}</p>
        <p className="hero-detail__des-container--num-comments">
          {video.comments.length} Comments
        </p>
      </div>
    </section>
  );
}
