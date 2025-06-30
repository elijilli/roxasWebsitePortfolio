import React from 'react';
import './aboutpage.scss';

const AboutpageComponent = () => {
  return (
    <div className="about-content">
      {/* Circular Profile Picture */}
      <div className="profile-picture-container">
        <img 
          src={process.env.PUBLIC_URL + '/images/irishpic1.jpg'} 
          alt="Irish Roxas" 
          className="profile-picture"
        />
      </div>

      <h2 className="about-title">about me!</h2>
      <p className="about-subtitle">this part is a lil about me :)</p>
      
      <div className="about-text-container">
        <p className="about-text">
          Hi! I am Irish B. Roxas, a 4th-year Computer Engineering Student in 
          Technological Institute of the Philippines - Manila. When I am not studying, 
          you'll find me tucked away in a quiet, dim corner, lost between the pages 
          of a book. Cliche as may sound but I believe that  a small stumbles are some gentle nudges toward something better. 🎀
        </p>
      </div>
    </div>
  );
};

export default AboutpageComponent;