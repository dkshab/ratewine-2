import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "../firebase";
import { UserContext } from "../providers/UserProvider";

const NavBar = props => {
  const user = useContext(UserContext);
  //console.log(user);
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
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/status" className="navbar-item">
              User Status
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/signin" className="navbar-item">
              Sign In
            </Link>
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
};
export default NavBar;
