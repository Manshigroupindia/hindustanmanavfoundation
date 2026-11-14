import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { BLOG_POSTS, NGO_DETAILS } from '../data/siteData';
import { Clock, User, ArrowLeft, Heart } from 'lucide-react';
import { useDonation } from '../context/DonationContext';

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { openDonation } = useDonation();

  const post = BLOG_POSTS.find((p) => p.id === id) || BLOG_POSTS[0];

  return (
    <div className="blog-detail-page">
      <PageHeader
        title={post.title}
        subtitle="Hindustan Manav Foundation Community Story"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: 'Story Details' },
        ]}
      />

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Link
                to="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#f8b864',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginBottom: '25px',
                  fontSize: '14px',
                }}
              >
                <ArrowLeft size={16} /> Back to all stories
              </Link>

              <h1 style={{ fontSize: '38px', fontWeight: 700, color: '#282828', lineHeight: '48px', marginBottom: '20px' }}>
                {post.title}
              </h1>

              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  marginBottom: '30px',
                  color: '#888',
                  fontSize: '14px',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '15px',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="#f8b864" /> {post.date}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <User size={16} color="#f8b864" /> {post.author || NGO_DETAILS.name}
                </span>
              </div>

              <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '35px', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div style={{ color: '#444', fontSize: '17px', lineHeight: '30px', marginBottom: '40px' }}>
                <p style={{ marginBottom: '20px' }}>
                  {post.content || post.excerpt}
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Social welfare is not merely an act of kindness—it is a collaborative pledge to ensure every citizen has equitable access to dignity, basic nutrition, learning facilities, and developmental resources. In every outreach drive conducted by Hindustan Manav Foundation, volunteers witness firsthand how even modest assistance can spark genuine smiles and renewed optimism.
                </p>
                <blockquote
                  style={{
                    backgroundColor: '#fffaf0',
                    borderLeft: '4px solid #f8b864',
                    padding: '20px 25px',
                    margin: '30px 0',
                    fontStyle: 'italic',
                    color: '#555',
                    fontSize: '18px',
                    lineHeight: '28px',
                  }}
                >
                  "The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless."
                </blockquote>
                <p>
                  As we continue our ongoing programs, we invite individuals, educators, professionals, and community leaders to join our mission. Through collective solidarity, we build stronger communities for tomorrow.
                </p>
              </div>

              {/* Call to action inside post */}
              <div
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '8px',
                  border: '1px solid #f0f0f0',
                  padding: '30px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#282828', marginBottom: '10px' }}>
                  Support This Initiative
                </h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '24px', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px auto' }}>
                  Your contribution powers grassroots relief, educational materials, and healthcare essentials for underprivileged children.
                </p>
                <button
                  type="button"
                  onClick={() => openDonation(post.title)}
                  className="default-btn"
                  style={{
                    backgroundColor: '#f8b864',
                    color: '#ffffff',
                    padding: '12px 30px',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Heart size={16} /> Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

