import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Avatar.scss";
import React from "react";

export default function Avatar() {
  return (
    <div>
      <img className="avatar" src={avatar} alt="Mohan Muruge" />
    </div>
  );
}
