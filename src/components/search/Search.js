import Avatar from "../avatar/Avatar";
import "./Search.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import React from "react";

export default function Search() {
  return (
    <div className="search">
      <form action="/" method="get">
        <input
          className="search__bar"
          id="search__bar"
          type="text"
          placeholder="Search"
        />
      </form>
      <button className="search__button">
        <img
          className="search__button--icon"
          src={uploadIcon}
          alt="upload icon"
        />
        UPLOAD
      </button>
      <Avatar className="search__avatar" />
    </div>
  );
}
