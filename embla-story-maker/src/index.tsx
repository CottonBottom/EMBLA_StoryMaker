import React from "react";
import ReactDOM from "react-dom";
import DollMaker from "./DollMaker/DollMaker";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StoryMaker from "./StoryMaker/StoryMaker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <div className="top">
          <Link to="/story">Story Maker</Link>
          <Link to="/doll">Doll Maker</Link>
        </div>
      </div>
      <Route exact path="/story">
        <StoryMaker />
      </Route>
      <Route exact path="/doll">
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
