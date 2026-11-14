import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CausesSection } from '../components/CausesSection';
import { FeaturedCampaign } from '../components/FeaturedCampaign';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { SponsorsSection } from '../components/SponsorsSection';

export const CausesPage: React.FC = () => {
  return (
    <div className="causes-page">
      <PageHeader
        title="Recent Causes"
        subtitle="Help today because tomorrow you may be the one who needs more helping!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Causes' }]}
      />

      {/* Grid of All 8 Active Causes */}
      <CausesSection showHeading={false} />

      {/* Featured Campaign */}
      <FeaturedCampaign />

      {/* What People Say */}
      <TestimonialsSection />

      {/* Recent Stories */}
      <BlogSection showHeading={true} />

      {/* Sponsors */}
      <SponsorsSection />
    </div>
  );
};

