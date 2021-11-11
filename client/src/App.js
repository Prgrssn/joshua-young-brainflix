import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:id" component={HomePage} />
        {/* <Route path="/upload" component={UploadPage} /> */}
        <Route
          path="/upload"
          render={(props) => {
            return <UploadPage {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
