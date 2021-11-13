import React from "react";
import "./VideoCardInfo.scss";

export default function VideoCardInfo(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <h4>{props.channel}</h4>
    </article>
  );
}
