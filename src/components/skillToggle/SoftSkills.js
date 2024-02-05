// TechnicalSkills.js

import React from 'react';
import './TechnicalSkills.css';

const SoftSkills = () => {
  return (
    <div className="skills-container">
      <div className="skill-card">
        <h3>Communication</h3>
        <p>Effective exchange of information and ideas</p>
      </div>
      <div className="skill-card">
        <h3>Collaboration</h3>
        <p>Working effectively in a team environment</p>
      </div>
      <div className="skill-card">
        <h3>Adaptability</h3>
        <p>Flexibility to embrace change and new technologies</p>
      </div>
      <div className="skill-card">
        <h3>Time Management</h3>
        <p>Efficiently organizing and prioritizing tasks</p>
      </div>
      <div className="skill-card">
        <h3>Problem Solving</h3>
        <p>Analytical thinking to resolve challenges</p>
      </div>
      <div className="skill-card">
        <h3>Innovations</h3>
        <p>Generating innovative solutions and ideas</p>
      </div>
      {/* Add more skill cards as needed */}
    </div>
  );
};

export default SoftSkills;
