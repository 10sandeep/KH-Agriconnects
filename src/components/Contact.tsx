import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Leaf, Clock, Calendar, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isMapHovered, setIsMapHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmitMessage('Thank you for your message! Our agricultural experts will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
        setSubmitSuccess(false);
      }, 7000);
    }, 1500);
  };

  // Business hours array for animation
  const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  // Animate business hours
  const [currentHourIndex, setCurrentHourIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHourIndex(prevIndex => (prevIndex + 1) % businessHours.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <motion.div 
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-8 border-green-700"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/4 right-12 w-40 h-40 rounded-full border-8 border-green-700"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-12 left-1/4 w-32 h-32 rounded-full border-8 border-green-700"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
              Get In Touch
            </h2>
            <motion.div 
              className="w-24 h-1 bg-green-700 mx-auto mb-6 mt-4"
              whileHover={{ width: 128, backgroundColor: "#059669" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ></motion.div>
          </motion.div>
       
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Have questions about our agricultural services? Reach out to our farming experts, and we'll help you cultivate success.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Section - 3 columns */}
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 relative overflow-hidden"
              variants={containerVariants}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              {/* Background leaf pattern */}
              <motion.div 
                className="absolute -right-16 -bottom-16 w-64 h-64 text-green-50 opacity-20 pointer-events-none"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              >
                <Leaf size={256} />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-6 flex items-center"
                variants={itemVariants}
              >
                <motion.span 
                  className="mr-3 text-green-600"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Send size={24} />
                </motion.span>
                Send Us a Message
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={formItemVariants}>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Your Name
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform -translate-y-1' : ''}`}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 hover:border-green-400"
                      placeholder="John Smith"
                    />
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-600`} 
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === 'name' ? "100%" : "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    ></motion.div>
                  </div>
                </motion.div>
                <motion.div variants={formItemVariants}>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email Address
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform -translate-y-1' : ''}`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 hover:border-green-400"
                      placeholder="you@example.com"
                    />
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-600`} 
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === 'email' ? "100%" : "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={formItemVariants}>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                    Phone Number
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform -translate-y-1' : ''}`}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 hover:border-green-400"
                      placeholder="+91 98765 43210"
                    />
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-600`} 
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === 'phone' ? "100%" : "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    ></motion.div>
                  </div>
                </motion.div>
                <motion.div variants={formItemVariants}>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                    Inquiry Topic
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'transform -translate-y-1' : ''}`}>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 hover:border-green-400 appearance-none bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="Farm Machinery">Farm Machinery</option>
                      <option value="Contract Farming">Contract Farming</option>
                      <option value="Agri-tech Training">Agri-tech Training</option>
                      <option value="Agricultural Consultancy">Agricultural Consultancy</option>
                      <option value="Equipment Design">Equipment Design</option>
                      <option value="Crop Pricing">Crop Pricing</option>
                      <option value="Sustainable Farming">Sustainable Farming</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                      </svg>
                    </div>
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-600`} 
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === 'subject' ? "100%" : "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div className="mb-6" variants={formItemVariants}>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Your Message
                </label>
                <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform -translate-y-1' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 hover:border-green-400"
                    placeholder="How can we help with your agricultural needs?"
                  ></textarea>
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-green-600`} 
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === 'message' ? "100%" : "0%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  ></motion.div>
                </div>
              </motion.div>
              
              <AnimatePresence>
                {submitMessage && (
                  <motion.div 
                    className={`mb-6 p-4 rounded-md flex items-start bg-green-50 border-l-4 border-green-600 text-green-700`}
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: "auto" }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <p>{submitMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-md font-medium text-white transition-all duration-300 relative overflow-hidden group ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600'
                }`}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                variants={itemVariants}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <motion.svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </motion.svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        className="ml-2 inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Send size={18} />
                      </motion.div>
                    </>
                  )}
                </span>
                <motion.span 
                  className="absolute top-0 left-0 w-full h-full bg-green-700"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                ></motion.span>
              </motion.button>
            </motion.form>
          </motion.div>
          
          {/* Contact Information - 2 columns */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-green-600"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-6"
                variants={pulseVariants}
                animate="pulse"
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="group flex items-start"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}
                >
                  <motion.div 
                    className="bg-green-100 p-3 rounded-full mr-4 text-green-700"
                    whileHover={{ 
                      backgroundColor: "#059669",
                      color: "#ffffff",
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <MapPin className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">Our Location</h4>
                    <p className="text-gray-600">
                      Centurion University of Technology and Management<br />
                      At - Alluri Nagar, Via - Uppalada<br />
                      Paralakhemundi, Gajapati District<br />
                      Odisha, India - 761211
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-start"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}
                >
                  <motion.div 
                    className="bg-green-100 p-3 rounded-full mr-4 text-green-700"
                    whileHover={{ 
                      backgroundColor: "#059669",
                      color: "#ffffff",
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ rotate: 20 }}
                  >
                    <Phone className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">Phone Numbers</h4>
                    <motion.p 
                      className="text-gray-600 mb-1 hover:text-green-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <a href="tel:+916815222999">+91 6815 222 999</a>
                    </motion.p>
                    <motion.p 
                      className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <a href="tel:+916815222888">+91 6815 222 888</a>
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-start"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}
                >
                  <motion.div 
                    className="bg-green-100 p-3 rounded-full mr-4 text-green-700"
                    whileHover={{ 
                      backgroundColor: "#059669",
                      color: "#ffffff",
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">Email Addresses</h4>
                    <motion.p 
                      className="text-gray-600 mb-1 hover:text-green-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <a href="mailto:info@khagriconnects.org">info@khagriconnects.org</a>
                    </motion.p>
                    <motion.p 
                      className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <a href="mailto:support@khagriconnects.org">support@khagriconnects.org</a>
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-start"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}
                >
                  <motion.div 
                    className="bg-green-100 p-3 rounded-full mr-4 text-green-700"
                    whileHover={{ 
                      backgroundColor: "#059669",
                      color: "#ffffff",
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Clock className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">Business Hours</h4>
                    <div className="relative h-6 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={currentHourIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute w-full"
                        >
                          <span className="font-medium text-green-700">{businessHours[currentHourIndex].day}:</span> <span className="text-gray-600">{businessHours[currentHourIndex].hours}</span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Map section is commented out in the original code */}
            {/* <motion.div 
              className="w-full h-80 rounded-lg overflow-hidden shadow-lg relative"
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute inset-0 bg-green-700 z-10 flex items-center justify-center"
                animate={{ opacity: isMapHovered ? 0 : 0.1 }}
                transition={{ duration: 0.5 }}
              >
                                  <motion.div 
                  className="text-white text-center p-6"
                  variants={floatVariants}
                  animate="float"
                >
                  <Calendar size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Visit Our Campus</h3>
                  <p className="text-sm opacity-80">Hover to view the interactive map</p>
                </motion.div>
              </motion.div>
              <motion.iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.0874522035733!2d84.08024817499605!3d19.61641558246779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f13a519131c75%3A0xf14d34c82f145a1e!2sCenturion%20University%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1698504235152!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="Centurion University Map"
                initial={{ scale: 1 }}
                animate={{ scale: isMapHovered ? 1.1 : 1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;