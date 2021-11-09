const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded());

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

app.get("/videos", (req, res) => {
  res.json(videoData);
});

app.get("/videos/:id", (req, res) => {
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

app.post("/videos", (res, req) => {
  console.log(req.body);

  let videos = videoData;
  const { id, title, image, description } = req.body;
  const newVideo = { id, title, image, description };
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

app.listen(8080, () => {
  console.log("Express server running on port 8080");
});
