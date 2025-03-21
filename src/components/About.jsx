// File Path: C:\SuLynn\dashboard\public_site\src\components\About.js

import React from "react";
import "../styles.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About SuLynn</h1>
      <p>
        SuLynn is designed to address a critical challenge in AI: keeping Large
        Language Models (LLMs) on track. By actively monitoring and intervening,
        SuLynn ensures AI-generated outputs remain accurate and relevant.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to enhance AI reliability by preventing hallucinations
        and inconsistencies in LLM-generated content. We strive to create a
        system that ensures AI outputs remain factual, precise, and useful.
      </p>
      <h2>How SuLynn Works</h2>
      <ul>
        <li>Real-time monitoring of AI responses</li>
        <li>Automated interventions to correct hallucinations</li>
        <li>User-driven rollback system for AI-generated content</li>
      </ul>
      <h2>Future Plans</h2>
      <p>
        SuLynn is currently being developed as a standalone application but is
        also designed for full integration into MorphicBrain. This will allow
        even more robust AI monitoring and intervention capabilities.
      </p>
    </div>
  );
};

export default About;
