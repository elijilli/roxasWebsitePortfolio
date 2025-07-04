import React from 'react';
import './achievementspage.scss';

const AchievementsPage = () => {
  const leadership = [
    { 
      title: 'Emerging Leader', 
      year: '2025', 
      description: 'GAWAD T.I.P. Awardee' 
    },
    { 
      title: 'Chairperson', 
      year: '2025-2026', 
      description: 'Central COMELEC TIP Manila' 
    },
    { 
      title: 'Assistant Secretary', 
      year: '2024-2026', 
      description: 'Computer Engineering Student Society' 
    },
    { 
      title: 'Secretary', 
      year: '2024-2025', 
      description: 'Central COMELEC TIP Manila' 
    },
    { 
      title: 'SDG 6 Ambassador', 
      year: '2024-2025', 
      description: 'G17 Philippines Consortium' 
    },
    { 
      title: 'Secretary', 
      year: '2022-2023', 
      description: 'Computer Engineering Department Student Council' 
    },
    { 
      title: 'T.I.P. Gawad', 
      year: '2025', 
      description: 'Recognized as one of the outstanding leaders in TIP.' 
    },
    {
      title: 'LeadHERAwards', 
      year: '2025', 
      description: 'Recognized as one of the outstanding female leaders in TIP.' 
    }
  ];

  const projects = [
    { 
      title: 'Hanapp v1', 
      year: '2023', 
      description: 'Room scheduling system for room request and approval' 
    },
    { 
      title: 'DDOS', 
      year: '2024', 
      description: 'Booking platform for online dental consultations'
    },
    { 
      title: 'Portfolio', 
      year: '2025', 
      description: 'Personal portfolio website to explore my work and skills' 
    },
    { 
      title: 'Chatbox Burner', 
      year: '2025', 
      description: 'Chatting platform for individuals who wants a quick conversations ' 
    }
  ];

  const hardwareproj = [
    { 
      title: 'Maze-Solving Robot', 
      year: '2024', 
      description: 'A maze-solving robot built using Arduino UNO that navigates path through ultrasonic sensors.' 
    }
  ]

  const extracurriculars = [
    { 
      title: 'CPE Challenge ', 
      year: '2024', 
      description: 'Showcase the skills in robothon pitching competition. Institute of the Computer Engineers in the Philippines.' 
    },
    { 
      title: 'Finally Clean', 
      year: '2024', 
      description: 'I won as the "Ambassador of the Month". G17 Philippines Consortium.' 
    },
    { 
      title: 'Capture the Flag Competition', 
      year: '2024', 
      description: 'A representative to solve and find hidden flags. Trend Micro Philippines.' 
    },
    { 
      title: 'The Story', 
      year: '2024', 
      description: 'A story how to protect your intellectual property. IP CIRCLE Short Story Competition.' 
    },

  ];

  return (
    <div className="achievements-container">
      {/* Leadership Section */}
      <section className="achievements">
        <h1 className="achievements__title">Leadership</h1>
        <div className="achievements__grid">
          {leadership.map((achievement, index) => (
            <div key={`leadership-${index}`} className="achievement-card">
              <div className="achievement-card__header">
                <h2 className="achievement-card__title">{achievement.title}</h2>
                <span className="achievement-card__year">{achievement.year}</span>
              </div>
              <p className="achievement-card__description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software Projects Section */}
      <section className="achievements">
        <h1 className="achievements__title">Software Projects</h1>
        <div className="achievements__grid">
          {projects.map((achievement, index) => (
            <div key={`project-${index}`} className="achievement-card">
              <div className="achievement-card__header">
                <h2 className="achievement-card__title">{achievement.title}</h2>
                <span className="achievement-card__year">{achievement.year}</span>
              </div>
              <p className="achievement-card__description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware Projects Section */}
      <section className="achievements">
        <h1 className="achievements__title">Hardware Project</h1>
        <div className="achievements__grid">
          {hardwareproj.map((achievement, index) => (
            <div key={`project-${index}`} className="achievement-card">
              <div className="achievement-card__header">
                <h2 className="achievement-card__title">{achievement.title}</h2>
                <span className="achievement-card__year">{achievement.year}</span>
              </div>
              <p className="achievement-card__description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section className="achievements">
        <h1 className="achievements__title">Extracurricular Activities</h1>
        <div className="achievements__grid">
          {extracurriculars.map((achievement, index) => (
            <div key={`extracurricular-${index}`} className="achievement-card">
              <div className="achievement-card__header">
                <h2 className="achievement-card__title">{achievement.title}</h2>
                <span className="achievement-card__year">{achievement.year}</span>
              </div>
              <p className="achievement-card__description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;