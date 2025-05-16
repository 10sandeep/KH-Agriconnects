import React from 'react';
import { Check, Users, Tractor, Star, MapPin, Leaf, Sun, Droplets, Wheat, Wind } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header with Agricultural Element */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Wheat size={40} className="text-green-700" />
              <Leaf size={20} className="text-green-600 absolute -right-2 top-0 animate-pulse" />
            </div>
          </div>
            <h2 className="text-5xl pb-5 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
              About KH Agriconnects
            </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6 mt-2 transform transition-all duration-300 hover:w-32 hover:bg-green-600"></div>
          <p className="text-lg text-gray-600">
            Transforming Agriculture Through Innovation and Integration
          </p>
        </div>
        
        {/* Enhanced Content with Beautiful Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Image Display with Farm Elements */}
          <div className="rounded-xl overflow-hidden shadow-xl relative group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-900/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
            <img
              src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Agricultural field with modern technology"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900 to-transparent p-4 text-white opacity-90">
              <div className="flex items-center space-x-2">
                <Tractor size={18} />
                <span className="font-medium">Sustainable Modern Farming</span>
              </div>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white opacity-70"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white opacity-70"></div>
          </div>
          
          {/* Right Column - Enhanced Content with Visual Elements */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-2 h-10 bg-green-700 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                Pioneering Agricultural Innovation
              </h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              KH AGRICONNECT is built on a simple but powerful idea: <span className="font-semibold text-green-800">every farmer deserves access</span> to the farm implements and markets they need to thrive for sustainable farming. As an LLP founded by passionate Farm Mech innovators and backed by extensive field experience, we integrate farm mechanization, capacity building, technology adoption, and global market access under one unified platform.
            </p>
            
            <p className="text-gray-700 mb-10 leading-relaxed">
              We believe that agriculture is not just a livelihood—it's a <span className="font-semibold text-green-800">legacy</span>. Our mission is to enhance that legacy through seven integrated service verticals that touch every stage of the agricultural value chain.
            </p>
            
            {/* Enhanced Core Values with Agricultural Icons */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-lg font-semibold text-gray-800 mb-5 flex items-center">
                <Star size={20} className="text-green-700 mr-2" />
                Our Core Values
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                    <Leaf className="text-green-700" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">Ensure MSP coverage for all crops.
</span>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                    <Users className="text-green-700" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">Reclaim and cultivate barren lands.
</span>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                    <Sun className="text-green-700" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">Promote double cropping in single-crop fields.
</span>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                    <Droplets className="text-green-700" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">Demonstrate agriculture's profitability through mechanization
</span>
                </div>
              </div>
            </div>
            
            {/* Added Call-to-Action Button */}
            <div className="text-center sm:text-left">
              <a href="#services" className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300">
                Discover Our Services
                <Wind className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Added Agricultural Stats Section */}
        
      </div>
    </section>
  );
};

export default About;
