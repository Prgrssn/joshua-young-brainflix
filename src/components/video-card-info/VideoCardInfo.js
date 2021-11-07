import React from "react";
import "./VideoCardInfo.scss";

export default function VideoCardInfo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.channel}</h4>
    </div>
  );
}
