import React, { useEffect, useState } from 'react';
import { Tractor } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullTagline = "Powering Farms with Tech Tools and Trusted Trade";
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Handle the entrance animation
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Handle the typing effect
  useEffect(() => {
    if (typedText.length < fullTagline.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullTagline.slice(0, typedText.length + 1));
      }, 100); // Speed of typing
      
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, fullTagline]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')`,
        }}
      ></div>

      {/* Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/80"></div>
      
      {/* Simple Tractor Icon in background */}
      <div className="absolute right-10 bottom-10 opacity-20">
        <Tractor size={120} className="text-green-500" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-white relative text-center">
        <div className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <Tractor className="h-16 w-16 text-green-500" />
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-green-500">KH</span> AGRICONNECT
          </h1>
          
          {/* Tagline with Typing Effect */}
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-green-200 h-12">
            <span>{typedText}</span>
            <span className={`inline-block w-1 ml-1 bg-green-400 ${typingComplete ? 'animate-pulse' : 'animate-blink'}`}>&nbsp;</span>
          </h2>
          
          {/* Description - Appears after typing completes */}
          <div className={`max-w-3xl mx-auto transition-opacity duration-1000 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl mb-10 font-light leading-relaxed">
              We are a sustainable agricultural solutions provider passionate about transforming rural livelihoods. 
              Rooted in innovation, driven by collaboration, and guided by sustainability, we deliver end-to-end farm 
              mechanization and market-linkage services to empower farmers, agri-entrepreneurs, and communities.
            </p>
          </div>
          
          {/* Simple green accent line */}
          <div className={`h-1 w-40 bg-green-500 mx-auto mt-8 transition-all duration-1000 ${typingComplete ? 'opacity-100 w-40' : 'opacity-0 w-0'}`}></div>
        </div>
      </div>
      
      {/* Adding the blinking cursor animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
