import React from "react";
import { commonConstants } from "../constants/commons";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Get in touch with me at:{" "}
        <a href={`mailto:${commonConstants.email}`}>{commonConstants.email}</a>
      </p>
    </div>
  );
};

export default Contact;
