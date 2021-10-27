import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import videos from "./data/video-details.json";
import NextVideo from "./components/nextvideos/NextVideo";
import { render } from "sass";

function App() {
  return (
    <div className="App">
      <Header />
      <NextVideo />
    </div>
  );
}

export default App;
