import VideoCardInfo from "./video-card-info/VideoCardInfo";
import "./VideoCard.scss";

export default function VideoCard(props) {
  console.log(props);
  return (
    <article className="video-card">
    <div className="video-card__img-container">
      <img
        className="video-card__img-container--img"
        src={props.video.image}
        alt={props.video.title}
      ></img>
      </div>
      <div className="video-card__details">
        <h3 className="video-card__title">{props.video.title}</h3>
        <h4 className="video-card__channel">{props.video.channel}</h4>
      </div>
    </div>
    </article>
  );
}
