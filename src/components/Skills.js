import React from "react";
import { skills } from "../data/data.js";
import "./Skills.css"; // Import the CSS file

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
