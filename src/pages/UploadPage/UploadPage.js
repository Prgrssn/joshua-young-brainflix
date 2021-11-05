import React from "react";
import "./UploadPage.scss";
import photo from "../../assets/images/retallack.jpeg";

import { Link } from "react-router-dom";

export default function UploadPage() {
  const handleSubmit = () => {
    alert("Video Published!");
  };

  return (
    <section className="upload-section">
      <hr className="upload-section__hr" />
      <h1 className="upload-section__title">Upload Video</h1>
      <form id="upload-form" className="upload-form">
        <div className="upload-form__video">
          <label className="upload-form__lable" htmlFor="photo">
            VIDEO THUMBNAIL
          </label>
          <div className="upload-form__video--img-cont">
            <img
              className="upload-form__video--img"
              src={photo}
              alt="josh ski touring"
            />
          </div>
        </div>
        <div className="upload-form__form">
          <label className="upload-form__lable" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload-form__input-title"
            name="title"
            placeholder="Add a title to your video"
          />
          <label className="upload-form__lable" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="upload-form__input-des"
            name="description"
            placeholder="Add a description to your video"
          />
        </div>
      </form>
      <div className="upload-form__button-cont">
        <button className="upload-form__button-cont--cancel-button">
          CANCEL
        </button>

        <button
          form="upload-form"
          type="submit"
          onClick={handleSubmit}
          className="upload-form__button-cont--publish-button"
        >
          <Link to="/">PUBLISH</Link>
        </button>
      </div>
    </section>
  );
}
