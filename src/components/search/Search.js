import Avatar from "../avatar/Avatar";
import { Link } from "react-router-dom";
import "./Search.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import React from "react";

export default function Search() {
  return (
    <header className="search">
      <form action="/" method="get">
        <input
          className="search__bar"
          id="search__bar"
          type="text"
          placeholder="Search"
        />
        <button className="search__button">
          <Link to="/upload">UPLOAD</Link>
        </button>
      </form>

      <Avatar className="search__avatar" />
    </header>
  );
}
