import React from "react";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <div className="comment-add">
      <Avatar className="comment-add__avatar" />
      <form className="comment-add__form">
        <label className="comment-add__form--lable">
          JOIN THE CONVERSATION
        </label>
        <textarea
          className="comment-add__form--comment"
          placeholder="Add a new comment"
        />
        <button
          className="comment-add__form--button"
          type="submit"
          value="submit"
        >
          COMMENT
        </button>
      </form>
    </div>
  );
}
