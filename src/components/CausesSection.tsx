import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Tag } from 'lucide-react';
import { CAUSES_DATA } from '../data/siteData';
import { useDonation } from '../context/DonationContext';
import { Cause } from '../types';

interface CausesSectionProps {
  limit?: number;
  showHeading?: boolean;
}

export const CausesSection: React.FC<CausesSectionProps> = ({ limit, showHeading = true }) => {
  const { openDonation } = useDonation();
  const causes = limit ? CAUSES_DATA.slice(0, limit) : CAUSES_DATA;

  return (
    <section className="causes-section bg-grey bd-bottom padding" style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
      <div className="container">
        {showHeading && (
          <div className="section-heading text-center mb-40" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
              Our Active Causes
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
            <p style={{ color: '#666', fontSize: '16px', lineHeight: '26px', maxWidth: '650px', margin: '0 auto' }}>
              Join hands with Hindustan Manav Foundation to bring sustainable education, healthcare, and human dignity to underprivileged communities.
            </p>
          </div>
        )}

        <div className="causes-wrap row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {causes.map((cause: Cause) => (
            <div className="col-lg-4 col-md-6 col-12 xs-padding" key={cause.id} style={{ marginBottom: '30px' }}>
              <div
                className="cause-item-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #ededed',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Thumbnail Image */}
                <div className="cause-card-img-wrap" style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <img
                    src={cause.image}
                    alt={cause.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                  />

                  {/* Category Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      backgroundColor: 'rgba(40, 40, 40, 0.85)',
                      color: '#ffffff',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <Tag size={12} color="#f8b864" /> {cause.category}
                  </span>
                </div>

                {/* Details Body */}
                <div
                  className="cause-card-body"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '19px',
                        fontWeight: 700,
                        color: '#282828',
                        marginBottom: '12px',
                        lineHeight: '1.4',
                        minHeight: '2.8em',
                      }}
                    >
                      <Link
                        to={`/causes/${cause.id}`}
                        style={{ color: '#282828', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f8b864')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#282828')}
                      >
                        {cause.title}
                      </Link>
                    </h3>

                    <p
                      style={{
                        color: '#666',
                        fontSize: '14.5px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        minHeight: '4.5em',
                      }}
                    >
                      {cause.description}
                    </p>
                  </div>

                  {/* Card Actions Footer */}
                  <div
                    style={{
                      paddingTop: '16px',
                      borderTop: '1px solid #f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Link
                      to={`/causes/${cause.id}`}
                      className="read-more-link"
                      style={{
                        color: '#282828',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f8b864')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#282828')}
                    >
                      Read More <ArrowRight size={15} color="#f8b864" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => openDonation(cause.title)}
                      className="donate-action-btn"
                      style={{
                        backgroundColor: '#f8b864',
                        color: '#ffffff',
                        border: 'none',
                        padding: '8px 18px',
                        borderRadius: '4px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(248, 184, 100, 0.3)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e09e46')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8b864')}
                    >
                      <Heart size={14} fill="#ffffff" /> Donate Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
