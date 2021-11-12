const express = require("express");
const router = express.Router();
const app = express();
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

let videoData = [];

app.use("/public", express.static(path.join(__dirname, "/public")));

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

// router.post("/:id/comments", (req, res) => {
//   let videos = videoData;
//   let videoId = req.params.id;

//   const singleVideo = videos.find((video) => {
//     return video.id === videoId;
//   });

//   const { name, comment } = req.body;
//   const newComment = { id: randomUUID(), name, comment };

//   if (newComment) {
//     videos[indexOf(singleVideo)];
//     console.log(videos);
//   } else {
//     console.log((err) => err);
//   }

//   //   videos[indexOf(singleVideo)]

//   //   videos[indexOf(singleVideo)].comments.push(newComment);
//   //   fs.writeFile("./data/video-details.json", JSON.stringify(videos), (err) => {
//   //     if (err) {
//   //       console.log(err);
//   //       return;
//   //     } else {
//   //       console.log("Successfully added new comment");
//   //     }
//   //   });

//   //   if (newComment) {
//   //     res.status(201).json(newComment);
//   //   } else {
//   //     res.status(500).send("Comment was not added");
//   //   }
// });

module.exports = router;
