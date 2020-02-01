import React from "react";
//import wine1 from "../../img/wine1.jpg";

//import "./home.css";

const Home = () => (
  <div>
    <div className="hero">
      <div className="hero__inner">
        <h2>Team collaboration done right</h2>
        <a href="/reviews" className="button button--cta">
          Reviews
        </a>
      </div>
    </div>

    <div className="home-container">
      <div className="tile-row">
        <div className="tile">
          <h4>Work together, even if you're apart</h4>
          <p>
            Organize your team conversations into threads. Collaborate together
            on documents in real-time. Use face-to-face{" "}
            <a href="/features/video-calling">video calls</a> when typing just
            won't do.
          </p>
          <a href="/collaboration" className="button">
            Read more
          </a>
        </div>
        <div className="tile">
          <h4>Take it with you</h4>
          <p>
            Ink is available on a wide array of devices, so you can work from
            anywhere:
          </p>
          <ul className="tag-list">
            <li>Web</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Windows Phone</li>
          </ul>
          <a href="/supported-devices" className="button">
            Read more
          </a>
        </div>
        <div className="tile">
          <h4>Priced right</h4>
          <p>
            Whether you work on a team of three or a three hundred, you'll find
            our tiered pricing reasonable at every level.
          </p>
          <a href="/pricing" className="button">
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
