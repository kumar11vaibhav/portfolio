import React from "react";
import { homePageConstants } from "../constants/homePageConstants";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p className="professional-summary">
        {homePageConstants.professionalSummary}
      </p>
      <div className="skills-container">
        {homePageConstants.technicalSkills.map((skill) => (
          <>
            <span key={skill.title} className="skill-bubble">
              {skill.title}
            </span>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default About;
