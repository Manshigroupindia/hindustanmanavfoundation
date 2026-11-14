import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0);

  // Group testimonials or slide
  const items = activeDot === 0 ? TESTIMONIALS_DATA.slice(0, 3) : TESTIMONIALS_DATA.slice(1, 4);

  return (
    <section className="testimonial-section bd-bottom padding" style={{ backgroundColor: '#ffffff', padding: '90px 0' }}>
      <div className="container">
        <div className="section-heading text-center mb-40" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
            What People Say
          </h2>
          <span
            className="heading-border"
            style={{
              display: 'block',
              width: '60px',
              height: '3px',
              backgroundColor: '#f8b864',
              margin: '0 auto 15px auto',
            }}
          />
          <p style={{ color: '#666', fontSize: '16px', lineHeight: '26px' }}>
            Help today because tomorrow you may be the one who <br /> needs more helping!
          </p>
        </div>

        <div className="row">
          {items.map((testi) => (
            <div className="col-md-4 xs-padding" key={testi.id} style={{ marginBottom: '30px' }}>
              <div
                className="testimonial-item"
                style={{
                  backgroundColor: '#fbfbfb',
                  padding: '35px 30px',
                  borderRadius: '6px',
                  border: '1px solid #f0f0f0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                }}
              >
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '26px', fontStyle: 'italic', marginBottom: '25px' }}>
                  "{testi.quote}"
                </p>
                <div className="testi-footer" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img
                    src={testi.image}
                    alt={testi.name}
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #f8b864',
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#282828', margin: '0 0 2px 0' }}>
                      {testi.name}
                    </h4>
                    <span style={{ fontSize: '13px', color: '#888', fontWeight: 400 }}>
                      {testi.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              aria-label={`Testimonial page ${idx + 1}`}
              style={{
                width: activeDot === idx ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: activeDot === idx ? '#f8b864' : '#ddd',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

