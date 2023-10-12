// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('isDarkMode', newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.backgroundColor = '#06142e';
      document.documentElement.style.color = '#fff';
    } else {
      document.documentElement.style.backgroundColor = '#e1dcd1';
      document.documentElement.style.color = '#06142e';
    }
  }, [isDarkMode]);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <Link className="navbar-brand" to="/">
        Tvent
      </Link>
      <button className={`navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-nav ${isOpen ? 'responsive active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/events' ? 'active' : ''}>
          <Link to="/events">Event</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>Sign Up</Link>
        </li>
        <li>
          <button className="mode-toggle" onClick={toggleMode}>
            <div className={`icon-container ${isDarkMode ? 'slide-up' : 'slide-down'}`}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" color={isDarkMode ? 'yellow' : 'blue'} />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
