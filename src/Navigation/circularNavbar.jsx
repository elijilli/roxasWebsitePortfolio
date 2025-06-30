import React from 'react';
import { useNavigate } from 'react-router-dom';
import './circularNavbar.scss';

const CircularNavbar = () => {
  const navigate = useNavigate();
  const circles = [
    { id: 'about', label: 'about' },
    { id: 'resume', label: 'resume' },
    { id: 'achievements', label: 'achievements' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <div className="circular-nav-container fade-in">
      {circles.map((circle) => (
        <button
          key={circle.id}
          onClick={() => navigate(`/${circle.id}`)}
          className={`circle-button ${circle.id}-button`}
        >
          {circle.label}
        </button>
      ))}
    </div>
  );
};

export default CircularNavbar;