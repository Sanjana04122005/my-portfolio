import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>

      <p>
        Want to know more about my education, skills and experience?
        Download my resume below.
      </p>

      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;