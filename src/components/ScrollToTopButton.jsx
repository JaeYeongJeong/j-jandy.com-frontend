import React, { useEffect, useState } from 'react';
import { scrollToTop } from '../Util/scrollToTop';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > 1080) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        width: '40px',
        height: '40px',
        bottom: '50px',
        right: '30px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: isHovered ? 'orange' : '#484848',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.9)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;
