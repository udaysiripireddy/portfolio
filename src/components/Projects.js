import React from "react";
import { projects } from "../data/data";
import "./Projects.css"; // Import the CSS file

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo"
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link code"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
