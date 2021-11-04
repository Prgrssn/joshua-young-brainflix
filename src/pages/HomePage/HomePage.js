import React, { Component } from "react";
import "./HomePage.scss";
import videodata from "../../data/video-details.json";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import Main from "../../components/main/Main";
import axios from "axios";
// import axios from "axios";

// array of videos
const videodetails = videodata;

const videoListAPI =
  "https://project-2-api.herokuapp.com/videos?api_key=02e4d4cc-df22-4061-b063-e1c63073a3fa";

export default class HomePage extends Component {
  state = {
    videoData: [],
    heroData: videodetails[0],
    isLoading: true,
  };

  componentDidMount() {
    console.log("comp did mount");

    axios
      .get(videoListAPI)
      .then((res) => {
        console.log(res.data);
        this.setState({ videoData: res.data });
      })
      .catch((err) => console.log(err));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevState);
  //   // console.log(prevProps);
  //   // console.log(this.props, "I'm current props");
  //   // axios call
  // }

  changeVideo = (id) => {
    const clickedVideoId = this.state.videoData.findIndex(
      (videoData) => id === videoData.id
    );

    this.setState({
      heroData: this.state.videoData[clickedVideoId],
    });
  };

  render() {
    console.log("inside render");
    if (!this.state.heroData) {
      return <div>Loading...</div>;
    }
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
