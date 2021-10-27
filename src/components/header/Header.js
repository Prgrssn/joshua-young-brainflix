import Button from "../button/Button";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo />
      <Search />
      <Button />
    </div>
  );
}
