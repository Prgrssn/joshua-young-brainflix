import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Avatar.scss";

export default function Avatar() {
  return (
    <div>
      <img className="avatar" src={avatar} alt="Mohan Muruge" />
    </div>
  );
}
