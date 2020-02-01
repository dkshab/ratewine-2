import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer-section">
        <Link to={ROUTES.HOME} className="site-footer-item site-footer-button">
          Home
        </Link>
        <Link to={ROUTES.ABOUT} className="site-footer-item site-footer-button">
          About
        </Link>
        <Link to={ROUTES.ABOUT} className="site-footer-item site-footer-button">
          Terms of Use
        </Link>
        <Link to={ROUTES.ABOUT} className="site-footer-item site-footer-button">
          Privacy Policy
        </Link>
      </div>
      <div className="site-footer-section">
        <Link
          to={ROUTES.ABOUT}
          className="site-footer-social-media site-footer-button"
        >
          <span className="icon">
            <i className="fab fa-twitter"></i>{" "}
          </span>
        </Link>
        <Link
          to={ROUTES.ABOUT}
          className="site-footer-social-media site-footer-button"
        >
          <span className="icon">
            <i className="fab fa-instagram"></i>{" "}
          </span>
        </Link>
        <Link
          to={ROUTES.ABOUT}
          className="site-footer-social-media site-footer-button"
        >
          <span className="icon">
            <i className="fab fa-facebook"></i>
          </span>
        </Link>
      </div>
    </div>
  </div>
);

// const Footer = () => (
//   <footer className="footer">
//     <nav className="navbar" role="navigation" aria-label="main navigation">
//       <section className="container">
//         <div className="navbar-brand">
//           <strong className="navbar-item">"Rate"</strong>
//           <span
//             className="footer-toggle navbar-burger"
//             onClick={() => {
//               let toggleFooter = document.querySelector(".footer-toggle");
//               let menuFooter = document.querySelector(".footer-menu");
//               toggleFooter.classList.toggle("is-active");
//               menuFooter.classList.toggle("is-active");
//             }}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </span>
//         </div>
//         <div className="navbar-menu footer-menu">
//           <div className="navbar-start">
//             <Link to={ROUTES.HOME} className="navbar-item">
//               Home
//             </Link>
//             <Link to={ROUTES.ABOUT} className="navbar-item">
//               About
//             </Link>
//             <Link to={ROUTES.HOME} className="navbar-item">
//               Terms of Use
//             </Link>
//             <Link to={ROUTES.ABOUT} className="navbar-item">
//               Privacy Policy
//             </Link>
//             <Link to={ROUTES.ABOUT} className="navbar-item">
//               <span className="icon">
//                 <i className="fab fa-twitter"></i>
//               </span>
//             </Link>
//             <Link to={ROUTES.ABOUT} className="navbar-item">
//               <span className="icon">
//                 <i className="fab fa-instagram"></i>
//               </span>
//             </Link>
//             <Link to={ROUTES.ABOUT} className="navbar-item">
//               <span className="icon">
//                 <i className="fab fa-facebook"></i>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </nav>
//   </footer>
// );
export default Footer;
