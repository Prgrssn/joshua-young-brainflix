import React, { Component } from "react";
import "./HomePage.scss";
import videodata from "../../data/video-details.json";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import Main from "../../components/main/Main";

// array of videos
const videodetails = videodata;

export default class HomePage extends Component {
  state = {
    videoData: videodetails,
    heroData: videodetails[0],
  };

  changeVideo = (id) => {
    const clickedVideoId = this.state.videoData.findIndex(
      (videoData) => id === videoData.id
    );

    this.setState({
      heroData: this.state.videoData[clickedVideoId],
    });
  };

  render() {
    return (
      <main>
        <VideoPlayer
          video={this.state.videoData}
          heroVideo={this.state.heroData}
        />
        <Main
          video={this.state.videoData}
          heroVideo={this.state.heroData}
          changeVideo={this.changeVideo}
        />
      </main>
    );
  }
}
