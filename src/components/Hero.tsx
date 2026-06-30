import React, { useEffect, useState } from 'react';
import { ChevronDown, Sprout, TrendingUp, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Farmers Empowered', value: '500+' },
  { icon: Sprout, label: 'Acres Covered', value: '2,000+' },
  { icon: TrendingUp, label: 'Services Offered', value: '7+' },
  { icon: Globe, label: 'Market Reach', value: 'Global' },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallax = scrollY * 0.4;
  const fadeOut = Math.max(1 - scrollY / 400, 0);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#071209]">

      {/* Primary background image — lush farm field */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${parallax}px) scale(1.12)`,
          opacity: 0.45,
        }}
      />

      {/* Deep gradient over image for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

      {/* Green tint wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/60 via-transparent to-emerald-950/40" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-400/8 blur-[100px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(134,239,172,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top-left and bottom-right corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/10 to-transparent pointer-events-none" />

      {/* Animated floating orbs */}
      <div className="absolute top-1/4 right-12 w-3 h-3 rounded-full bg-green-400/40 blur-sm animate-pulse" />
      <div className="absolute top-2/3 left-16 w-2 h-2 rounded-full bg-emerald-300/50 blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-green-300/40 blur-sm animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main content */}
      <div
        className="relative z-10 container mx-auto px-6 pt-28 pb-20"
        style={{ opacity: fadeOut }}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium tracking-wide mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Transforming Indian Agriculture
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Powering Farms with{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Tech Tools
              </span>
            </span>{' '}
            &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-500">
              Trusted Trade
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`max-w-2xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            NexKorla Agritech delivers end-to-end farm mechanization, capacity building, and global market access — empowering farmers, agri-entrepreneurs, and rural communities across India.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-green-400/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Divider */}
          <div
            className={`w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-12 transition-all duration-700 delay-400 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-white/8 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-green-400" />
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className="text-xs text-gray-400 text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce cursor-pointer z-10"
        style={{ opacity: fadeOut }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-green-400/70 text-xs tracking-widest font-light">SCROLL</span>
        <ChevronDown className="w-5 h-5 text-green-400/70" />
      </div>
    </section>
  );
};

export default Hero;
