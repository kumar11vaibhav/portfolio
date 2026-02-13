import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import { homePageConstants } from "./app/constants/homePageConstants";
import Home from "./app/pages/Home";
import Projects from "./app/pages/Projects";
import Contact from "./app/pages/Contact";

function App() {
  // Use basename only in production (GitHub Pages), not in development
  const basename = process.env.NODE_ENV === "production" ? "/portfolio" : "/";

  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <header className="App-header">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>{homePageConstants.title}</h1>
          </Link>
          <nav>
            <ul>
              {homePageConstants.headerOptions.map((header) => (
                <li key={header.title}>
                  <NavLink
                    to={header.resource}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {header.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
