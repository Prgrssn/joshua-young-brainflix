import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import videodata from "./data/video-details.json";
import VideoList from "./components/nextvideos/VideoList";
import Hero from "./components/hero/Hero";

const videodetails = videodata;

// array returning comments within comments
const commentArr = videodetails.map((comments) => {
  return [comments.comments];
});

console.log(commentArr);

export default class App extends Component {
  state = {
    videos: videodetails,
    comments: commentArr,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <VideoList video={this.state.videos} />
      </div>
    );
  }
}
