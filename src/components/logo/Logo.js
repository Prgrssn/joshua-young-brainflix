import logo from "../../assets/logo/BrainFlix-logo.svg";
import "./Logo.scss";
import React from "react";

export default function Logo() {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt={logo} />
    </div>
  );
}
