import VideoCardInfo from "./video-card-info/VideoCardInfo";
import "./VideoCard.scss";

export default function VideoCard(props) {
  return (
    <div>
      <img
        className="video-card__thumbnail"
        src={props.image}
        alt="current video thumbnail"
      ></img>
      <VideoCardInfo />
    </div>
  );
}
