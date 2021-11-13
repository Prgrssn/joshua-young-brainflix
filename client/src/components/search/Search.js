import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import "./search.scss";
import React from "react";

export default function Search() {
  return (
    <article className="search">
      <form className="search__form" action="/" method="get">
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
      <div className="search__avatar">
        <Avatar />
      </div>
    </article>
  );
}
