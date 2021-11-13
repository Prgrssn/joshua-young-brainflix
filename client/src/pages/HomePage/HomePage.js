import React, { Component } from "react";
import "./HomePage.scss";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import Main from "../../components/main/Main";
import axios from "axios";

const backEndAPI = `http://localhost:8080/videos`;

export default class HomePage extends Component {
  state = {
    videoData: [],
    heroData: {},
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(backEndAPI)
      .then((res) => {
        const videos = res.data;
        this.setState({ videoData: videos });
        return axios.get(`${backEndAPI}/${videos[0].id}`);
      })
      .then((res) => {
        const video = res.data;
        this.setState({ heroData: video, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    const newVideoID = this.props.match.params.id;

    if (prevProps.match.params.id !== newVideoID) {
      axios
        .get(`${backEndAPI}/${newVideoID}`)
        .then((res) => {
          const newVideo = res.data;
          this.setState({ heroData: newVideo });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <>
          <VideoPlayer
            video={this.state.videoData}
            heroVideo={this.state.heroData}
          />
          <Main
            video={this.state.videoData}
            heroVideo={this.state.heroData}
            changeVideo={this.changeVideo}
            handleSubmit={this.handleSubmit}
          />
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}
