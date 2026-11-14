import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/siteData';

interface BlogSectionProps {
  showHeading?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ showHeading = true }) => {
  return (
    <section className="blog-section bg-grey bd-bottom padding" style={{ backgroundColor: '#f9f9f9', padding: '90px 0' }}>
      <div className="container">
        {showHeading && (
          <div className="section-heading text-center mb-40" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#282828', marginBottom: '12px' }}>
              Recent Stories
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
            <p style={{ color: '#666', fontSize: '16px', lineHeight: '26px' }}>
              Help today because tomorrow you may be the one who <br /> needs more helping!
            </p>
          </div>
        )}

        <div className="row">
          <div className="col-lg-12 xs-padding">
            <div className="blog-items grid-list row">
              {BLOG_POSTS.map((post) => (
                <div className="col-md-4 padding-15" key={post.id} style={{ marginBottom: '30px' }}>
                  <div
                    className="blog-post"
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                    </Link>

                    <div
                      className="blog-content"
                      style={{
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1,
                      }}
                    >
                      <div>
                        <span
                          className="date"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#f8b864',
                            fontSize: '13px',
                            fontWeight: 500,
                            marginBottom: '10px',
                          }}
                        >
                          <Clock size={14} /> {post.date}
                        </span>

                        <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#282828', marginBottom: '12px', lineHeight: '26px' }}>
                          <Link to={`/blog/${post.id}`} style={{ color: '#282828', textDecoration: 'none' }}>
                            {post.title}
                          </Link>
                        </h3>

                        <p style={{ color: '#666', fontSize: '14px', lineHeight: '24px', marginBottom: '20px' }}>
                          {post.excerpt}
                        </p>
                      </div>

                      <div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="post-meta"
                          style={{
                            color: '#282828',
                            fontSize: '14px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            borderBottom: '2px solid #f8b864',
                            paddingBottom: '2px',
                            display: 'inline-block',
                          }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

