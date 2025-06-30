import React from 'react';
import './resumepage.scss';

const ResumePageComponent = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-content">
        <div className="resume-section">
          <div className="experience-section">
            <h3 className="section-title">Experience</h3>
            <div className="experience-list">
              <div className="experience-item">
                <h4 className="job-title">Senior Professional</h4>
                <p className="job-meta">Company Name • 2022 - Present</p>
                <p className="job-description">Leading innovative projects and driving results.</p>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3 className="section-title">Skills</h3>
            <div className="skills-list">
              {['Leadership', 'Project Management', 'Creative Problem Solving', 'Team Collaboration'].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePageComponent;