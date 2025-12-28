import React from "react";
import About from "./About";

const Home = () => {
  return (
    <div>
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          Get in touch with me at:{" "}
          <a href="mailto:kumar11vaibhav@gmail.com">kumar11vaibhav@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default Home;
