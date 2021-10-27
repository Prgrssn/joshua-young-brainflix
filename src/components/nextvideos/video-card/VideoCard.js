import VideoCardInfo from "./video-card-info/VideoCardInfo";
import "./VideoCard.scss";

export default function VideoCard(props) {
  console.log(props);
  return (
    <div>
      <img
        className="video-card__thumbnail"
        src={props.video.image}
        alt={props.video.title}
      ></img>
      <div>
        <h3>{props.video.title}</h3>
        <h4>{props.video.channel}</h4>
      </div>
    </div>
  );
}
