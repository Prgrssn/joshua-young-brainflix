import React from "react";
import "./CommentList.scss";
import CommentCard from "../comment-card/CommentCard";

export default function CommentList(props) {
  return (
    <section className="comment-list-section">
      {props.comment.map((comments) => {
        return <CommentCard key={comments.comments.name} />;
      })}
    </section>
  );
}
