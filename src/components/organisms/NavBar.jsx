import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { signOut } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";
import * as ROUTES from "../../constants/routes";

import "./navbar.css";

const NavBar = props => {
  const user = useContext(UserContext);
  const title = props.title;
  //console.log(title);
  return user ? <NavBarAuth title={title} /> : <NavBarNonAuth title={title} />;
};

const NavBarAuth = props => (
  <nav className="nav-container">
    <div className="nav-container__inner">
      <Link to={ROUTES.HOME} className="home-link">
        {props.title}
      </Link>
      <ul className="top-nav">
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>{" "}
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>{" "}
        </li>
        <li className="top-nav__featured">
          <Link to={ROUTES.SIGNIN}>Sign In</Link>{" "}
        </li>
        <li>
          <button onClick={signOut} className="button">
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

const NavBarNonAuth = props => (
  <nav className="nav-container">
    <div className="nav-container__inner">
      <Link to={ROUTES.HOME} className="home-link">
        {props.title}
      </Link>
      <ul className="top-nav">
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>{" "}
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>{" "}
        </li>
        <li className="top-nav__featured">
          <Link to={ROUTES.SIGNIN}>Sign In</Link>{" "}
        </li>
        <li>
          <Link to={ROUTES.SIGNIN}>Sign Out</Link>{" "}
        </li>
      </ul>
    </div>
  </nav>
);

// const NavBarAuth = props => (
//   <div className="site-header">
//     <div className="site-header-section">
//       <Link to={ROUTES.HOME}>
//         <h3>{props.title}</h3>
//       </Link>
//       <Link to={ROUTES.REVIEWS} className="site-header-item site-header-button">
//         Reviews
//       </Link>
//     </div>
//     <div className="site-header-section">
//       <Link to={ROUTES.ACCOUNT} className="site-header-item">
//         <span className="icon">
//           <i className="fas fa-user"></i>
//         </span>
//       </Link>

//       <div
//         onClick={signOut}
//         className="site-header-item site-header-button is-selected"
//       >
//         Log out
//       </div>
//     </div>
//   </div>
// );

// const NavBarNonAuth = props => (
//   <div className="site-header">
//     <div className="site-header-section">
//       <Link to={ROUTES.HOME}>
//         <h3>{props.title}</h3>
//       </Link>
//       <Link to={ROUTES.ABOUT} className="site-header-item site-header-button">
//         About
//       </Link>
//     </div>
//     <div className="site-header-section ">
//       <Link to={ROUTES.SIGNIN} className="site-header-item site-header-button">
//         Sign In
//       </Link>
//     </div>
//   </div>
// );

export default NavBar;
