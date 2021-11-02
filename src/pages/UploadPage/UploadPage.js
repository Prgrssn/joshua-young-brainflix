import React from "react";
import "./UploadPage.scss";
import photo from "../../assets/images/bless.jpeg";

function UploadPage() {
  return (
    <div className="upload-section">
      <h1 className="upload-section__title">Upload Video</h1>
      <form className="upload-form">
        <div className="upload-form__video">
          <label className="upload-form__lable" htmlFor="photo">
            VIDEO THUMBNAIL
          </label>
          <div className="upload-form__video--img-cont">
            <img className="upload-form__video--img" src={photo} alt="relief" />
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
      <button className="upload-section__upload-button">PUBLISH</button>
      <button className="upload-section__cancel-button">CANCEL</button>
    </div>
  );
}

export default UploadPage;
