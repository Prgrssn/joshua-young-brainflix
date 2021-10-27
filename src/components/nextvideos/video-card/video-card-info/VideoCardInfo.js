import "./VideoCardInfo.scss";

// const videoArr = (props) => {
//   const videoTitle = {props.title}
//   const
// }

export default function VideoCardInfo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.channel}</h4>
    </div>
  );
}
