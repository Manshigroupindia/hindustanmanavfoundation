import React from 'react';
import { Link } from 'react-router-dom';
import { PROMO_ITEMS } from '../data/siteData';

export const PromoSection: React.FC = () => {
  return (
    <section className="promo-section bd-bottom">
      <div className="promo-wrap">
        <div className="container">
          <div className="row">
            {PROMO_ITEMS.map((item) => (
              <div className="col-md-4 col-sm-6 xs-padding" key={item.id}>
                <div
                  className="promo-content"
                  style={{
                    backgroundColor: '#fff',
                    padding: '40px 30px',
                    textAlign: 'center',
                    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ maxHeight: '60px', width: 'auto', marginBottom: '20px' }}
                    />
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#282828', marginBottom: '15px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '25px', marginBottom: '20px' }}>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      to={item.link}
                      style={{
                        color: '#282828',
                        fontSize: '14px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        borderBottom: '2px solid #f8b864',
                        paddingBottom: '2px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

