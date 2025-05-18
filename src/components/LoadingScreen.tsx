import React from 'react';
import logo from '../assets/Logo.png'; // Adjust path as needed

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <div className="text-center">
        {/* Loader Circle */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
          <div className="absolute inset-0 border-t-4 border-green-600 rounded-full animate-spin"></div>
          
          {/* Logo Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt="KH Agriconnect Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-green-700 text-2xl font-bold tracking-widest animate-pulse">
          KH AGRICONNECT
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
