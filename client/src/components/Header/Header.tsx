import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <a href="df" className="logo">
        Tacko Tuesday
      </a>
      <nav className="header-links">
        <a href="d">Login</a>
        <a href="df">Register</a>
      </nav>
    </header>
  );
};

export default Header;
