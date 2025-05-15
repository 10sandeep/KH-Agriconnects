import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index = 0 }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-green-200 flex flex-col h-full">
      {/* Decorative farm pattern in the background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="farm-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 5 L10 20 L30 20 Z" fill="#166534" />
            <circle cx="20" cy="25" r="3" fill="#166534" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#farm-pattern)" />
        </svg>
      </div>
      
      {/* Top accent bar using agriculture colors */}
      <div className="h-2 bg-gradient-to-r from-green-600 to-green-400"></div>
      
      <div className="p-8 flex flex-col h-full relative z-10">
        
        {/* Icon with enhanced styling */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6 group-hover:bg-green-100 transition-all duration-300">
          <div className="absolute inset-0 rounded-full border-2 border-green-100 group-hover:border-green-200 transition-all duration-300"></div>
          <div className="relative transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>
        
        {/* Divider */}
       
        
        {/* Learn more button with enhanced interaction */}
        <div className="mt-auto">
          <button 
            className="flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 group-hover:after:w-full after:transition-all after:duration-300">
              Learn more
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;