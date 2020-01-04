import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AuthNavBar from "./AuthNavBar";
import Reviews from "../Reviews/Reviews";
import About from "../About";
import SignInAndSignUp from "../SignInAndSignUp";

import * as ROUTES from "../../constants/routes";
import UserProfile from "./UserProfile";

class AuthApp extends Component {
  state = { title: "Ratewine-2 Auth" };
  render() {
    const { title } = this.state;

    return (
      <div>
        <AuthNavBar title={title} />

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <br />
                <Switch>
                  <Route exact path={ROUTES.HOME} component={Reviews} />
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

export default AuthApp;
