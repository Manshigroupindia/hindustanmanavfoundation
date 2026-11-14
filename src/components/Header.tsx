import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, ChevronDown, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NGO_DETAILS } from '../data/siteData';
import { useDonation } from '../context/DonationContext';

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const location = useLocation();
  const { openDonation } = useDonation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header id="header" className={`header-section ${isSticky ? 'sticky-header' : ''}`}>
        {/* Top Header Bar */}
        {!isSticky && (
          <div className="top-header" style={{ background: '#f8b864' }}>
            <div className="container">
              <div className="top-content-wrap row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', margin: 0 }}>
                <div className="col-12 col-md-8" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                  <ul className="left-info" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ whiteSpace: 'nowrap' }}>
                      <a
                        href={`mailto:${NGO_DETAILS.email}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fff', textDecoration: 'none', fontSize: '13.5px', fontWeight: 500, whiteSpace: 'nowrap' }}
                      >
                        <Mail size={15} style={{ flexShrink: 0 }} />
                        <span>{NGO_DETAILS.email}</span>
                      </a>
                    </li>
                    <li style={{ whiteSpace: 'nowrap' }}>
                      <a
                        href={`tel:${NGO_DETAILS.phone}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fff', textDecoration: 'none', fontSize: '13.5px', fontWeight: 500, whiteSpace: 'nowrap' }}
                      >
                        <Phone size={15} style={{ flexShrink: 0 }} />
                        <span>{NGO_DETAILS.displayPhone}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 d-none d-md-block text-right" style={{ padding: 0 }}>
                  <ul className="right-info" style={{ display: 'inline-flex', gap: '15px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li>
                      <a href={NGO_DETAILS.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }} aria-label="Facebook">
                        <Facebook size={16} />
                      </a>
                    </li>
                    <li>
                      <a href={NGO_DETAILS.social.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }} aria-label="Twitter">
                        <Twitter size={16} />
                      </a>
                    </li>
                    <li>
                      <a href={NGO_DETAILS.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }} aria-label="Instagram">
                        <Instagram size={16} />
                      </a>
                    </li>
                    <li>
                      <a href={NGO_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }} aria-label="LinkedIn">
                        <Linkedin size={16} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Main Header */}
        <div className="bottom-header" style={{ background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
          <div className="container">
            <div className="bottom-content-wrap row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isSticky ? '10px 0' : '16px 0', margin: 0, flexWrap: 'nowrap' }}>
              {/* Site Logo */}
              <div className="col-8 col-lg-3" style={{ padding: 0 }}>
                <div className="site-branding">
                  <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img
                      src="/assets/img/logo.svg"
                      alt={NGO_DETAILS.name}
                      style={{ maxHeight: '46px', maxWidth: '100%', width: 'auto', display: 'block', objectFit: 'contain' }}
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu & Donate Button */}
              <div className="col-4 col-lg-9 text-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px', padding: 0 }}>
                <ul id="mainmenu" className="nav-menu d-none d-lg-flex">
                  <li className={isActive('/') && location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                  </li>

                  <li className={isActive('/about') ? 'active' : ''}>
                    <Link to="/about">About</Link>
                  </li>

                  <li className={isActive('/causes') ? 'active' : ''}>
                    <Link to="/causes">Causes</Link>
                  </li>

                  <li className={isActive('/events') ? 'active' : ''}>
                    <Link to="/events">Event</Link>
                  </li>

                  <li
                    className={isActive('/gallery') || isActive('/volunteers') || isActive('/404') ? 'active' : ''}
                    onMouseEnter={() => setPagesDropdownOpen(true)}
                    onMouseLeave={() => setPagesDropdownOpen(false)}
                    style={{ position: 'relative' }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '24px 0', fontSize: '15px', fontWeight: 500, color: '#282828' }}>
                      Pages <ChevronDown size={14} />
                    </span>
                    {pagesDropdownOpen && (
                      <ul className="dropdown-menu-custom" style={{ opacity: 1, visibility: 'visible', transform: 'translateY(0)' }}>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/volunteers">Volunteers</Link>
                        </li>
                        <li>
                          <Link to="/donate">Bank Donation</Link>
                        </li>
                        <li>
                          <Link to="/404">404 Not Found</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className={isActive('/blog') ? 'active' : ''}>
                    <Link to="/blog">Blog</Link>
                  </li>

                  <li className={isActive('/contact') ? 'active' : ''}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => openDonation()}
                  className="default-btn d-none d-sm-inline-block"
                  style={{
                    backgroundColor: '#f8b864',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(248, 184, 100, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Donate Now
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  type="button"
                  className="mobile-menu-btn d-lg-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Navigation"
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '6px' }}
                >
                  {mobileMenuOpen ? <X size={28} color="#282828" /> : <Menu size={28} color="#282828" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 9999,
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '280px',
                height: '100%',
                backgroundColor: '#fff',
                padding: '24px 20px',
                boxShadow: '-4px 0 20px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <img src="/assets/img/logo.svg" alt={NGO_DETAILS.name} style={{ maxHeight: '42px', width: 'auto' }} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  aria-label="Close menu"
                >
                  <X size={24} color="#333" />
                </button>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Home
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/about"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    About
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/causes"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Causes
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/events"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Event
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/gallery"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Gallery
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/volunteers"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Volunteers
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/donate"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Bank Donation
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/blog"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Blog
                  </Link>
                </li>
                <li style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Link
                    to="/contact"
                    style={{ display: 'block', padding: '12px 0', color: '#282828', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonation();
                }}
                className="default-btn"
                style={{
                  width: '100%',
                  backgroundColor: '#f8b864',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                Donate Now
              </button>

              <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                <p style={{ fontSize: '13px', color: '#666', margin: '0 0 6px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} /> {NGO_DETAILS.displayPhone}
                </p>
                <p style={{ fontSize: '13px', color: '#666', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} /> {NGO_DETAILS.email}
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content jump under absolute/fixed header */}
      <div className="header-height" style={{ height: isSticky ? '85px' : '136px' }} />
    </>
  );
};

