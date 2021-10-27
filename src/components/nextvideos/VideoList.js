import { Component } from "react";
import "./VideoList.scss";
import VideoCard from "./video-card/VideoCard";

export default function VideoList(props) {
  return (
    <article>
      {props.video.map((video) => {
        return <VideoCard key={video.title} video={video} />;
      })}
    </article>
  );
}
