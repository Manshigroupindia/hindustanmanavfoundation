import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="scroll-to-top"
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#f8b864',
        color: '#ffffff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        zIndex: 9999,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e09e46')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8b864')}
    >
      <ArrowUp size={20} />
    </button>
  );
};

