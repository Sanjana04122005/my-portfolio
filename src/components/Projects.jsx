import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website built using React and CSS.</p>
        </div>

        <div className="project-card">
          <h3>Food Delivery App</h3>
          <p>A modern food delivery application with a shopping cart.</p>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>A weather application that displays weather information.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;