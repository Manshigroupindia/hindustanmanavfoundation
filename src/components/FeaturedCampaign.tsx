import React, { useState } from 'react';
import { Play, Heart, CheckCircle2 } from 'lucide-react';
import { useDonation } from '../context/DonationContext';
import { VideoModal } from './VideoModal';

export const FeaturedCampaign: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { openDonation } = useDonation();

  return (
    <>
      <section
        className="campaigns-section bd-bottom"
        style={{
          position: 'relative',
          backgroundImage: 'url(/assets/img/slider-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '100px 0',
          overflow: 'hidden',
        }}
      >
        {/* Professional dark gradient overlay for optimal readability without losing image texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15, 19, 26, 0.88) 0%, rgba(20, 25, 35, 0.76) 60%, rgba(15, 19, 26, 0.85) 100%)',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 xs-padding" style={{ marginBottom: '35px' }}>
              <div
                className="campaigns-wrap"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#f8b864',
                    color: '#ffffff',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '18px',
                    boxShadow: '0 2px 8px rgba(248, 184, 100, 0.3)',
                  }}
                >
                  Featured Campaign
                </span>

                <h2
                  style={{
                    fontSize: 'clamp(28px, 4vw, 38px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: '1.25',
                    marginBottom: '18px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  }}
                >
                  Education & Welfare Center for Underprivileged Children
                </h2>

                <p
                  style={{
                    color: '#e2e8f0',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    marginBottom: '25px',
                    textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  }}
                >
                  Hindustan Manav Foundation is actively establishing community learning centers to ensure every underprivileged child receives foundational literacy, nutrition, and holistic care. Your direct support builds real classrooms and lights up young lives.
                </p>

                {/* Impact Points */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px',
                    marginBottom: '32px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
                    <CheckCircle2 size={18} color="#f8b864" style={{ flexShrink: 0 }} />
                    <span>Free Books & Learning Kits</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
                    <CheckCircle2 size={18} color="#f8b864" style={{ flexShrink: 0 }} />
                    <span>Daily Nutritious Meals</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
                    <CheckCircle2 size={18} color="#f8b864" style={{ flexShrink: 0 }} />
                    <span>Certified Volunteer Teachers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
                    <CheckCircle2 size={18} color="#f8b864" style={{ flexShrink: 0 }} />
                    <span>100% Direct Welfare Impact</span>
                  </div>
                </div>

                {/* Donation CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => openDonation('Education & Welfare Center for Underprivileged Children')}
                    className="default-btn"
                    style={{
                      backgroundColor: '#f8b864',
                      color: '#ffffff',
                      padding: '14px 34px',
                      borderRadius: '4px',
                      fontSize: '15px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 18px rgba(248, 184, 100, 0.4)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Heart size={18} fill="#ffffff" /> Donate Now
                  </button>

                  <span style={{ color: '#cbd5e1', fontSize: '14px' }}>
                    Transparent bank transfers directly to HMF
                  </span>
                </div>
              </div>
            </div>

            {/* Right Video Wrap */}
            <div className="col-lg-6 col-md-12 xs-padding" style={{ marginBottom: '35px' }}>
              <div
                className="video-wrap"
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <img
                  src="/assets/img/video.jpg"
                  alt="Hindustan Manav Foundation Video"
                  style={{ width: '100%', height: '390px', objectFit: 'cover', display: 'block' }}
                />
                {/* Subtle dark gradient overlay on video thumbnail */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.25)',
                  }}
                />
                <div
                  className="play"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    aria-label="Play video"
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(248, 184, 100, 0.95)',
                      border: '4px solid #ffffff',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      boxShadow: '0 0 30px rgba(248, 184, 100, 0.7)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.backgroundColor = '#f8b864';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgba(248, 184, 100, 0.95)';
                    }}
                  >
                    <Play size={30} fill="#ffffff" style={{ marginLeft: '4px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
};
