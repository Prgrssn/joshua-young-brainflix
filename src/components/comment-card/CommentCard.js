import React from "react";
import "./CommentCard.scss";

export default function CommentCard(props) {
  console.log(props);
  return (
    <article className="comment-container">
      <h4 key={props.comment.name} className="comment-container__name">
        {props.comment.name}
      </h4>
      <h5 className="comment-container__timestamp">
        {props.comment.timestamp}
      </h5>
      <p className="comment-container__comment">{props.comment.comment}</p>
    </article>
  );
}
