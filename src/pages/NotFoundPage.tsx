import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page" style={{ padding: '100px 0 120px 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="error-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '120px',
              fontWeight: 800,
              color: '#282828',
              lineHeight: '1',
              margin: '0 0 20px 0',
              letterSpacing: '-2px',
            }}
          >
            404!
          </h1>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 600,
              color: '#282828',
              marginBottom: '12px',
            }}
          >
            Oops! Page Not Found
          </h3>
          <p
            style={{
              color: '#666',
              fontSize: '16px',
              lineHeight: '26px',
              marginBottom: '35px',
            }}
          >
            The page you were looking for could not be found.
          </p>
          <Link
            to="/"
            className="default-btn"
            style={{
              backgroundColor: '#f8b864',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '4px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(248, 184, 100, 0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

