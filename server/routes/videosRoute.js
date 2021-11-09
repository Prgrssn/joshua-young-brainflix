const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");

let videoData = [];

const getVideoData = () => {
  fs.readFile("./data/video-details.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    videoData = JSON.parse(data);
  });
};

getVideoData();

router.get("/", (req, res) => {
  res.json(videoData);
});

router.get("/:id", (req, res) => {
  let videoId = req.params.id;

  const singleVideo = videoData.find((video) => {
    return video.id === videoId;
  });

  if (singleVideo) {
    res.json(singleVideo);
  } else {
    res.status(404).send("This video does not exist");
  }
});

router.post("/", (req, res) => {
  let videos = videoData;
  const { id, title, image, description } = req.body;
  const newVideo = { id, title, image, description };
  console.log(req);
  videos.push(newVideo);
  fs.writeFile("./data/video-details.json", JSON.stringify(videos), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully created new video");
    }
  });

  if (newVideo) {
    res.status(201).json(newVideo);
  } else {
    res.status(500).send("Video not uploaded");
  }
});

router.get("/:id/comments", (req, res) => {
  console.log(res);
  let videoId = req.params.id;

  const singleVideo = videoData.find((video) => {
    return video.id === videoId;
  });

  if (singleVideo) {
    res.json(singleVideo);
  } else {
    res.status(404).send("This video does not exist");
  }
});

module.exports = router;
