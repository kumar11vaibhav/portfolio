import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer who loves creating amazing web
            experiences.
          </p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {/* Project cards will go here */}
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
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
