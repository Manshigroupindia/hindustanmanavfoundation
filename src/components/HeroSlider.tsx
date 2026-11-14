import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data/siteData';
import { useDonation } from '../context/DonationContext';

const TYPING_PHRASES = [
  'Give a Little. Change a Lot.',
  'Empowering Underprivileged Communities.',
  'Quality Education for Every Child.',
  'Together for Humanity and Hope.',
  'Nutritious Food and Healthcare for All.',
  'Building Resilient Rural Communities.',
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openDonation } = useDonation();

  // Typing animation state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Background slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Continuous typing animation effect
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="slider-section" id="slider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        className="slider-wrapper"
        style={{
          position: 'relative',
          minHeight: '640px',
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.8s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dark overlay matching original theme */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.52)',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="slider-text text-center"
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: '70px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h5
              style={{
                color: '#f8b864',
                fontSize: '17px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              {slide.subheading}
            </h5>

            {/* Main title with typing animation - minHeight prevents layout jumping */}
            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(30px, 5.2vw, 54px)',
                fontWeight: 700,
                lineHeight: '1.25',
                marginBottom: '20px',
                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                textAlign: 'center',
                minHeight: '2.5em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span>{displayText}</span>
              <span className="hero-typing-cursor">|</span>
            </h1>

            <p
              style={{
                color: '#f0f0f0',
                fontSize: 'clamp(15px, 2vw, 18px)',
                lineHeight: '1.65',
                marginBottom: '36px',
                maxWidth: '680px',
                margin: '0 auto 36px auto',
                textAlign: 'center',
              }}
            >
              {slide.paragraph}
            </p>

            {/* CTA Buttons Centered */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link
                to={slide.btn1Link}
                className="default-btn"
                style={{
                  backgroundColor: '#f8b864',
                  color: '#fff',
                  padding: '14px 34px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 15px rgba(248, 184, 100, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                {slide.btn1Text}
              </Link>
              <button
                type="button"
                onClick={() => openDonation()}
                className="default-btn"
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '2px solid #fff',
                  padding: '12px 32px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#282828';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div
          style={{
            position: 'absolute',
            bottom: '25px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            zIndex: 3,
          }}
        >
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentSlide === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: currentSlide === idx ? '#f8b864' : 'rgba(255,255,255,0.6)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
