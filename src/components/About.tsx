import React from 'react';
import { Check, Users, Tractor, Star, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Simple, Clean Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About KH Agriconnects</h2>
          <div className="w-16 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Transforming Agriculture Through Innovation and Integration

          </p>
        </div>
        
        {/* Main Content with Simple Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Clean Image Display */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Agricultural field with modern technology"
              className="w-full h-auto object-cover"
            />
           
         ?
          </div>
          
          {/* Right Column - Clean, Focused Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-2 h-8 bg-green-700 mr-4"></div>
              Pioneering Agricultural Innovation
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              KH AGRICONNECT is built on a simple but powerful idea that every farmer deserves access to the farm implements, and markets they need to thrive to obtain sustainable farming. As an LLP founded by passionate Farm Mech innovators and backed by extensive field experience, we integrate farm mechanization, capacity building, technology adoption, and global market access under one unified platform.

            </p>
            
            <p className="text-gray-700 mb-12 leading-relaxed">
             We believe that agriculture is not just a livelihood it’s a legacy. And our mission is to enhance that legacy through seven integrated service verticals that touch every stage of the agricultural value chain.</p>

            
            {/* Clean Core Values in Two Columns */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Star size={18} className="text-green-700 mr-2" />
                Our Core Values
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                <div className="flex items-center">
                  <Check className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-700">Sustainable Innovation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-700">Farmer-First Approach</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-700">Community Empowerment</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-700">Environmental Stewardship</span>
                </div>
              </div>
            </div>
            
       
          </div>
        </div>
        
        {/* Simple Certification Banner */}
      
      </div>
    </section>
  );
};

export default About;

