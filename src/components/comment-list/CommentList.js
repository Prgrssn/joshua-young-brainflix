import React from "react";
import "./CommentList.scss";
import "../comment-card/CommentCard";
import CommentCard from "../comment-card/CommentCard";

export default function CommentList(props) {
  return (
    <section className="comment-section">
      {props.heroVideo.comments.map((comment) => {
        return <CommentCard key={comment.name} comment={comment} />;
      })}
      ;
    </section>
  );
}
