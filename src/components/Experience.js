import React from "react";
import "./Experience.css"; // Import the CSS file

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Numetry Technologies",
    duration: "July 2024 - October 2024 (4 months)",
    description: `
      <strong>Numetry Technologies - Pune | Frontend Developer</strong>
       July 2024 - Oct 2024
<strong>Frontend Development:</strong> Designed and developed responsive, <strong>interactive user interfaces using React, React Router, and Redux for state management.</strong>
<Strong>Authentication & Authorization:</strong> Built secure login systems and implemented role-based access control (RBAC) <strong>using JWT and OAuth.</strong>
<strong>API Integration:</strong> Integrated third-party services such as<strong> payment gateways, social logins, </strong>and cloud storage to enhance functionality.
<strong>Projects:</strong>
<strong>Weather Monitoring Application:</strong> Created a weather app with real-time updates, 7-day forecasts, and interactive charts using OpenWeatherMap API.
<strong>E-commerce Platform:</strong> Developed a responsive e-commerce site with Stripe payments, shopping cart functionality, and SEO optimization using Next.js.
<strong>Rule Engine for Loan Applications:</strong> Built a dynamic rule engine for evaluating loan eligibility with a user-friendly interface and real-time previews.
<strong>Employee Management System: </strong>Implemented a dashboard for CRUD operations with Material-UI, filtering, sorting, and MongoDB integration.
<strong>Responsive Design:</strong> Crafted mobile-first layouts using Bootstrap and Tailwind CSS.
<strong>Testing & Debugging:</strong> Enhanced application reliability with unit testing using Jest and API testing via Postman.
<strong>Deployment & Hosting:</strong> Deployed applications on<strong> Vercel, AWS, and Netlify,</strong> utilizing CI/CD pipelines for smooth integration.
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
