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
            {/* Simple Caption Bar */}
            <div className="bg-green-700 text-white p-4 flex justify-between items-center">
              <span className="font-medium">Established 2008</span>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>Centurion University</span>
              </div>
            </div>
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
            
            {/* Simple but Effective Stats - Clean 2x2 Layout */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center mb-2">
                  <Users className="text-green-700 mr-2" size={20} />
                  <span className="text-gray-700 font-medium">Farmers Supported</span>
                </div>
                <div className="text-green-700 text-3xl font-bold">5,000+</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center mb-2">
                  <Tractor className="text-green-700 mr-2" size={20} />
                  <span className="text-gray-700 font-medium">Advanced Machinery</span>
                </div>
                <div className="text-green-700 text-3xl font-bold">25+</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center mb-2">
                  <Star className="text-green-700 mr-2" size={20} />
                  <span className="text-gray-700 font-medium">Years of Experience</span>
                </div>
                <div className="text-green-700 text-3xl font-bold">15+</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center mb-2">
                  <Check className="text-green-700 mr-2" size={20} />
                  <span className="text-gray-700 font-medium">Specialized Services</span>
                </div>
                <div className="text-green-700 text-3xl font-bold">7</div>
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Simple Certification Banner */}
        {/* <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-700 mb-4 md:mb-0">
              <span className="font-semibold">KH Agriconnects</span> is a certified agricultural service provider endorsed by the National Agricultural Research Initiative.
            </p>
            <div className="flex space-x-6">
              <img src="/api/placeholder/80/40" alt="Certification Badge" className="h-10" />
              <img src="/api/placeholder/80/40" alt="Certification Badge" className="h-10" />
              <img src="/api/placeholder/80/40" alt="Certification Badge" className="h-10" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;

