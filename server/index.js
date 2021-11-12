const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = 8080;
const videosRoute = require("./routes/videosRoute");

app.use(cors());
app.use(express.json());

app.use("/videos", videosRoute);

app.listen(PORT, () => {
  console.log("Express server running on port 8080");
});
