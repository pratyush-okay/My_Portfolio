// SkillsToggle.js

import React, { useState } from 'react';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';
import './skillToggle.css';  // Import your CSS file for styling

const SkillsToggle = () => {
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);

  const toggleSkills = () => {
    setShowTechnicalSkills(!showTechnicalSkills);
  };

  return (
    <div>
        <div className="skills-container">
            <div className="skills-heading">
                <h3>Technical Skills</h3>
                <label className="switch">
                    <input type="checkbox" checked={showTechnicalSkills} onChange={toggleSkills} />
                    <span className="slider"></span>
                </label>
                <h3>Soft Skills</h3>
            </div>
        </div>

      {showTechnicalSkills ? <SoftSkills /> : <TechnicalSkills />}
    </div>
  );
};

export default SkillsToggle;
