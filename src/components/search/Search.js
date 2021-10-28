import Avatar from "../avatar/Avatar";
import "./Search.scss";
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
      <Avatar className="search__button" />
    </div>
  );
}
