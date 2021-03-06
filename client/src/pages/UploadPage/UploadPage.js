import React from "react";
import "./UploadPage.scss";
import photo from "../../assets/images/retallack.jpeg";
import axios from "axios";

const backEndAPI = `http://localhost:8080/videos`;

export default function UploadPage({ history }) {
  const handleSubmit = (event) => {
    if (event.target.title.value && event.target.description.value) {
      const newVideo = {
        title: event.target.title.value,
        description: event.target.description.value,
      };

      axios
        .post(backEndAPI, newVideo)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      alert("Video Published!");
      history.push("/");
    } else {
      event.preventDefault();
      alert("Please select a video to upload");
    }
  };

  const handleCancel = () => {
    alert("Video Upload Canceled!");
    history.push("/");
  };

  return (
    <section className="upload-section">
      <hr className="upload-section__hr" />
      <h1 className="upload-section__title">Upload Video</h1>
      <form id="upload-form" className="upload-form" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          onClick={handleCancel}
          className="upload-form__button-cont--cancel-button"
        >
          CANCEL
        </button>
        <button
          form="upload-form"
          type="submit"
          className="upload-form__button-cont--publish-button"
        >
          PUBLISH
        </button>
      </div>
    </section>
  );
}
