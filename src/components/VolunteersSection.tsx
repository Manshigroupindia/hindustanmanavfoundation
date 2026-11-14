import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { TEAM_MEMBERS, VOLUNTEER_BENEFITS } from '../data/siteData';

interface VolunteersSectionProps {
  showHeading?: boolean;
}

export const VolunteersSection: React.FC<VolunteersSectionProps> = ({ showHeading = true }) => {
  return (
    <section className="team-section bg-grey bd-bottom circle shape padding" style={{ backgroundColor: '#fbfbfb', padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {showHeading && (
          <div className="section-heading text-center mb-40" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
              Meet Our Dedicated Volunteers
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
              Dedicated volunteers and grassroots changemakers driving education, health, and welfare initiatives every day.
            </p>
          </div>
        )}

        <div className="team-wrapper row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Left: 2x2 Volunteer Photos */}
          <div className="col-lg-6 sm-padding" style={{ marginBottom: '30px' }}>
            <div className="team-wrap row" style={{ margin: '-10px' }}>
              {TEAM_MEMBERS.slice(1, 5).map((member) => (
                <div className="col-md-6 col-6" key={member.id} style={{ padding: '10px' }}>
                  <div
                    className="team-details"
                    style={{
                      position: 'relative',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                      backgroundColor: '#fff',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '240px',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    <div
                      className="hover"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                        padding: '30px 15px 15px 15px',
                        color: '#fff',
                      }}
                    >
                      <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: 0 }}>
                        {member.name}
                        <span style={{ display: 'block', fontSize: '12px', color: '#f8b864', fontWeight: 400, marginTop: '2px' }}>
                          {member.role}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Join Info & Checklist */}
          <div className="col-lg-6 sm-padding" style={{ marginBottom: '30px', paddingLeft: '35px' }}>
            <div className="team-content">
              <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#282828', marginBottom: '10px' }}>
                Become a Volunteer?
              </h2>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#f8b864', marginBottom: '18px', lineHeight: '28px' }}>
                Join your hand with us for a better life and beautiful future.
              </h3>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '26px', marginBottom: '25px' }}>
                The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
              </p>

              <ul className="check-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0' }}>
                {VOLUNTEER_BENEFITS.map((benefit, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#444',
                      fontSize: '15px',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#fff3e0',
                        color: '#f8b864',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
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
                Join With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

