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
      <h1 className="hero-detail__title">{video.title}</h1>
      <div className="hero-detail__container">
        <div className="hero-detail__container--aux">
          <h4 className="hero-detail__channel">By {video.channel}</h4>
          <h5 className="hero-detail__date">{formattedDate}</h5>
        </div>
        <div className="hero-detail__container--soc">
          <div className="hero-detail__view-container">
            <img
              className="hero-detail__view-container--view-icon"
              src={views}
              alt="view icon"
            />
            <p className="hero-detail__view-container--views">{video.views}</p>
          </div>
          <div className="hero-detail__likes-container">
            <img
              className="hero-detail__likes-container--likes-icon"
              src={likes}
              alt="like icon"
            />
            <p className="hero-detail__likes-container--likes">{video.likes}</p>
          </div>
        </div>
      </div>
      <div className="hero-detail__des-container">
        <p className="hero-detail__des-container--des">{video.description}</p>
        {/* <p className="hero-detail__des-container--num-comments">
          {video.comments.length} Comments
        </p> */}
      </div>
    </section>
  );
}
