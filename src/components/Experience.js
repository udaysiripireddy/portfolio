import React from "react";
import "./Experience.css"; // Import the CSS file

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Numetry Technologies",
    duration: "July 2024 - October 2024 (4 months)",
    description: `
      Building<strong> authentication and authorization </strong>for web-based applications.
      Frontend Development: Experience in building responsive and interactive user interfaces using<strong> React, React Router, and Redux </strong>for state management.
      Backend Development: Strong understanding of<strong> RESTful API design using Express.js and Node.js </strong>to handle server-side logic and routing.
      Database Management: Proficient in <strong> MongoDB </strong> for handling database operations, including <strong>data modeling, indexing, and schema design</strong>.
      Authentication & Authorization: Implementing secure authentication with <strong>JWT, OAuth, and Firebase</strong>.
      Version Control: Expertise in<strong> Git and GitHub </strong>for source code management and collaboration on development projects.
      Testing & Debugging: Experience in <strong>unit testing, integration testing,</strong> and debugging using tools like <strong>Jest and Postman</strong>.
      Responsive Design: Strong knowledge of CSS frameworks like <strong> Bootstrap and Tailwind CSS </strong>for building mobile-first, responsive layouts.
      Deployment & Hosting: Deploying web applications on cloud platforms like <strong>Vercel, AWS, and Netlify,</strong> along with CI/CD pipelines.
    `,
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.role}</h3>
          <h4>{exp.company}</h4>
          <p className="duration">{exp.duration}</p>
          <div className="description">
            {exp.description.split("\n").map((line, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: line.trim() }} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
