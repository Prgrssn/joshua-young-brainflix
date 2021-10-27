import logo from "../../assets/logo/BrainFlix-logo.svg";
import "./Logo.scss";

export default function Logo() {
  return (
    <div>
      <img className="logo" src={logo} alt={logo} />
    </div>
  );
}
