import React from "react";
//import withAuthorization from "./Session/withAuthorization";
import "./About.css";

const About = () => (
  <div className="about-page">
    <h1 className="title is-1">About</h1>
    <hr />
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde vitae
      earum hic eligendi est repudiandae reprehenderit nulla obcaecati quidem
      beatae voluptates voluptas mollitia, magnam ad nisi dolores? Deleniti,
      totam?
    </p>
    <div className="about-page-hero">
      <div className="about-page-hero__inner">About Us</div>
    </div>
  </div>
);

//const condition = user => user != null;

export default About;
