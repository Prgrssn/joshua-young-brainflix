import React, { Component } from "react";
import "./VideoList.scss";
import VideoCard from "../video-card/VideoCard";

export default class VideoList extends Component {
  render() {
    return (
      <section className="video-list-section">
        <h2 className="video-list-section__title">Next Videos</h2>
        {this.props.video
          .filter((video) => this.props.heroData !== video)
          .map((video) => (
            <VideoCard
              key={video.title}
              video={video}
              changeVideo={this.props.changeVideo}
            />
          ))}
      </section>
    );
  }
}
