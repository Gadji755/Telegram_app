import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PlayCircle, Users } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>Главная</span>
      </NavLink>
      <NavLink to="/videos" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <PlayCircle size={24} />
        <span>Эфиры</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Users size={24} />
        <span>О нас</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
