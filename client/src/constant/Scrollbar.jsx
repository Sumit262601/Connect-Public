import React from 'react';

const ScrollIcon = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-icon mb-28" onClick={scrollToNextSection}>
      <div className="mouse">
        <div className="mouse-dot"></div>
      </div>
    </div>
  );
};

export default ScrollIcon;
