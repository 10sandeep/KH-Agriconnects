import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './pages/Team'; // Team page
// import Events from './components/Events';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetails';
import ServiceEnroll from './pages/AgriculturalServiceEnrollment'; // Service enrollment page

// HomePage component (without Team)
const HomePage = () => {
  useEffect(() => {
    document.title = 'KH Agriconnects | Agricultural Services';
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      {/* <Events /> */}
      {/* <Testimonials /> */}
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
    <div className="min-h-screen pt-16"> {/* pt-16 for fixed navbar spacing */}
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
    <div className="min-h-screen pt-16"> {/* pt-16 for fixed navbar spacing */}
      <ServiceEnroll />
    </div>
  );
};

// Main App component with routing
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/serviceEnrollment" element={<ServiceEnrollPage />} />
            <Route path="/service" element={<ServiceDetail />} /> {/* Service detail */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;