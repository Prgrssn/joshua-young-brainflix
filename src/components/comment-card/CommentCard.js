import React from "react";
import "./CommentCard.scss";

export default function CommentCard({ comment }) {
  const formattedDate = Intl.DateTimeFormat("EN-us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(comment.timestamp);

  return (
    <article className="comment-container">
      <div className="comment-container__avatar">
        <img className="comment-container__avatar--img" alt="user avatar" />
      </div>
      <h4 key={comment.name} className="comment-container__name">
        {comment.name}
      </h4>
      <h5 className="comment-container__timestamp">{formattedDate}</h5>
      <p className="comment-container__comment">{comment.comment}</p>
    </article>
  );
}
