import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { PromoSection } from '../components/PromoSection';
import { CausesSection } from '../components/CausesSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturedCampaign } from '../components/FeaturedCampaign';
import { VolunteersSection } from '../components/VolunteersSection';
import { CounterSection } from '../components/CounterSection';
import { EventsSection } from '../components/EventsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { SponsorsSection } from '../components/SponsorsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <PromoSection />
      <CausesSection limit={3} showHeading={true} />
      <AboutSection />
      <FeaturedCampaign />
      <VolunteersSection showHeading={true} />
      <CounterSection />
      <EventsSection showHeading={true} />
      <TestimonialsSection />
      <BlogSection showHeading={true} />
      <SponsorsSection />
    </div>
  );
};

