import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Reviews from "./Reviews/Reviews";
import About from "./About";
import UserProfile from "./AuthApp/UserProfile";
import SignInAndSignUp from "./SignInAndSignUp";
import * as ROUTES from "../constants/routes";
import LandingPage from "./LandingPage";

class Application extends Component {
  state = { title: "Ratewine-2" };

  render() {
    const { title } = this.state;
    return (
      <div>
        <NavBar title={title} />

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <br />
                <Switch>
                  <Route exact path={ROUTES.HOME} component={Reviews} />
                  <Route exact path={ROUTES.LANDING} component={LandingPage} />
                  <Route exact path={ROUTES.ABOUT} component={About} />
                  <Route exact path={ROUTES.PROFILE} component={UserProfile} />
                  <Route
                    exact
                    path={ROUTES.SIGNIN}
                    component={SignInAndSignUp}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Application;
