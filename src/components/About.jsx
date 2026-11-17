
import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1>Hello, I'm a React Developer</h1>

        <h2>About Me</h2>

        <p>
          I am a passionate web developer interested in
          creating modern and responsive websites using
          React, HTML, CSS and JavaScript.
        </p>

        <a href="#projects" className="about-btn">
          View My Projects
        </a>
      </div>
    </section>
  );
}

export default About;
