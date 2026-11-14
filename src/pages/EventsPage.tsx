import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { EventsSection } from '../components/EventsSection';
import { BlogSection } from '../components/BlogSection';
import { SponsorsSection } from '../components/SponsorsSection';

export const EventsPage: React.FC = () => {
  return (
    <div className="events-page">
      <PageHeader
        title="Upcoming Events"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Events' }]}
      />

      {/* Events items list */}
      <EventsSection showHeading={false} />

      {/* Ready to Join With Us CTA Section matching Event.jpeg */}
      <section
        className="cta-section"
        style={{
          position: 'relative',
          backgroundImage: 'url(/assets/img/causes-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(20, 20, 20, 0.72)',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div className="col-md-8 xs-padding" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '38px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                Ready to Join With Us?
              </h2>
              <p style={{ color: '#e0e0e0', fontSize: '16px', lineHeight: '26px', margin: 0, maxWidth: '600px' }}>
                The secret to happiness lies in helping others. Never underestimate the difference the abused and the helpless.
              </p>
            </div>

            <div className="col-md-4 xs-padding text-right">
              <Link
                to="/contact"
                className="default-btn"
                style={{
                  backgroundColor: '#f8b864',
                  color: '#ffffff',
                  padding: '14px 34px',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 15px rgba(248, 184, 100, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                Contact With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Stories */}
      <BlogSection showHeading={true} />

      {/* Sponsors */}
      <SponsorsSection />
    </div>
  );
};

