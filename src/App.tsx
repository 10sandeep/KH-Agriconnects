import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './pages/Team'; // Note this is importing from pages folder
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main HomePage component that includes all sections EXCEPT Team
const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'KH Agriconnects | Agricultural Services';
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      {/* Team component removed from HomePage */}
      <Events />
      <Testimonials />
      <Contact />
    </div>
  );
};

// TeamPage component that displays only the Team component
const TeamPage = () => {
  useEffect(() => {
    // Update page title for Team page
    document.title = 'Our Team | KH Agriconnects';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Added pt-16 to account for fixed navbar */}
      <Team />
    </div>
  );
};

// Main App component with routing
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;