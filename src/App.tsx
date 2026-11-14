import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DonationProvider, useDonation } from './context/DonationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CausesPage } from './pages/CausesPage';
import { CauseDetailPage } from './pages/CauseDetailPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { VolunteersPage } from './pages/VolunteersPage';
import { ContactPage } from './pages/ContactPage';
import { DonatePage } from './pages/DonatePage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route navigation
const RouteChangeScroll: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Toast Notification Banner Component
const GlobalToast: React.FC = () => {
  const { toastMessage } = useDonation();
  if (!toastMessage) return null;

  return (
    <div className="toast-notice" role="alert">
      <span>{toastMessage}</span>
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <RouteChangeScroll />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/causes/:id" element={<CauseDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
          <Route path="/team" element={<VolunteersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <DonationModal />
      <ScrollToTop />
      <GlobalToast />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DonationProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DonationProvider>
  );
};

export default App;
