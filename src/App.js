import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import videodata from "./data/video-details.json";
import VideoList from "./components/nextvideos/VideoList";

const videodetails = videodata;

export default class App extends Component {
  state = {
    videos: videodetails,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <VideoList video={this.state.videos} />
      </div>
    );
  }
}
