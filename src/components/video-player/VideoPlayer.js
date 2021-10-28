import React from "react";
import "./Video.scss";

export default VideoPlayer(props) {
    return (
            <video className="video-player">
            <source src={props.video} type="stream"/>
            </video>
    );
}
