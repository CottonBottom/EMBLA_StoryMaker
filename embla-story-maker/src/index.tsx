import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StoryMaker from "./StoryMaker/StoryMaker";
import DollMaker from "./DollMaker/DollMaker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="menu">
        <Link to="/story">Story Maker</Link>
        <Link to="/dolls">Broken Dolls Maker</Link>
      </div>
      <Route exact path="/story">
        <StoryMaker />
      </Route>
      <Route exact path="/dolls">
        <DollMaker />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
