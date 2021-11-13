import React from "react";
import "./CommentList.scss";
import CommentCard from "../Comment-card/CommentCard";
import { v4 as uuidv4 } from "uuid";

export default function CommentList(props) {
  return (
    <section className="comment-section">
      {props.heroVideo.comments
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .map((comment) => {
          return <CommentCard key={uuidv4()} comment={comment} />;
        })}
    </section>
  );
}
