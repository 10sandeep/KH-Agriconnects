import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scan, Brain, FlaskConical, Leaf, Building2, Layers, ChevronRight, Eye, BarChart3, Droplets, Satellite, Microscope } from 'lucide-react';

const subServices = [
  { icon: Scan,        label: 'Multispectral Drone Services',           id: 'multispectral' },
  { icon: Layers,      label: 'Hyperspectral Imaging Services',         id: 'hyperspectral' },
  { icon: Brain,       label: 'AI-Based Crop Analytics',                id: 'ai-analytics' },
  { icon: FlaskConical,label: 'Research & R&D Support',                 id: 'research' },
  { icon: Leaf,        label: 'Plantation & Seed Industry Solutions',   id: 'plantation' },
  { icon: Building2,   label: 'Government & Institutional Projects',    id: 'government' },
];

const outcomes = [
  { icon: Eye,        text: 'Early stress detection' },
  { icon: Scan,       text: 'Disease & pest mapping' },
  { icon: Droplets,   text: 'Nutrient diagnostics' },
  { icon: BarChart3,  text: 'Yield prediction' },
  { icon: Satellite,  text: 'Field variability mapping' },
  { icon: Microscope, text: 'Research-grade datasets' },
];

const PrecisionImagingSection: React.FC = () => {
  const navigate = useNavigate();

  const goTo = (id: string) => {
    navigate(`/precision-imaging#${id}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(134,239,172,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            New Service Vertical
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Precision Imaging &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Spectral Intelligence
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            NexKorla Agritech delivers scientific crop intelligence using drone-mounted multispectral and
            hyperspectral imaging systems integrated with AI, GIS and precision agriculture analytics.
            We support universities, ICAR institutes, seed companies, plantations, food industries and
            government agencies with actionable spectral insights.
          </p>
        </div>

        {/* Key outcomes chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {outcomes.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              <Icon size={14} className="text-green-400" />
              {text}
            </div>
          ))}
        </div>

        {/* Sub-service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {subServices.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="group text-left bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-green-500/15 flex items-center justify-center mb-4 group-hover:bg-green-500/25 transition-colors duration-200">
                <Icon className="text-green-400" size={22} />
              </div>
              <p className="text-white font-semibold leading-snug mb-2">{label}</p>
              <span className="text-green-400 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more <ChevronRight size={14} />
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/precision-imaging')}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-green-500/25"
          >
            Explore All Spectral Services <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrecisionImagingSection;
