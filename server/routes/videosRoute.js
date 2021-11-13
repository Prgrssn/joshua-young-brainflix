const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");
const { randomUUID } = require("crypto");

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
  const strippedData = videoData.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.json(strippedData);
});

router.get("/:id", (req, res) => {
  let videos = videoData;
  let videoId = req.params.id;

  const singleVideo = videos.find((video) => {
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
  const { title, description } = req.body;
  const newVideo = {
    id: randomUUID(),
    title,
    description,
    image: "/retallack.jpeg",
    channel: "JYoungMoney",
    views: "420",
    likes: "69",
    comments: [
      {
        name: "Bill Nye",
        comment: "This is absolutely radical!",
        likes: 3,
        timestamp: 1632512763000,
      },
      {
        name: "Stoked Skier Bro",
        comment: "Broooo!!! Righteous broooo!",
        likes: 0,
        timestamp: 1632496261000,
      },
    ],
  };
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

module.exports = router;
