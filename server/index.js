const express = require("express");
const app = express();
const fs = require("fs");

let videos = [];

const getVideoData = () => {
  fs.readFile("./data/videodetails.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    videos = JSON.parse(data);
    console.log(videos);
  });
};

getVideoData();

app.listen(8080, () => {
  console.log("Express server running on port 8080");
});
