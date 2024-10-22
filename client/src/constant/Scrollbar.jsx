import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext'; // Import DarkModeContext

const ScrollIcon = () => {
  const { darkMode } = useContext(DarkModeContext); // Use context to access darkMode state

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-icon mb-28 cursor-pointer ${darkMode ? 'dark' : ''}`} onClick={scrollToNextSection}>
      <div className={`mouse ${darkMode ? 'dark' : ''}`}>
        <div className={`mouse-dot ${darkMode ? 'dark' : ''}`}></div>
      </div>
    </div>
  );
};

export default ScrollIcon;
