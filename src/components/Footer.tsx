import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NGO_DETAILS } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <>
      <section className="widget-section padding" style={{ backgroundColor: '#222', color: '#aaa', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="widget-wrap row">
            {/* Column 1: NGO Identity */}
            <div className="col-md-4 xs-padding">
              <div className="widget-content">
                <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
                  <img
                    src="/assets/img/logo-light.svg"
                    alt={NGO_DETAILS.name}
                    style={{ maxHeight: '52px', width: 'auto' }}
                  />
                </Link>
                <p style={{ color: '#aaa', lineHeight: '26px', marginBottom: '20px', fontSize: '15px' }}>
                  The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
                </p>
                <ul className="social-icon" style={{ display: 'flex', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>
                    <a href={NGO_DETAILS.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: 'color 0.2s' }} aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                  </li>
                  <li>
                    <a href={NGO_DETAILS.social.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: 'color 0.2s' }} aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                  </li>
                  <li>
                    <a href={NGO_DETAILS.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: 'color 0.2s' }} aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                  </li>
                  <li>
                    <a href={NGO_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', transition: 'color 0.2s' }} aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Recent Campaigns */}
            <div className="col-md-4 xs-padding">
              <div className="widget-content">
                <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '25px', position: 'relative', fontWeight: 600 }}>
                  Recent Campaigns
                </h3>
                <ul className="widget-link" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '14px' }}>
                    <Link to="/causes" style={{ color: '#aaa', textDecoration: 'none', display: 'block', fontSize: '15px' }}>
                      First charity activity of this summer. <span style={{ color: '#f8b864', fontSize: '13px' }}>- Recent</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: '14px' }}>
                    <Link to="/causes" style={{ color: '#aaa', textDecoration: 'none', display: 'block', fontSize: '15px' }}>
                      Big charity: build school for poor children. <span style={{ color: '#f8b864', fontSize: '13px' }}>- Active</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: '14px' }}>
                    <Link to="/causes" style={{ color: '#aaa', textDecoration: 'none', display: 'block', fontSize: '15px' }}>
                      Clean-water system for rural poor. <span style={{ color: '#f8b864', fontSize: '13px' }}>- Ongoing</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: '14px' }}>
                    <Link to="/causes" style={{ color: '#aaa', textDecoration: 'none', display: 'block', fontSize: '15px' }}>
                      Community healthcare & nutrition drive. <span style={{ color: '#f8b864', fontSize: '13px' }}>- Welfare</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact & Bank Info with Map background */}
            <div className="col-md-4 xs-padding">
              <div className="widget-content">
                <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '25px', position: 'relative', fontWeight: 600 }}>
                  HMF Details
                </h3>
                <ul className="address" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px' }}>
                    <Mail size={16} color="#f8b864" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <a href={`mailto:${NGO_DETAILS.email}`} style={{ color: '#aaa', textDecoration: 'none' }}>
                      {NGO_DETAILS.email}
                    </a>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px' }}>
                    <Phone size={16} color="#f8b864" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <a href={`tel:${NGO_DETAILS.phone}`} style={{ color: '#aaa', textDecoration: 'none' }}>
                      {NGO_DETAILS.displayPhone}
                    </a>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px' }}>
                    <Building2 size={16} color="#f8b864" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <div>
                      <span style={{ color: '#fff', fontWeight: 600 }}>Axis Bank: </span>
                      <span>A/C: {NGO_DETAILS.bank.accountNumber}</span>
                      <div style={{ fontSize: '13px', color: '#f8b864' }}>IFSC: {NGO_DETAILS.bank.ifscCode}</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px' }}>
                    <MapPin size={16} color="#f8b864" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{NGO_DETAILS.fullAddress}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Bar */}
      <footer className="footer-section" style={{ backgroundColor: '#1c1c1c', padding: '25px 0', borderTop: '1px solid #2d2d2d' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="col-md-6 sm-padding">
              <div className="copyright" style={{ color: '#888', fontSize: '14px' }}>
                © 2026 {NGO_DETAILS.name}. All Rights Reserved.
              </div>
            </div>
            <div className="col-md-6 sm-padding text-right">
              <ul className="footer-social" style={{ display: 'inline-flex', gap: '20px', listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                  <Link to="/about" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/donate" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/contact" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>
                    Report Problem
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
