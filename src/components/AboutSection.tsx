import React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section bd-bottom shape circle padding" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Founder / Leadership Profile Card */}
          <div className="col-md-4 xs-padding">
            <div
              className="profile-wrap"
              style={{
                border: '1px dashed #e0e0e0',
                padding: '35px 25px',
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.04)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <img
                  className="profile"
                  src="/assets/img/profile.jpg"
                  alt="Founder & Director"
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px auto',
                    border: '4px solid #fff',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#282828', marginBottom: '15px' }}>
                  Dr. Ramesh Chandra <br />
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#888', display: 'block', marginTop: '4px' }}>
                    Founder & Welfare Trustee
                  </span>
                </h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '25px', fontStyle: 'italic', marginBottom: '25px' }}>
                  "True human welfare begins with compassion and direct action. When we stand together to uplift the vulnerable, we create lasting dignity and hope for future generations."
                </p>
              </div>

              <img
                src="/assets/img/sign.png"
                alt="Signature"
                style={{ maxHeight: '42px', width: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* History & Mission Cards */}
          <div className="col-md-8 xs-padding">
            <div className="about-wrap row">
              <div className="col-md-6 xs-padding" style={{ marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '6px', overflow: 'hidden', height: '100%' }}>
                  <img
                    src="/assets/img/history.jpg"
                    alt="Our History"
                    style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px', marginBottom: '20px' }}
                  />
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
                    Our History
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', lineHeight: '25px', marginBottom: '22px' }}>
                    The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, bridging resources and hope.
                  </p>
                  <Link
                    to="/about"
                    className="default-btn"
                    style={{
                      backgroundColor: '#f8b864',
                      color: '#fff',
                      padding: '10px 24px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>

              <div className="col-md-6 xs-padding" style={{ marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '6px', overflow: 'hidden', height: '100%' }}>
                  <img
                    src="/assets/img/mission.jpg"
                    alt="Our Mission"
                    style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px', marginBottom: '20px' }}
                  />
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
                    Our Mission
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', lineHeight: '25px', marginBottom: '22px' }}>
                    The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of underprivileged communities and children.
                  </p>
                  <Link
                    to="/about"
                    className="default-btn"
                    style={{
                      backgroundColor: '#f8b864',
                      color: '#fff',
                      padding: '10px 24px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

