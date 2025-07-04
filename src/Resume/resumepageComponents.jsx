import React from 'react';
import './resumepage.scss';

const ResumePageComponent = () => {
  return (
    <div className="resume-container fade-in">
      <h1 className="section-title fade-in">Education</h1>
      
      <div className="content-card fade-in">
        <div className="education-section">
          <h2 className="position-title">Bachelor of Science in Computer Engineering</h2>
          <p className="position-meta">Technological Institute of the Philippines • 2021 - Present</p>
          <p className="position-description">Specialized in Cyber Security</p>
          <div className="section-divider"></div> 
          <h2 className="position-title">Junior and Senior High School</h2>
          <p className="position-meta">Sta. Elena High School • 2015 - 2021</p>
          <p className="position-description">Science, Technology, Engineering, and Mathematics</p>
        </div>
      </div>

      <h1 className="section-title fade-in">Work Experience</h1>
      
      <div className="content-card fade-in">
        <div className="experience-section">
          <h2 className="position-title">Student Assistant</h2>
          <p className="position-meta">Technological Institute of the Philippines - Manila • 2024 - Present</p>
          <p className="position-description">Provides assistance and support to the staff and students of T.I.P. Manila under Office of Student Affairs.</p>
          <div className="section-divider"></div> 
          <h2 className="position-title">Script Writer</h2>
          <p className="position-meta">Upwork • 2024 - 2025</p>
          <p className="position-description">Creates informative and engaging contents about crypto and trends.</p>
          <div className="section-divider"></div> 
          <h2 className="position-title">Account Receivables Specialist</h2>
          <p className="position-meta">Quantrics Enterprises Inc. • 2022 - 2023</p>
          <p className="position-description">Manages payments, ensures accuracy and timely collection of funds in financial operations.</p>
        </div>
      </div>

      <h1 className="section-title fade-in">Skills</h1>
      <div className="content-card fade-in">
        <h2 className="skill-title">Soft Skills</h2>
        <div className="skills-list">
          {['Leadership', 'Project Management', 'Creative Problem Solving', 'Team Collaboration', 'Critical Thinking', 'Work Ethic and Professionalism', 'Public Speaking Skills'].map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <div className="section-divider"></div> 
        <h2 className="skill-title">Hard Skills</h2>
        <div className="skills-list">
          {['Programming Languages (C++, Python, JavaScript, HTML & CSS)', 'Frontend Development', 'Cyber Security', 'Networking & Communication Protocols', 'Operating System', 'Version Control (Git, GitHub)', 'Computer Hardware'].map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePageComponent;