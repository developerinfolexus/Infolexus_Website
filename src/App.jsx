import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/homepage/Home';
import Services from './pages/servicespage/Services';
import HRServices from './pages/hrservicespage/HRServices';
import HRServiceDetail from './pages/hrservicespage/HRServiceDetail';
import About from './pages/aboutpage/About';
import Technologies from './pages/technologiespage/Technologies';
import Contact from './pages/contactpage/Contact';
import ServiceDetail from './pages/servicedetailpage/ServiceDetail';
import Clients from './pages/clientspage/Clients';
import Career from './pages/careerpage/Career';
import PricingPage from './components/ui/AnimatedPricingPage';
import DigitalMarketing from './pages/digitalmarketingpage/DigitalMarketing';
import DMServiceDetail from './pages/digitalmarketingpage/DMServiceDetail';

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
