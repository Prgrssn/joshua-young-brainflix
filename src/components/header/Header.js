import React from "react";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import uploadIcon from "../../assets/icons/upload.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
      <button className="header__button">
        <img class="header_button--icon" src={uploadIcon} /> UPLOAD
      </button>
    </header>
  );
}
