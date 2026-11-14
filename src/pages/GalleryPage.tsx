import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SponsorsSection } from '../components/SponsorsSection';
import { GALLERY_ITEMS } from '../data/siteData';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Branding', 'Design', 'Wordpress', 'Marketing'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="gallery-page">
      <PageHeader
        title="Image Gallery"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      <section className="gallery-section padding" style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Filter Navigation matching Gallery.jpeg */}
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <ul
              className="gallery-filter"
              style={{
                display: 'inline-flex',
                gap: '10px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    style={{
                      padding: '10px 24px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: activeFilter === filter ? '1px solid #f8b864' : '1px solid #e5e5e5',
                      backgroundColor: activeFilter === filter ? '#f8b864' : '#ffffff',
                      color: activeFilter === filter ? '#ffffff' : '#555555',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery Items Grid */}
          <div className="row gallery-items" style={{ margin: '-15px' }}>
            {filteredItems.map((item) => (
              <div className="col-lg-4 col-md-6 xs-padding" key={item.id} style={{ padding: '15px' }}>
                <div
                  className="gallery-item-box"
                  style={{
                    position: 'relative',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    height: '270px',
                  }}
                  onClick={() => setActiveImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Hover Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(248, 184, 100, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: '#ffffff',
                      padding: '20px',
                      textAlign: 'center',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  >
                    <ZoomIn size={32} style={{ marginBottom: '10px' }} />
                    <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 600, margin: '0 0 5px 0' }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="modal-close-btn"
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                color: '#fff',
                fontSize: '24px',
              }}
              aria-label="Close Lightbox"
            >
              <X size={26} />
            </button>
            <img src={activeImage.image} alt={activeImage.title} className="lightbox-img" />
            <div style={{ color: '#ffffff', marginTop: '15px' }}>
              <h3 style={{ color: '#fff', fontSize: '20px', margin: '0 0 4px 0' }}>{activeImage.title}</h3>
              <p style={{ color: '#f8b864', fontSize: '14px', margin: 0 }}>Category: {activeImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Sponsors */}
      <SponsorsSection />
    </div>
  );
};

