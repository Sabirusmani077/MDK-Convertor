import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LoginModal } from './components/auth/LoginModal';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ConverterToolPage } from './pages/ConverterToolPage';
import { ImageConverterHubPage } from './pages/ImageConverterHubPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <LoginModal />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Dedicated High-Intent SEO Routes */}
              <Route path="/png-to-jpg" element={<ConverterToolPage toolSlug="png-to-jpg" />} />
              <Route path="/jpg-to-png" element={<ConverterToolPage toolSlug="jpg-to-png" />} />
              <Route path="/jpg-to-pdf" element={<ConverterToolPage toolSlug="jpg-to-pdf" />} />
              <Route path="/png-to-pdf" element={<ConverterToolPage toolSlug="png-to-pdf" />} />
              <Route path="/image-to-pdf" element={<ConverterToolPage toolSlug="image-to-pdf" />} />
              <Route path="/pdf-to-jpg" element={<ConverterToolPage toolSlug="pdf-to-jpg" />} />
              <Route path="/jpeg-to-pdf" element={<ConverterToolPage toolSlug="jpeg-to-pdf" />} />
              <Route path="/jpeg-to-png" element={<ConverterToolPage toolSlug="jpeg-to-png" />} />

              {/* General Dynamic Route for any additional tools */}
              <Route path="/convert/:slug" element={<ConverterToolPage />} />

              {/* User Dashboard */}
              <Route path="/dashboard" element={<DashboardPage />} />

              {/* Hub and Company Pages */}
              <Route path="/image-converter" element={<ImageConverterHubPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
