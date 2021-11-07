import logo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import "./Logo.scss";
import React from "react";

export default function Logo() {
  return (
    <Link to="/" className="logo-container">
      <img className="logo" src={logo} alt={logo} />
    </Link>
  );
}
