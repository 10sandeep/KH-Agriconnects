import React from 'react';
import { services } from '../content/Services';
import { ArrowRight, Users, Lightbulb, Clock, ChevronRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const id = params.get('id');
  const service = services.find((service) => service.id.toString() === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] bg-red-50 rounded-lg p-8 mt-10 max-w-2xl mx-auto">
        <div className="text-red-500 text-6xl mb-4">404</div>
        <div className="text-2xl font-semibold text-red-700 mb-2">Service Not Found</div>
        <p className="text-red-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/services" 
          className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-all duration-300"
        >
          Return to Services
          <ChevronRight className="ml-2" size={18} />
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-12">
      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="absolute inset-0 bg-green-800 rounded-3xl opacity-10 transform -rotate-1"></div>
        <div className="absolute inset-0 bg-green-700 rounded-3xl opacity-10 transform rotate-1"></div>
        
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full aspect-square relative">
            <img 
              src={service.image} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-50"></div>
          </div>
          <div className="md:w-1/2 w-full bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <span className="inline-block bg-green-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 self-start">
              Agricultural Service
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {service.title}
            </h1>
            <div className="h-1 w-32 bg-green-100 my-6"></div>
            <p className="text-gray-600 leading-relaxed">
              {service.title} offers sustainable solutions for modern agriculture challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-md transform hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Clock className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
          </div>
          <div className="h-1 w-32 bg-green-100 mb-6"></div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {service.overview}
          </p>
        </div>

        {/* Why it matters */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-md transform hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Lightbulb className="text-amber-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Why It Matters</h2>
          </div>
          <div className="h-1 w-32 bg-amber-100 mb-6"></div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {service.whyItMatters}
          </p>
        </div>

        {/* Who it's for */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-md transform hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Who It's For</h2>
          </div>
          <div className="h-1 w-32 bg-blue-100 mb-6"></div>
          <ul className="space-y-3">
            {service.whoItsFor.map((audience, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                  <ArrowRight className="text-blue-600" size={14} />
                </div>
                <span className="text-gray-700">{audience}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-12 shadow-md transform hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <div className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
          </div>
          <div className="h-1 w-32 bg-purple-100 mb-6"></div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {service.howItWorks}
          </p>
        </div>

        {/* Contact CTA */}
        {/* <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center mb-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
          <p className="text-green-100 mb-6">Contact our team today to learn more about our {service.title} service</p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-all duration-300"
          >
            Contact Us
            <ChevronRight className="ml-2" size={18} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceDetail;