import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { CAUSES_DATA, NGO_DETAILS } from '../data/siteData';
import { Heart, ArrowLeft, CheckCircle2, MapPin, Users, Tag, Phone, Mail } from 'lucide-react';
import { useDonation } from '../context/DonationContext';

export const CauseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openDonation } = useDonation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const cause = CAUSES_DATA.find((c) => c.id === id) || CAUSES_DATA[0];

  if (!cause) {
    return (
      <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Cause Not Found</h2>
        <Link to="/causes" className="default-btn" style={{ marginTop: '20px' }}>
          Back to Causes
        </Link>
      </div>
    );
  }

  const otherCauses = CAUSES_DATA.filter((c) => c.id !== cause.id).slice(0, 4);

  return (
    <div className="cause-detail-page">
      <PageHeader
        title={cause.title}
        subtitle="Hindustan Manav Foundation Grassroots Welfare Initiative"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Causes', path: '/causes' },
          { label: cause.category },
        ]}
      />

      <section style={{ padding: '80px 0', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <Link
            to="/causes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#f8b864',
              fontWeight: 600,
              textDecoration: 'none',
              marginBottom: '30px',
              fontSize: '14px',
            }}
          >
            <ArrowLeft size={16} /> Back to all causes
          </Link>

          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Left Main Content */}
            <div className="col-lg-8 col-12" style={{ marginBottom: '40px' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #ebebeb',
                  padding: '35px',
                }}
              >
                {/* Hero Cause Image */}
                <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '30px', maxHeight: '420px' }}>
                  <img
                    src={cause.image}
                    alt={cause.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Metadata Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '14px',
                    marginBottom: '25px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#fff4e6',
                      color: '#d97706',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    <Tag size={14} /> {cause.category}
                  </span>

                  {cause.location && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 500,
                      }}
                    >
                      <MapPin size={14} color="#f8b864" /> {cause.location}
                    </span>
                  )}

                  {cause.beneficiaries && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 500,
                      }}
                    >
                      <Users size={14} color="#f8b864" /> {cause.beneficiaries}
                    </span>
                  )}
                </div>

                <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#282828', lineHeight: '1.3', marginBottom: '20px' }}>
                  {cause.title}
                </h1>

                {/* Detailed Narrative */}
                <div style={{ color: '#444', fontSize: '16.5px', lineHeight: '1.8', marginBottom: '35px' }}>
                  <p style={{ marginBottom: '20px' }}>
                    {cause.longDescription || cause.description}
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    Hindustan Manav Foundation works at the grassroots level with localized community engagement, ensuring that every welfare initiative directly reaches those who need it most. By removing middlemen and focusing on direct, transparent relief and skill building, our programs create sustainable pathways out of poverty.
                  </p>
                </div>

                {/* Key Objectives & Impact Highlights */}
                {cause.impactHighlights && cause.impactHighlights.length > 0 && (
                  <div style={{ marginBottom: '40px', backgroundColor: '#fbfbfb', padding: '25px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#282828', marginBottom: '18px' }}>
                      Key Initiatives & Expected Impact
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                      {cause.impactHighlights.map((highlight, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={18} color="#f8b864" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span style={{ fontSize: '14.5px', color: '#555', lineHeight: '1.5' }}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Donation Card */}
                <div
                  style={{
                    backgroundColor: '#fffdf9',
                    border: '2px dashed #f8b864',
                    borderRadius: '10px',
                    padding: '30px',
                    marginTop: '25px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#282828', margin: '0 0 6px 0' }}>
                        Support This Cause
                      </h3>
                      <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                        Your direct contribution funds essential supplies, meals, and education kits.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openDonation(cause.title)}
                      className="default-btn"
                      style={{
                        backgroundColor: '#f8b864',
                        color: '#fff',
                        padding: '12px 28px',
                        borderRadius: '4px',
                        fontSize: '15px',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 12px rgba(248, 184, 100, 0.35)',
                      }}
                    >
                      <Heart size={18} fill="#fff" /> Donate Now
                    </button>
                  </div>

                  {/* Bank Details Strip */}
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '18px',
                      borderRadius: '6px',
                      border: '1px solid #f2e1cc',
                      fontSize: '14px',
                      color: '#444',
                    }}
                  >
                    <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#282828' }}>
                      Direct Bank Transfer Details:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                      <div>
                        <span style={{ color: '#777', fontSize: '12.5px' }}>Account Name:</span>
                        <div style={{ fontWeight: 600 }}>{NGO_DETAILS.bank.accountName}</div>
                      </div>
                      <div>
                        <span style={{ color: '#777', fontSize: '12.5px' }}>Account Number:</span>
                        <div style={{ fontWeight: 600, letterSpacing: '0.5px' }}>{NGO_DETAILS.bank.accountNumber}</div>
                      </div>
                      <div>
                        <span style={{ color: '#777', fontSize: '12.5px' }}>IFSC Code:</span>
                        <div style={{ fontWeight: 600 }}>{NGO_DETAILS.bank.ifscCode}</div>
                      </div>
                      <div>
                        <span style={{ color: '#777', fontSize: '12.5px' }}>Bank Name:</span>
                        <div style={{ fontWeight: 600 }}>{NGO_DETAILS.bank.bankName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4 col-12">
              {/* Other Causes Widget */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #ebebeb',
                  marginBottom: '30px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#282828', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #f8b864' }}>
                  Other Causes
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {otherCauses.map((other) => (
                    <div
                      key={other.id}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'center',
                        cursor: 'pointer',
                        paddingBottom: '14px',
                        borderBottom: '1px solid #f4f4f4',
                      }}
                      onClick={() => navigate(`/causes/${other.id}`)}
                    >
                      <img
                        src={other.image}
                        alt={other.title}
                        style={{ width: '70px', height: '60px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                      />
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#282828', margin: '0 0 4px 0', lineHeight: '1.4' }}>
                          <Link to={`/causes/${other.id}`} style={{ color: '#282828', textDecoration: 'none' }}>
                            {other.title}
                          </Link>
                        </h4>
                        <span style={{ fontSize: '12px', color: '#f8b864', fontWeight: 600 }}>
                          {other.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer CTA Widget */}
              <div
                style={{
                  backgroundColor: '#282828',
                  color: '#ffffff',
                  borderRadius: '10px',
                  padding: '30px',
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  Join Us as a Volunteer
                </h3>
                <p style={{ color: '#ccc', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '22px' }}>
                  Be the catalyst for real change. Lend your time and skills to support community education and healthcare.
                </p>
                <Link
                  to="/volunteers"
                  className="default-btn"
                  style={{
                    backgroundColor: '#f8b864',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '100%',
                  }}
                >
                  Join With Us
                </Link>
              </div>

              {/* Contact Assistance Widget */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '25px',
                  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #ebebeb',
                }}
              >
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#282828', marginBottom: '15px' }}>
                  Need More Information?
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#555' }}>
                  <a href={`tel:${NGO_DETAILS.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555', textDecoration: 'none' }}>
                    <Phone size={16} color="#f8b864" /> {NGO_DETAILS.displayPhone}
                  </a>
                  <a href={`mailto:${NGO_DETAILS.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555', textDecoration: 'none' }}>
                    <Mail size={16} color="#f8b864" /> {NGO_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
