import React from "react";
import Avatar from "../avatar/Avatar";
import "./CommentForm.scss";

export default function CommentForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="comment-add">
      <div className="comment-add__avatar">
        <Avatar />
      </div>
      <form className="comment-add__form">
        <div className="comment-add__form--input-cont">
          <label className="comment-add__form--lable">
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
          onClick={handleSubmit}
        >
          COMMENT
        </button>
      </form>
    </div>
  );
}
