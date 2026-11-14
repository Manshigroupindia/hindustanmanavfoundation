import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, X } from 'lucide-react';
import { EVENTS_DATA } from '../data/siteData';
import { EventItem } from '../types';

interface EventsSectionProps {
  showHeading?: boolean;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ showHeading = true }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section className="events-section bg-grey bd-bottom padding" style={{ backgroundColor: '#f9f9f9', padding: '90px 0' }}>
      <div className="container">
        {showHeading && (
          <div className="section-heading text-center mb-40" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
              Upcoming Events & Welfare Camps
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
              Participate in our upcoming community welfare camps, educational kit distributions, and grassroots awareness drives.
            </p>
          </div>
        )}

        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {EVENTS_DATA.map((event) => (
            <div className="col-lg-4 col-md-6 col-12" key={event.id} style={{ marginBottom: '30px' }}>
              <div
                className="event-item-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #ebebeb',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Event Image */}
                <div className="event-card-img-wrap" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                  />

                  {/* Badge */}
                  {event.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: '#f8b864',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      }}
                    >
                      {event.badge}
                    </span>
                  )}

                  {/* Date badge on top right */}
                  {event.date && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        right: '14px',
                        backgroundColor: 'rgba(20, 24, 30, 0.85)',
                        backdropFilter: 'blur(4px)',
                        color: '#ffffff',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <Calendar size={13} color="#f8b864" /> {event.date}
                    </span>
                  )}
                </div>

                {/* Event Content Body */}
                <div
                  className="event-card-content"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Time & Location Metadata */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        marginBottom: '14px',
                        fontSize: '13.5px',
                        color: '#666',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={15} color="#f8b864" style={{ flexShrink: 0 }} />
                        <span>{event.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={15} color="#f8b864" style={{ flexShrink: 0 }} />
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#282828',
                        marginBottom: '12px',
                        lineHeight: '1.4',
                        minHeight: '2.8em',
                      }}
                    >
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: '#666',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        minHeight: '4.2em',
                      }}
                    >
                      {event.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div
                    style={{
                      paddingTop: '16px',
                      borderTop: '1px solid #f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(event)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#282828',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f8b864')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#282828')}
                    >
                      Event Details <ArrowRight size={15} color="#f8b864" />
                    </button>

                    <Link
                      to="/volunteers"
                      style={{
                        backgroundColor: '#f8b864',
                        color: '#ffffff',
                        padding: '6px 14px',
                        borderRadius: '4px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e09e46')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f8b864')}
                    >
                      Join as Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedEvent(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            className="modal-content-box"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              maxWidth: '600px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              <X size={18} />
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
            />

            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap', fontSize: '14px', color: '#666' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={16} color="#f8b864" /> {selectedEvent.date || 'Upcoming'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={16} color="#f8b864" /> {selectedEvent.time}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={16} color="#f8b864" /> {selectedEvent.location}
                </span>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#282828', marginBottom: '15px' }}>
                {selectedEvent.title}
              </h2>

              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' }}>
                {selectedEvent.description}
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Link
                  to="/volunteers"
                  onClick={() => setSelectedEvent(null)}
                  style={{
                    backgroundColor: '#f8b864',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Register as Volunteer
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  style={{
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
