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
    <header className="navbar-header">

      <div className="logo-name-container" onClick={() => navigate('/')}>
        <img 
          src={process.env.PUBLIC_URL + '/images/irishlogo.png'} 
          alt="Irish Roxas" 
          className="profile-logo"
        />
      </div>

      {/* Navigation on the right */}
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
    </header>
  );
};

export default TopNavbar;