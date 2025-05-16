import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  // Service id for navigation
  icon: React.ReactNode;    // Icon component or element
  title: string;            // Service title
  description: string;      
  id: number;               // Short description
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon, title, description, id
}) => {
  const navigate = useNavigate();
  
  const handleLearnMoreClick = () => {
    navigate(`/service?id=${id}`);  // Navigate to service detail page with service id
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    }
  };

  const iconContainerVariants = {
    initial: { 
      borderColor: "rgba(220, 252, 231, 1)", 
      backgroundColor: "rgba(240, 253, 244, 1)" 
    },
    hover: { 
      borderColor: "rgba(187, 247, 208, 1)", 
      backgroundColor: "rgba(220, 252, 231, 1)",
      scale: 1.05,
      transition: { 
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.15,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6
      }
    }
  };

  const underlineVariants = {
    initial: { width: "0%" },
    hover: { 
      width: "100%",
      transition: { 
        duration: 0.3
      }
    }
  };

  const patternVariants = {
    hidden: { opacity: 0 },
    hover: { 
      opacity: 0.05,
      transition: { 
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="relative bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      {/* Decorative farm pattern in the background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        variants={patternVariants}
        initial="hidden"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id={`farm-pattern-${id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M20 5 L10 20 L30 20 Z" 
              fill="#166534"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: id * 0.2 }}
            />
            <motion.circle 
              cx="20" 
              cy="25" 
              r="3" 
              fill="#166534"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: id * 0.3 }}
            />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#farm-pattern-${id})`} />
        </svg>
      </motion.div>
      
      {/* Top accent bar */}
      <motion.div 
        className="h-2 bg-gradient-to-r from-green-600 to-green-400"
        initial={{ scaleX: 0.6, opacity: 0.8 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      
      <div className="p-8 flex flex-col h-full relative z-10">
        {/* Icon */}
        <motion.div 
          className="relative flex items-center justify-center w-16 h-16 rounded-full mb-6"
          variants={iconContainerVariants}
          initial="initial"
        >
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-green-100"
            variants={iconContainerVariants}
            initial="initial"
          ></motion.div>
          <motion.div 
            className="relative"
            variants={iconVariants}
            initial="initial"
          >
            {icon}
          </motion.div>
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-3"
          initial={{ color: '#1f2937' }}
          whileHover={{ color: '#15803d' }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-gray-600 mb-6 flex-grow"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>
        
        {/* Learn More button */}
        <div className="mt-auto">
          <motion.button
            onClick={handleLearnMoreClick}
            className="flex items-center text-green-700 font-medium"
            whileHover={{ color: '#166534' }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Learn more about ${title}`}
          >
            <span className="relative">
              Learn more
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-green-600"
                initial={{ width: 0 }}
                variants={underlineVariants}
                transition={{ duration: 0.3 }}
              />
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              variants={arrowVariants}
              initial="initial"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;