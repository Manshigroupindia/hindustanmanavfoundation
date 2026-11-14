import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { VolunteersSection } from '../components/VolunteersSection';
import { CounterSection } from '../components/CounterSection';
import { SponsorsSection } from '../components/SponsorsSection';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <PageHeader
        title="About Us"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
      />

      {/* Intro Section matching About Page.jpeg */}
      <section className="about-intro-section" style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="col-md-6 xs-padding" style={{ marginBottom: '30px' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}>
                <img
                  src="/assets/img/history.jpg"
                  alt="Who We Are"
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            <div className="col-md-6 xs-padding" style={{ marginBottom: '30px', paddingLeft: '35px' }}>
              <div>
                <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#282828', lineHeight: '46px', marginBottom: '20px' }}>
                  You are definitely intrigued to discover who we are.
                </h2>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '28px', marginBottom: '25px' }}>
                  The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
                </p>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '28px', marginBottom: '30px' }}>
                  Hindustan Manav Foundation is founded on the principles of collective responsibility, empathy, and transparent welfare. We believe that true sustainable progress begins when every vulnerable individual is granted basic human dignity, quality education, and clean living essentials.
                </p>
                <Link
                  to="/volunteers"
                  className="default-btn"
                  style={{
                    backgroundColor: '#f8b864',
                    color: '#fff',
                    padding: '12px 32px',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 4px 15px rgba(248, 184, 100, 0.35)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Volunteers Section */}
      <VolunteersSection showHeading={true} />

      {/* Counter Impact Stats */}
      <CounterSection />

      {/* Sponsors */}
      <SponsorsSection />
    </div>
  );
};

