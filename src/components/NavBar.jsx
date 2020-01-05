import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { signOut } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import * as ROUTES from "../constants/routes";

const NavBar = props => {
  const user = useContext(UserContext);
  //console.log(user);
  return user ? <NavBarAuth /> : <NavBarNonAuth />;
};

const NavBarAuth = () => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <section className="container">
      <div className="navbar-brand">
        <strong className="navbar-item">"Rate"</strong>
        <span
          className="nav-toggle navbar-burger"
          onClick={() => {
            let toggle = document.querySelector(".nav-toggle");
            let menu = document.querySelector(".navbar-menu");
            toggle.classList.toggle("is-active");
            menu.classList.toggle("is-active");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to={ROUTES.HOME} className="navbar-item">
            Home
          </Link>
          <Link to={ROUTES.LANDING} className="navbar-item">
            Landing
          </Link>
          <Link to={ROUTES.ABOUT} className="navbar-item">
            About
          </Link>
          <Link to={ROUTES.PROFILE} className="navbar-item">
            User Status
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-warning" onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </section>
  </nav>
);

const NavBarNonAuth = () => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <section className="container">
      <div className="navbar-brand">
        <strong className="navbar-item">"Rate"</strong>
        <span
          className="nav-toggle navbar-burger"
          onClick={() => {
            let toggle = document.querySelector(".nav-toggle");
            let menu = document.querySelector(".navbar-menu");
            toggle.classList.toggle("is-active");
            menu.classList.toggle("is-active");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to={ROUTES.LANDING} className="navbar-item">
            Landing
          </Link>
          <Link to={ROUTES.ABOUT} className="navbar-item">
            About
          </Link>
        </div>
        <div className="navbar-end">
          <Link to={ROUTES.SIGNIN} className="navbar-item">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  </nav>
);

export default NavBar;
