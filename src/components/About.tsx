import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Tractor, Star, MapPin, Leaf, Sun, Droplets, Wheat, Wind } from 'lucide-react';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconAnimationVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header with Agricultural Element and Animation */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex justify-center mb-4"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover="hover"
              variants={iconAnimationVariants}
            >
              <Wheat size={40} className="text-green-700" />
              <Leaf size={20} className="text-green-600 absolute -right-2 top-0" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl pb-5 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500"
            variants={itemVariants}
          >
            About KH Agriconnect
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-green-700 mx-auto mb-6 mt-2"
            variants={itemVariants}
            whileHover={{ width: 128, backgroundColor: '#15803d', transition: { duration: 0.3 } }}
          />
          
          <motion.p 
            className="text-lg text-gray-600"
            variants={itemVariants}
          >
            Transforming Agriculture Through Innovation and Integration
          </motion.p>
        </motion.div>
        
        {/* Enhanced Content with Beautiful Grid and Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Image Display with Farm Elements */}
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl relative group"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-900/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
            <motion.img
              src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Agricultural field with modern technology"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900 to-transparent p-4 text-white opacity-90">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Tractor size={18} />
                <span className="font-medium">Sustainable Modern Farming</span>
              </motion.div>
            </div>
            
            {/* Decorative Corner Elements with Animation */}
            <motion.div 
              className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white opacity-70"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white opacity-70"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
          
          {/* Right Column - Enhanced Content with Visual Elements and Animation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="w-2 h-10 bg-green-700 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                Pioneering Agricultural Innovation
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              KH AGRICONNECT is built on a simple but powerful idea: <span className="font-semibold text-green-800">every farmer deserves access</span> to the farm implements and markets they need to thrive for sustainable farming. As an LLP founded by passionate Farm Mech innovators and backed by extensive field experience, we integrate farm mechanization, capacity building, technology adoption, and global market access under one unified platform.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We believe that agriculture is not just a livelihood—it's a <span className="font-semibold text-green-800">legacy</span>. Our mission is to enhance that legacy through seven integrated service verticals that touch every stage of the agricultural value chain.
            </motion.p>
            
            {/* Enhanced Core Values with Agricultural Icons and Animation */}
            <motion.div 
              className="mb-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <motion.h4 
                className="text-lg font-semibold text-gray-800 mb-5 flex items-center"
                variants={fadeInVariants}
              >
                <Star size={20} className="text-green-700 mr-2" />
                Our Core Values
              </motion.h4>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {[
                  { icon: <Leaf className="text-green-700" size={18} />, text: "Ensure MSP coverage for all crops." },
                  { icon: <Users className="text-green-700" size={18} />, text: "Reclaim and cultivate barren lands." },
                  { icon: <Sun className="text-green-700" size={18} />, text: "Promote double cropping in single-crop fields." },
                  { icon: <Droplets className="text-green-700" size={18} />, text: "Demonstrate agriculture's profitability through mechanization" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Added Call-to-Action Button with Animation */}
            <motion.div 
              className="text-center sm:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a 
                href="#services" 
                className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Discover Our Services
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Wind className="ml-2" size={18} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;