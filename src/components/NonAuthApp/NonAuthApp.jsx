import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NonAuthNavbar from "./NonAuthNavbar";
import LandingPage from "../LandingPage";
import About from "../About";

import * as ROUTES from "../../constants/routes";
import SignInAndSignUp from "../SignInAndSignUp";

class NonAuthApp extends Component {
  state = { title: "Ratewine-2 Non Auth" };
  render() {
    const { title } = this.state;
    return (
      <div>
        <NonAuthNavbar title={title} />

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <br />
                <Switch>
                  <Route exact path={ROUTES.LANDING} component={LandingPage} />
                  <Route exact path={ROUTES.ABOUT} component={About} />
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

export default NonAuthApp;
