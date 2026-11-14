import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Mail, Phone, MapPin, CheckCircle, Send, Building2 } from 'lucide-react';
import { NGO_DETAILS } from '../data/siteData';
import { useDonation } from '../context/DonationContext';

export const ContactPage: React.FC = () => {
  const { openDonation } = useDonation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    // Frontend handling ready for backend API endpoint
    setStatus('success');
    setErrorMessage('');
  };

  return (
    <div className="contact-page">
      <PageHeader
        title="Contact With Us"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      {/* Map visual section */}
      <div style={{ width: '100%', height: '360px', backgroundColor: '#eaeaea', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hindustan Manav Foundation Location Map"
        />
      </div>

      {/* Floating Contact Box matching Contact Us.jpeg */}
      <section className="contact-section" style={{ position: 'relative', marginTop: '-80px', marginBottom: '80px', zIndex: 10 }}>
        <div className="container">
          <div
            className="contact-wrap"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
              padding: '60px 50px',
            }}
          >
            <div className="row">
              {/* Left Column: GET IN TOUCH */}
              <div className="col-md-6 xs-padding" style={{ marginBottom: '35px', paddingRight: '40px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#282828', marginBottom: '15px', textTransform: 'uppercase' }}>
                  Get In Touch
                </h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '26px', marginBottom: '18px' }}>
                  The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
                </p>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '26px', marginBottom: '30px' }}>
                  The secret to happiness lies in helping others. Never underestimate the difference.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <MapPin size={20} color="#f8b864" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ color: '#444', fontSize: '15px', lineHeight: '24px' }}>
                      {NGO_DETAILS.fullAddress}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <Phone size={20} color="#f8b864" style={{ flexShrink: 0 }} />
                    <a
                      href={`tel:${NGO_DETAILS.phone}`}
                      style={{ color: '#444', fontSize: '15px', textDecoration: 'none', fontWeight: 500 }}
                    >
                      {NGO_DETAILS.displayPhone}
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <Mail size={20} color="#f8b864" style={{ flexShrink: 0 }} />
                    <a
                      href={`mailto:${NGO_DETAILS.email}`}
                      style={{ color: '#444', fontSize: '15px', textDecoration: 'none', fontWeight: 500 }}
                    >
                      {NGO_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Quick Bank Details Note */}
                <div
                  style={{
                    marginTop: '30px',
                    padding: '16px 20px',
                    backgroundColor: '#fffaf0',
                    borderLeft: '4px solid #f8b864',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Building2 size={18} color="#d97706" />
                    <strong style={{ color: '#282828', fontSize: '14px' }}>Direct Bank Contributions:</strong>
                  </div>
                  <p style={{ color: '#666', fontSize: '13px', margin: '0 0 8px 0' }}>
                    Account: <strong>{NGO_DETAILS.bank.accountNumber}</strong> • IFSC: <strong>{NGO_DETAILS.bank.ifscCode}</strong> ({NGO_DETAILS.bank.bankName})
                  </p>
                  <button
                    type="button"
                    onClick={() => openDonation()}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#d97706',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                      padding: 0,
                      textDecoration: 'underline',
                    }}
                  >
                    View Full Bank Details & Support
                  </button>
                </div>
              </div>

              {/* Right Column: DROP US A LINE */}
              <div className="col-md-6 xs-padding">
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#282828', marginBottom: '15px', textTransform: 'uppercase' }}>
                  Drop Us A Line
                </h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '26px', marginBottom: '25px' }}>
                  Please fill out the form below with your inquiry, volunteer proposal, or donation query. We look forward to connecting with you.
                </p>

                {status === 'success' ? (
                  <div
                    style={{
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '8px',
                      padding: '30px 20px',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle size={44} color="#16a34a" style={{ marginBottom: '12px' }} />
                    <h4 style={{ color: '#15803d', fontSize: '20px', margin: '0 0 10px 0' }}>
                      Message Recorded Successfully!
                    </h4>
                    <p style={{ color: '#374151', fontSize: '14px', lineHeight: '22px', marginBottom: '16px' }}>
                      Thank you, <strong>{formData.name}</strong>. Your message is ready for processing. You may also contact us directly at{' '}
                      <a href={`mailto:${NGO_DETAILS.email}`} style={{ color: '#d97706', fontWeight: 600 }}>
                        {NGO_DETAILS.email}
                      </a>{' '}
                      or call{' '}
                      <a href={`tel:${NGO_DETAILS.phone}`} style={{ color: '#d97706', fontWeight: 600 }}>
                        {NGO_DETAILS.phone}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', phone: '', message: '' });
                        setStatus('idle');
                      }}
                      className="default-btn"
                      style={{
                        backgroundColor: '#f8b864',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {status === 'error' && (
                      <div
                        style={{
                          backgroundColor: '#fef2f2',
                          color: '#dc2626',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          marginBottom: '15px',
                          fontSize: '14px',
                        }}
                      >
                        {errorMessage}
                      </div>
                    )}

                    <div className="row" style={{ margin: '-6px' }}>
                      <div className="col-sm-6" style={{ padding: '6px', marginBottom: '12px' }}>
                        <input
                          type="text"
                          required
                          placeholder="Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fafafa',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div className="col-sm-6" style={{ padding: '6px', marginBottom: '12px' }}>
                        <input
                          type="email"
                          required
                          placeholder="Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fafafa',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '4px',
                          fontSize: '14px',
                          backgroundColor: '#fafafa',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <textarea
                        required
                        rows={5}
                        placeholder="Message *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '4px',
                          fontSize: '14px',
                          backgroundColor: '#fafafa',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="default-btn"
                      style={{
                        backgroundColor: '#f8b864',
                        color: '#ffffff',
                        padding: '14px 34px',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 15px rgba(248, 184, 100, 0.4)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Send Message <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

