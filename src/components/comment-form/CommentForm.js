import React from "react";
import Avatar from "../avatar/Avatar";
import commentIcon from "../../assets/icons/add_comment.svg";
import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <div className="comment-add">
      <Avatar className="comment-add__avatar" />
      <form className="comment-add__form">
        <div className="comment-add__form--input-cont">
          <label className="comment-add__form--lable" for="textarea">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comment-add__form--comment"
            name="textarea"
            placeholder="Add a new comment"
          />
        </div>
        <button
          className="comment-add__form--button"
          type="submit"
          value="submit"
        >
          <img
            className="comment-add__form--button-icon"
            src={commentIcon}
            alt="comment icon"
          />
          COMMENT
        </button>
      </form>
    </div>
  );
}
