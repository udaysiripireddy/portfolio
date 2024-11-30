import React from "react";
import { personalInfo } from "../data/data.js";
import "./About.css"; // Import the CSS file
const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
         
        <div className="personal-info">
          <h3>{personalInfo.name}</h3>
          <p className="title">{personalInfo.title}</p>
          <p className="description">{personalInfo.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
