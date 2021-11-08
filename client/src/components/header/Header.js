import React from "react";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
    </header>
  );
}
