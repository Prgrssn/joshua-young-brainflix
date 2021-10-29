import React from "react";
import { Avatar } from "react-native-elements";
import "./CommentCard.scss";

export default function CommentCard(props) {
  const commentArr = videodetails.map((comments) => {
    return [comments.comments];
  });

  return (
    <div className="comment-container">
      <Avatar className="comment-container__avatar" />
      <h4 className="comment-container__name">Comment Name</h4>
      <h5 className="comment-container__timestamp">Date</h5>
      <p className="comment-container__comment">Comment</p>
    </div>
  );
}
