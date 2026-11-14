import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { CounterSection } from '../components/CounterSection';
import { SponsorsSection } from '../components/SponsorsSection';
import { TEAM_MEMBERS } from '../data/siteData';

export const VolunteersPage: React.FC = () => {
  return (
    <div className="volunteers-page">
      <PageHeader
        title="Our Volunteers"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Volunteers' }]}
      />

      {/* Top 3 Cards: Founder, History, Mission */}
      <AboutSection />

      {/* Team / Volunteers 4 Column Cards matching Voluenters.jpeg */}
      <section className="volunteers-grid-section" style={{ padding: '0 0 90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row">
            {TEAM_MEMBERS.filter((m) => m.id !== 'team-1').map((member) => (
              <div className="col-lg-3 col-md-6 col-sm-6 xs-padding" key={member.id} style={{ marginBottom: '25px' }}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.06)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '280px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div style={{ padding: '20px 15px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#282828', margin: '0 0 6px 0' }}>
                      {member.name}
                    </h3>
                    <span style={{ fontSize: '13px', color: '#f8b864', fontWeight: 600, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Sponsors */}
      <SponsorsSection />
    </div>
  );
};

