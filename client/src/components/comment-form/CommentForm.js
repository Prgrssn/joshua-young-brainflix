import React from "react";
import Avatar from "../avatar/Avatar";
import "./CommentForm.scss";

export default function CommentForm({ handleSubmit }) {
  return (
    <article className="comment-add">
      <div className="comment-add__avatar">
        <Avatar />
      </div>
      <form className="comment-add__form" onSubmit={handleSubmit}>
        <div className="comment-add__form--input-cont">
          <label className="comment-add__form--lable">
            JOIN THE CONVERSATION
          </label>
          <input
            className="comment-add__form--comment"
            name="comment"
            placeholder="Add a new comment"
          />
        </div>
        <button className="comment-add__form--button" type="submit">
          COMMENT
        </button>
      </form>
    </article>
  );
}
