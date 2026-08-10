import React, { useEffect } from 'react';
import {
  Scan, Brain, FlaskConical, Leaf, Building2, Satellite,
  ChevronRight, CheckCircle2, Users, Package, Layers,
  BarChart3, Droplets, Eye, Microscope, Star
} from 'lucide-react';

const subServices = [
  {
    id: 'multispectral',
    icon: Scan,
    title: 'Multispectral Drone Services',
    color: 'green',
    what: [
      'RGB + multispectral drone surveys',
      'NDVI, NDRE, GNDVI and SAVI vegetation maps',
      'Plot-wise crop health reports',
      'Temporal crop growth monitoring',
      'Prescription zone mapping for variable input application',
    ],
    clients: ['Farmers and FPOs', 'Seed companies', 'Sugarcane, cotton, paddy and horticulture sectors', 'Irrigation projects', 'Agri-input companies'],
    deliverables: ['Geo-referenced orthomosaic', 'Vegetation index maps', 'Stress hotspot maps', 'PDF management report', 'GIS-ready data files'],
  },
  {
    id: 'hyperspectral',
    icon: Layers,
    title: 'Hyperspectral Imaging Services',
    color: 'blue',
    what: [
      'Narrow-band spectral data acquisition (400–2500 nm)',
      'Canopy reflectance profiling',
      'Pigment, moisture and biochemical content mapping',
      'Spectral signature libraries for crop varieties',
      'Anomaly detection for disease and contamination',
    ],
    clients: ['ICAR and university research stations', 'Seed and plant breeding companies', 'Food & processing industry labs', 'Pharmaceutical agri-research units'],
    deliverables: ['Hyperspectral cubes (ENVI/TIFF)', 'Band-ratio and derivative maps', 'Spectral signature reports', 'Peer-review ready datasets'],
  },
  {
    id: 'ai-analytics',
    icon: Brain,
    title: 'AI-Based Crop Analytics',
    color: 'purple',
    what: [
      'Machine learning models trained on field spectral data',
      'Automated disease and pest classification',
      'Nutrient deficiency prediction models',
      'Yield estimation algorithms',
      'Time-series crop growth analytics dashboard',
    ],
    clients: ['Progressive farmers seeking data-driven decisions', 'Agri-insurance companies', 'State agriculture departments', 'Agri-tech startups'],
    deliverables: ['AI-generated field intelligence reports', 'Interactive analytics dashboard access', 'Prescription map outputs', 'Seasonal trend summaries'],
  },
  {
    id: 'research',
    icon: FlaskConical,
    title: 'Research & R&D Support',
    color: 'amber',
    what: [
      'Custom experimental plot imaging',
      'Spectral data collection for academic trials',
      'Ground truth data collection and validation',
      'Co-authorship and technical collaboration support',
      'Multi-season longitudinal datasets',
    ],
    clients: ['ICAR institutes and KVKs', 'Agricultural universities', 'PhD and post-doctoral researchers', 'International research collaborations'],
    deliverables: ['Publication-grade spectral datasets', 'Annotated field image archives', 'Statistical analysis outputs', 'Technical reports and co-authored papers'],
  },
  {
    id: 'plantation',
    icon: Leaf,
    title: 'Plantation & Seed Industry Solutions',
    color: 'emerald',
    what: [
      'Tea, coffee, coconut, oil palm and cashew health monitoring',
      'Canopy vigor and stress assessment',
      'Hybrid purity and variety discrimination',
      'Seed production plot monitoring',
      'Off-type and weed detection in seed plots',
    ],
    clients: ['Tea and coffee estate managers', 'Coconut and oil palm growers', 'Seed production companies', 'Plantation crop research centres'],
    deliverables: ['Canopy health maps', 'Variety purity reports', 'Spectral discrimination analysis', 'Plot-wise management recommendations'],
  },
  {
    id: 'government',
    icon: Building2,
    title: 'Government & Institutional Projects',
    color: 'sky',
    what: [
      'Crop area estimation and acreage verification',
      'Crop insurance loss assessment (PMFBY)',
      'Drought and flood damage mapping',
      'Precision agriculture scheme implementation support',
      'State-level GIS crop monitoring dashboards',
    ],
    clients: ['State agriculture departments', 'NABARD and rural finance institutions', 'Crop insurance agencies', 'District-level precision agriculture missions'],
    deliverables: ['Geo-tagged damage assessment reports', 'GIS-integrated crop maps', 'Compliance-ready documentation', 'Policy support data packages'],
  },
];

const keyOutcomes = [
  { icon: Eye, text: 'Early stress detection before visible symptoms' },
  { icon: Scan, text: 'Disease and pest hotspot mapping' },
  { icon: Droplets, text: 'Nutrient deficiency diagnostics' },
  { icon: BarChart3, text: 'Irrigation and water stress assessment' },
  { icon: Leaf, text: 'Crop vigor and biomass estimation' },
  { icon: Satellite, text: 'Yield prediction and field variability mapping' },
  { icon: Microscope, text: 'Research-grade spectral datasets for publications' },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string; bullet: string }> = {
  green:   { bg: 'bg-green-50',   border: 'border-green-200',  icon: 'text-green-600',  badge: 'bg-green-100 text-green-700',  bullet: 'bg-green-100 text-green-600' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',   icon: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',    bullet: 'bg-blue-100 text-blue-600' },
  purple:  { bg: 'bg-purple-50',  border: 'border-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-700',bullet: 'bg-purple-100 text-purple-600' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',  icon: 'text-amber-600',  badge: 'bg-amber-100 text-amber-700',  bullet: 'bg-amber-100 text-amber-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200',icon: 'text-emerald-600',badge: 'bg-emerald-100 text-emerald-700',bullet: 'bg-emerald-100 text-emerald-600' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',    icon: 'text-sky-600',    badge: 'bg-sky-100 text-sky-700',      bullet: 'bg-sky-100 text-sky-600' },
};

const sectorSolutions = [
  {
    sector: 'Seed Industry',
    icon: Microscope,
    items: ['Hybrid purity assessment', 'Seed production monitoring', 'Variety discrimination'],
  },
  {
    sector: 'Plantation Sector',
    icon: Leaf,
    items: ['Tea, coffee, coconut, oil palm and cashew health monitoring', 'Canopy vigor assessment'],
  },
  {
    sector: 'Food & Processing Industry',
    icon: Package,
    items: ['Raw material quality assessment', 'Adulteration and grading studies'],
  },
  {
    sector: 'Government Projects',
    icon: Building2,
    items: ['Crop insurance assessment', 'Drought and flood damage mapping', 'Precision agriculture missions'],
  },
];

const PrecisionImaging: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Precision Imaging & Spectral Intelligence | NexKorla Agritech';
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-gray-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(134,239,172,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-green-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-emerald-400/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Advanced Remote Sensing Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Precision Imaging &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Spectral Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Advanced drone-based multispectral and hyperspectral solutions for agriculture, research and agro-industries.
            NexKorla Agritech delivers scientific crop intelligence using drone-mounted imaging systems integrated with AI,
            GIS and precision agriculture analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
            {subServices.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Key Outcomes */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Key Outcomes</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyOutcomes.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200">
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-green-600" size={18} />
                </div>
                <span className="text-gray-700 text-sm leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-service Sections */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-16">
        {subServices.map((svc) => {
          const c = colorMap[svc.color];
          const Icon = svc.icon;
          return (
            <div key={svc.id} id={svc.id} className="scroll-mt-24">
              {/* Section header */}
              <div className={`rounded-2xl border ${c.border} ${c.bg} p-6 mb-6 flex items-center gap-4`}>
                <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center`}>
                  <Icon className={c.icon} size={24} />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${c.badge}`}>
                    Sub-service
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 mt-1">{svc.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* What we provide */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <CheckCircle2 className={c.icon} size={18} /> What We Provide
                  </h3>
                  <ul className="space-y-2">
                    {svc.what.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className={`${c.icon} flex-shrink-0 mt-0.5`} size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal clients */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <Users className={c.icon} size={18} /> Ideal Clients
                  </h3>
                  <ul className="space-y-2">
                    {svc.clients.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className={`${c.icon} flex-shrink-0 mt-0.5`} size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <Package className={c.icon} size={18} /> Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {svc.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight className={`${c.icon} flex-shrink-0 mt-0.5`} size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sector-specific Solutions */}
      <div className="bg-gray-50 py-16 mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Sector-Specific Solutions</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored spectral intelligence for every agro-industry segment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorSolutions.map(({ sector, icon: Icon, items }) => (
              <div key={sector} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">{sector}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={13} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SIaaS Premium Service */}
      <div className="py-16 max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-800 via-emerald-800 to-gray-900 p-10 md:p-14">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(134,239,172,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-green-400/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Star size={12} /> Premium Service
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Spectral Intelligence as a Service
                <span className="text-green-400 ml-2">(SIaaS)</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Annual subscription plans that position NexKorla Agritech as a long-term technology partner —
                not just a one-time survey vendor. Get continuous spectral intelligence, seasonal analytics, and
                real-time alerts delivered to your team year-round.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Monthly drone surveys',
                  'Seasonal crop analytics',
                  'Dashboard access',
                  'Research data repository',
                  'Alert system for stress detection',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={15} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-64 flex flex-col items-center md:items-end gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center w-full">
                <p className="text-green-300 text-sm font-medium mb-1">Starting from</p>
                <p className="text-white text-4xl font-extrabold mb-1">Annual</p>
                <p className="text-gray-400 text-sm mb-4">Subscription Plans</p>
                <button
                  onClick={() => { window.location.href = '/#contact'; }}
                  className="block w-full text-center bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12 bg-green-50 px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to unlock spectral insights for your fields?</h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">Talk to our remote sensing team for a custom solution tailored to your crop, region and research goals.</p>
        <button
          onClick={() => { window.location.href = '/#contact'; }}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-green-600/20"
        >
          Get in Touch <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PrecisionImaging;
