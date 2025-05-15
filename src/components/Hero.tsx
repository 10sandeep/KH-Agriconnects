import React, { useEffect, useState } from 'react';
import { Tractor, Leaf, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullTagline = "Powering Farms with Tech Tools and Trusted Trade";
  const [typingComplete, setTypingComplete] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  
  // Handle the entrance animation
  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - (scrollPosition / 500);
      setScrollOpacity(Math.max(newOpacity, 0));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Modern Background with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')`,
            opacity: loaded ? 0.4 : 0,
            transform: loaded ? 'scale(1.0)' : 'scale(1.05)'
          }}
        ></div>
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-green-900/60"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNNTQuMDEgNDkuOTk5TTI5Ljk5OCAyOS45OThMNS45ODUgNS45ODQiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTMwIDYwVjAiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik02MCAwSDAiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute text-green-500 opacity-10 top-1/4 left-1/4 w-16 h-16 animate-float-slow" />
        <Leaf className="absolute text-green-500 opacity-10 bottom-1/4 right-1/4 w-12 h-12 animate-float" />
        <Tractor className="absolute text-green-500 opacity-8 bottom-24 right-24 w-20 h-20 animate-float-reverse" />
      </div>

      {/* Main Content Container */}
      <div 
        className="container mx-auto px-4 z-10 text-white relative pt-16 md:pt-0"
        style={{ opacity: scrollOpacity }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo and Company Name */}
            <div className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center mb-6 mt-16 md:mt-0">
                <div className="relative mr-4">
                  <Tractor className="h-10 w-10 md:h-12 md:w-12 text-green-500 z-10 relative" />
                  <div className="absolute -inset-1 bg-green-500 rounded-full filter blur-md opacity-30"></div>
                </div>
                <div className="h-10 w-px bg-green-500/30 mx-2 md:mx-4"></div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  <span className="text-green-500">KH</span> AGRICONNECTS
                </h1>
              </div>
            </div>
            
            {/* Tagline with Typing Effect */}
            <div className="relative mb-6 md:mb-8 mt-2">
              <h2 className="text-xl md:text-3xl font-medium text-green-200 tracking-wide">
                <span>{typedText}</span>
                <span className={`inline-block w-1 ml-1 bg-green-400 ${typingComplete ? 'animate-pulse' : 'animate-blink'}`}>&nbsp;</span>
              </h2>
            </div>
            
            {/* Decorative Separator */}
            <div className="flex items-center justify-center w-full mb-6 md:mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent w-24 md:w-32"></div>
              <div className="mx-4 h-2 w-2 rounded-full bg-green-500"></div>
              <div className="h-px bg-gradient-to-r from-green-500/50 via-green-500/50 to-transparent w-24 md:w-32"></div>
            </div>
            
            {/* Main Description */}
            <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-base md:text-xl font-light leading-relaxed text-gray-100">
                We are a sustainable agricultural solutions provider passionate about transforming rural livelihoods. 
                Rooted in innovation, driven by collaboration, and guided by sustainability, we deliver end-to-end farm 
                mechanization and market-linkage services to empower farmers, agri-entrepreneurs, and communities.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-500 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 md:px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-600/20 flex items-center justify-center group cursor-pointer"
              >
                <span>Discover Our Services</span>
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 md:px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-medium rounded-lg transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 md:bottom-12 left-0 right-0 flex flex-col items-center justify-center animate-bounce cursor-pointer"
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-green-400 text-sm font-light mb-2 tracking-widest">SCROLL</span>
        <ChevronDown className="text-green-500 h-6 w-6" />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 0.8s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float 10s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default Hero;