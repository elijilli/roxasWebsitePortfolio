import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './topNavbar.scss';

const TopNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="top-nav-container">
      <ul className="top-nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => navigate(`/${item.id === 'home' ? '' : item.id}`)}
              className={`top-nav-item ${
                location.pathname === `/${item.id}` || 
                (item.id === 'home' && location.pathname === '/') 
                  ? 'active' 
                  : ''
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavbar;