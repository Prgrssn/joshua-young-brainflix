import React from "react";
import "./VideoDetails.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

export default function VideoDetails(props) {
  return (
    <article className="video-details">
      <div className="detail-container">
        <h2 className="detail-container__channel">{props.channel}</h2>
        <h4 className="detail-container__date">{props.timestamp}</h4>
      </div>
      <div className="vl-container">
        <div className="vl-container__view-container">
          <img className="vl-container__view-container--view-icon">{views}</img>
          <p className="vl-container__view-container--views">{props.views}</p>
        </div>
        <div className="vl-container__likes-container">
          <img className="vl-container__likes-container--likes-icon">
            {likes}
          </img>
          <p className="vl-container__likes-container--likes">{props.likes}</p>
        </div>
      </div>
    </article>
  );
}
