import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./organisms/NavBar";
import Reviews from "./Reviews/Reviews";
import About from "./pages/About";
import SignInAndSignUp from "./pages/SignInAndSignUp";
import * as ROUTES from "../constants/routes";
import LandingPage from "./pages/LandingPage";
import UserProfile from "./pages/UserProfile";
import Account from "./templates/Account";
import ReviewPage from "./Reviews/ReviewPage";
import Footer from "./organisms/Footer";
import Home from "./pages/Home";
import AddReview from "./Reviews/AddReview";

class Application extends Component {
  state = { title: "Ratewine-2" };

  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <NavBar title={title} />
        <div className="content">
          <br />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.REVIEWS} component={Reviews} />
            <Route exact path={ROUTES.ADDREVIEW} component={AddReview} />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.ACCOUNT} component={Account} />
            <Route exact path={ROUTES.PROFILE} component={UserProfile} />
            <Route exact path={ROUTES.REVIEWPAGE} component={ReviewPage} />
            <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
          </Switch>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default Application;
