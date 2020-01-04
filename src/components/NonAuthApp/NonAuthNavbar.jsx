import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const NonAuthNavbar = props => {
  return (
    // eslint-disable-next-line
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <section className="container">
        <div className="navbar-brand">
          <strong className="navbar-item">{props.title}</strong>
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
};

export default NonAuthNavbar;