import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; path?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = 'Help today because tomorrow you may be the one who needs more helping!',
  breadcrumbs,
}) => {
  return (
    <section
      className="pager-header"
      style={{
        position: 'relative',
        backgroundImage: 'url(/assets/img/video.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0 80px 0',
        minHeight: '320px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Dark overlay matching screenshot */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(20, 20, 20, 0.68)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '650px' }}>
          <h2
            style={{
              color: '#ffffff',
              fontSize: '44px',
              fontWeight: 700,
              marginBottom: '10px',
              letterSpacing: '-0.5px',
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              style={{
                color: '#e0e0e0',
                fontSize: '16px',
                lineHeight: '26px',
                marginBottom: '20px',
              }}
            >
              {subtitle}
            </p>
          )}

          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb"
              style={{
                display: 'inline-flex',
                gap: '8px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {idx > 0 && <span style={{ color: '#ffffff', margin: '0 8px' }}>/</span>}
                  {crumb.path ? (
                    <Link to={crumb.path} style={{ color: '#ffffff', textDecoration: 'none' }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: '#f8b864' }}>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

