const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const videosRoute = require("./routes/videosRoute");

app.use(cors());
app.use(express.json());

app.use("/videos", videosRoute);

app.listen(8080, () => {
  console.log("Express server running on port 8080");
});