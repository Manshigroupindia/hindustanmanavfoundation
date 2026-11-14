import React from 'react';
import { SPONSORS } from '../data/siteData';

export const SponsorsSection: React.FC = () => {
  return (
    <div className="sponsor-section bd-bottom" style={{ backgroundColor: '#ffffff', padding: '45px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              style={{
                opacity: 0.75,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.75';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                style={{ maxHeight: '35px', width: 'auto', display: 'block', filter: 'grayscale(100%)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

