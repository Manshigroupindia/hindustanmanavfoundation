import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BlogSection } from '../components/BlogSection';
import { SponsorsSection } from '../components/SponsorsSection';

export const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <PageHeader
        title="Recent Stories"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Blog' }]}
      />

      <BlogSection showHeading={false} />

      <SponsorsSection />
    </div>
  );
};

