import React, { Component } from "react";
import "./HomePage.scss";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import Main from "../../components/main/Main";
import axios from "axios";

const videoListAPI = `https://project-2-api.herokuapp.com/videos`;
const APIKey = "?api_key=02e4d4cc-df22-4061-b063-e1c63073a3fa";

export default class HomePage extends Component {
  state = {
    videoData: [],
    heroData: {},
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(`${videoListAPI}${APIKey}`)
      .then((res) => {
        const videos = res.data;
        this.setState({ videoData: videos });
        return axios
          .get(`${videoListAPI}/${videos[0].id}/${APIKey}`)
          .then((res) => {
            const video = res.data;
            this.setState({ heroData: video, isLoading: false });
          });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const videoID = this.state.heroData.id;

    axios
      .post(`${videoListAPI}/${videoID}/comments/${APIKey}`, {
        name: "JYoungMoneyMillionaire" || null,
        comment: event.target.comment.value || null,
      })
      .then((res) => {
        console.log(res);
        return axios.get(`${videoListAPI}/${videoID}/${APIKey}`).then((res) => {
          const video = res.data;
          this.setState({ heroData: video });
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    const newVideoID = this.props.match.params.id;

    if (prevProps.match.params.id !== newVideoID) {
      axios
        .get(`${videoListAPI}/${newVideoID}/${APIKey}`)
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