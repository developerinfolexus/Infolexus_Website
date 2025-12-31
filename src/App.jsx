import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import { Loader2 } from 'lucide-react';
import Walkthrough from './components/ui/Walkthrough';

// Lazy Load Pages
const Home = lazy(() => import('./pages/homepage/Home'));
const Services = lazy(() => import('./pages/servicespage/Services'));
const HRServices = lazy(() => import('./pages/hrservicespage/HRServices'));
const HRServiceDetail = lazy(() => import('./pages/hrservicespage/HRServiceDetail'));
const About = lazy(() => import('./pages/aboutpage/About'));
const Technologies = lazy(() => import('./pages/technologiespage/Technologies'));
const Contact = lazy(() => import('./pages/contactpage/Contact'));
const ServiceDetail = lazy(() => import('./pages/servicedetailpage/ServiceDetail'));
const Clients = lazy(() => import('./pages/clientspage/Clients'));
const Career = lazy(() => import('./pages/careerpage/Career'));
const PricingPage = lazy(() => import('./components/ui/AnimatedPricingPage'));
const DigitalMarketing = lazy(() => import('./pages/digitalmarketingpage/DigitalMarketing'));
const DMServiceDetail = lazy(() => import('./pages/digitalmarketingpage/DMServiceDetail'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
  </div>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showIntro && (
          <Walkthrough key="walkthrough" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/hr-services" element={<HRServices />} />
              <Route path="/hr-services/:id" element={<HRServiceDetail />} />
              <Route path="/dm-services" element={<DigitalMarketing />} />
              <Route path="/dm-services/:id" element={<DMServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </Router>
  );
}

export default App;
