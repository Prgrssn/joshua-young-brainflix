import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import videodata from "./data/video-details.json";
import VideoList from "./components/nextvideos/VideoList";
import VideoPlayer from "./components/video-player/VideoPlayer";
import CommentForm from "./components/comment-form/CommentForm";
import CommentList from "./components/comment-list/CommentList";
import VideoDetails from "./components/hero-video-details/VideoDetails";
// import Hero from "./components/hero/Hero";

// array of videos
const videodetails = videodata;

// array returning comments within comments
const commentArr = videodetails.map((comments) => {
  return [comments.comments];
});

console.log(commentArr);

export default class App extends Component {
  state = {
    videoData: videodetails,
    heroData: videodetails[0],
  };

  changeVideo = (id) => {
    console.log("Id clicked: ", id);
    const clickedVideo = this.state.videoData.findIndex(
      (videoData) => id === videoData.id
    );
    this.setState({
      heroData: this.state.videoData[clickedVideo],
    });

    // this.setState({
    //   heroData:
    // })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlayer
          video={this.state.videoData}
          heroVideo={this.state.heroData}
        />
        <VideoDetails video={this.state.heroData} />
        <CommentForm />
        <CommentList heroVideo={this.state.heroData} />
        <VideoList
          video={this.state.videoData}
          heroVideo={this.state.heroData}
          changeVideo={this.changeVideo}
        />
      </div>
    );
  }
}
