import React from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
      <Button />
    </div>
  );
}
