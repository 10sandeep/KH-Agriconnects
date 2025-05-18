import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './pages/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetails';
import ServiceEnroll from './pages/AgriculturalServiceEnrollment';
import LoadingScreen from './components/LoadingScreen';

// HomePage component
const HomePage = () => {
  useEffect(() => {
    document.title = 'KH Agriconnects | Agricultural Services';
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

// Team page component
const TeamPage = () => {
  useEffect(() => {
    document.title = 'Our Team | KH Agriconnects';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Team />
    </div>
  );
};

// Service Enrollment page component
const ServiceEnrollPage = () => {
  useEffect(() => {
    document.title = 'Service Enrollment | KH Agriconnects';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ServiceEnroll />
    </div>
  );
};

// Main App component with routing and loader
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Show loader for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/serviceEnrollment" element={<ServiceEnrollPage />} />
            <Route path="/service" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
