import React from "react";
import { homePageConstants } from "../constants/homePageConstants";

const Home = () => {
  return (
    <div>
      <div className="about-header">
        <img
          src={process.env.PUBLIC_URL + "/assets/photograph.jpg"}
          alt="Profile"
          className="profile-photo"
          style={{ maxWidth: 200, borderRadius: 8 }}
        />

        <div className="about-text">
          <p className="professional-summary">
            {homePageConstants.professionalSummary.intro}
          </p>

          <p className="professional-summary">
            {homePageConstants.professionalSummary.delivery}
          </p>

          <h3>Core strengths:</h3>
          <ul className="summary-bullets">
            {homePageConstants.professionalSummary.coreStrengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <p className="professional-summary">
            {homePageConstants.professionalSummary.closing}
          </p>

          <div className="skills-container">
            {homePageConstants.technicalSkills.map((skill) => (
              <span key={skill.title} className="skill-bubble">
                {skill.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
    
};

export default Home;
