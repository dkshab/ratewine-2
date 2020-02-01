import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "../src/index.css";

import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import ReviewsProvider from "./providers/ReviewsProvider";

render(
  <Router>
    <UserProvider>
      <ReviewsProvider>
        <Application />
      </ReviewsProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
