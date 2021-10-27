import "../avatar/Avatar";
import Avatar from "../avatar/Avatar";
import Logo from "../logo/Logo";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo />
      <Avatar />
    </div>
  );
}
