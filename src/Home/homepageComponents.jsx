import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CircularNavbar from '../Navigation/circularNavbar';
import TopNavbar from '../Navigation/topNavbar';
import './homepage.scss';

const HomepageComponent = () => {
  const location = useLocation(); 
  const isHomepage = location.pathname === '/';

  return (
    <div className="App">

      <Outlet />
      

      {isHomepage && <CircularNavbar />}
      
      
      <TopNavbar />
    </div>
  );
};

export default HomepageComponent;