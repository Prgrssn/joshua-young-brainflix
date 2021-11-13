import React from "react";
import Logo from "../Logo/Logo.js";
import Search from "../Search/Search";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
    </header>
  );
}
