// TechnicalSkills.js

import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
  return (
    <div className="skills-container">
      <div className="skill-card">
        <h3>Frontend</h3>
        <p>Creating web pages using HTML, CSS and React</p>
      </div>
      <div className="skill-card">
        <h3>Backend</h3>
        <p>Adept at architecting RESTful APIs</p>
      </div>
      <div className="skill-card">
        <h3>Web Applications</h3>
        <p>Creating dynamic and intuitive web experiences</p>
      </div>
      <div className="skill-card">
        <h3>Machine Learning</h3>
        <p>Data preprocessing, feature engineering, and model evaluation</p>
      </div>
      <div className="skill-card">
        <h3>AI</h3>
        <p>Building intelligent systems with NLP, CV and ML algorithms</p>
      </div>
      <div className="skill-card">
        <h3>Database Systems</h3>
        <p>Designing and managing robust and scalable database architectures</p>
      </div>
      {/* Add more skill cards as needed */}
    </div>
  );
};

export default TechnicalSkills;
