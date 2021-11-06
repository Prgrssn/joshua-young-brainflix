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
        <div className="comment-container__avatar--img" />
      </div>
      <div className="comment-container__comment-info">
        <div className="comment-container__comment-info--nd-contain">
          <h4 className="comment-container__comment-info--name">
            {comment.name}
          </h4>
          <h5 className="comment-container__comment-info--timestamp">
            {formattedDate}
          </h5>
        </div>
        <p className="comment-container__comment">{comment.comment}</p>
      </div>
    </article>
  );
}
