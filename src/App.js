import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import videodata from "./data/video-details.json";
import VideoList from "./components/nextvideos/VideoList";
import VideoPlayer from "./components/video-player/VideoPlayer";
import CommentForm from "./components/comment-form/CommentForm";
import CommentList from "./components/comment-list/CommentList";
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

  render() {
    console.log(this);
    return (
      <div className="App">
        <Header />
        <VideoPlayer
          video={this.state.videoData}
          heroVideo={this.state.heroData}
        />
        <CommentForm />
        <CommentList heroVideo={this.state.heroData} />
        <VideoList
          video={this.state.videoData}
          heroVideo={this.state.heroData}
        />
      </div>
    );
  }
}
