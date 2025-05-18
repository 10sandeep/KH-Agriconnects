import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, Tractor, Leaf, Sun, Cloud, Droplets, ShoppingBasket, ChevronDown } from 'lucide-react';
import LOGO from '../assets/Logo.png'

// Custom Link component that handles both internal routing and hash links
interface LinkProps {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, className, onClick, children }) => {
  const location = useLocation();
  
  // Check if the link is a hash link or a page route
  const isHashLink = to.startsWith('#');
  const isActive = isHashLink 
    ? location.hash === to
    : location.pathname === to;
    
  const handleClick = (e: React.MouseEvent) => {
    if (isHashLink) {
      // For hash links on the same page
      if (location.pathname === '/' || !to.includes('/')) {
        // We're already on the homepage, just scroll to the section
        onClick?.();
      }
    } else {
      // For regular page navigation, let React Router handle it
      onClick?.();
    }
  };

  return isHashLink ? (
    // Use regular anchor for hash links
    <a 
      href={location.pathname === '/' ? to : `/${to}`} 
      className={className} 
      onClick={(e) => {
        handleClick(e);
        onClick?.();
      }}
    >
      {children}
    </a>
  ) : (
    // Use RouterLink for page navigation
    <RouterLink 
      to={to} 
      className={className} 
      onClick={onClick}
    >
      {children}
    </RouterLink>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed theme colors
  const theme = {
    primary: 'text-green-600',
    secondary: 'text-green-700',
    bg: 'from-green-500 to-green-700', // Lighter green for better logo visibility
    hover: 'hover:text-green-400',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-400',
    iconBg: 'bg-green-100',
    icon: <Leaf size={18} className="mr-1" />
  };
  
  // Whether we're on the homepage or not (affects navigation)
  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white backdrop-blur-lg bg-opacity-80 shadow-lg py-3' 
          : `bg-gradient-to-r ${theme.bg} py-5`
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Three-column layout: Logo | Nav | Mobile Menu Button */}
        <div className="grid grid-cols-12 items-center">
          {/* Logo Section - left column (spans 3 columns on lg) */}
          <div className="col-span-6 lg:col-span-3">
           <Link to="/" className="group flex items-center space-x-3 relative">
  <div className={`relative w-20 h-14 p-1 rounded-md transition-all duration-300 ${
    isScrolled ? `${theme.iconBg} ${theme.borderColor} border` : 'bg-white/20 backdrop-blur-sm'
  }`}>
    <img 
      src={LOGO} 
      alt="KH Agriconnect Logo" 
      className="object-contain w-full h-full" 
    />
  </div>
</Link>

          </div>

          {/* Desktop Navigation - center column (spans 6 columns on lg) */}
          <div className="hidden lg:col-span-6 lg:flex justify-center items-center">
            <div className={`flex space-x-2 rounded-full transition-all duration-300 py-1 px-2 ${
              isScrolled ? `bg-gray-100 shadow-inner` : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <NavItem to={isHomePage ? "#home" : "/"} label="Home" isScrolled={isScrolled} theme={theme} />
              <NavItem to={isHomePage ? "#about" : "/#about"} label="About" isScrolled={isScrolled} theme={theme} />
              <NavItem to={isHomePage ? "#services" : "/#services"} label="Services" isScrolled={isScrolled} theme={theme} />
              <NavItem to="/team" label="Team" isScrolled={isScrolled} theme={theme} />
              <NavItem to={isHomePage ? "#events" : "/#events"} label="Events" isScrolled={isScrolled} theme={theme} />
              <NavItem to="/serviceEnrollment" label="Enroll" isScrolled={isScrolled} theme={theme} />
              <NavItem to={isHomePage ? "#contact" : "/#contact"} label="Contact" isScrolled={isScrolled} theme={theme} />
            </div>
          </div>

          {/* Mobile Navigation Toggle - right column (spans 3 columns on lg) */}
          <div className="col-span-6 lg:col-span-3 flex justify-end">
            <button 
              className={`lg:hidden focus:outline-none p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? `${theme.iconBg} ${theme.borderColor} border` 
                  : 'bg-white/10'
              }`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`shadow-xl ${theme.bgLight} border-t ${theme.borderColor}`}>
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-3">
              <MobileNavItem to={isHomePage ? "#home" : "/"} label="Home" onClick={() => setIsOpen(false)} theme={theme} />
              <MobileNavItem to={isHomePage ? "#about" : "/#about"} label="About Us" onClick={() => setIsOpen(false)} theme={theme} />
              <MobileNavItem to={isHomePage ? "#services" : "/#services"} label="Services" onClick={() => setIsOpen(false)} theme={theme} />
              <MobileNavItem to="/team" label="Our Team" onClick={() => setIsOpen(false)} theme={theme} />
              <MobileNavItem to={isHomePage ? "#events" : "/#events"} label="Events" onClick={() => setIsOpen(false)} theme={theme} />
              <MobileNavItem to="/serviceEnrollment" label="Service Enrollment" onClick={() => setIsOpen(false)} theme={theme} />
              <MobileNavItem to={isHomePage ? "#contact" : "/#contact"} label="Contact Us" onClick={() => setIsOpen(false)} theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop Navigation Item
interface NavItemProps {
  to: string;
  label: string;
  isScrolled: boolean;
  theme: {
    primary: string;
    secondary: string;
    bg: string;
    hover: string;
    bgLight: string;
    borderColor: string;
    iconBg: string;
    icon: React.ReactNode;
  };
}

const NavItem: React.FC<NavItemProps> = ({ to, label, isScrolled, theme }) => (
  <Link 
    to={to} 
    className={`font-medium whitespace-nowrap transition-all duration-300 px-3 py-2 rounded-full hover:shadow-md ${
      isScrolled 
        ? `text-gray-700 ${theme.hover} hover:bg-white` 
        : `text-white hover:text-white hover:bg-white/20`
    }`}
  >
    {label}
  </Link>
);

// Mobile Navigation Item
interface MobileNavItemProps {
  to: string;
  label: string;
  onClick: () => void;
  theme: {
    primary: string;
    secondary: string;
    bg: string;
    hover: string;
    bgLight: string;
    borderColor: string;
    iconBg: string;
    icon: React.ReactNode;
  };
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ to, label, onClick, theme }) => (
  <Link 
    to={to} 
    className={`flex items-center justify-center text-center ${theme.secondary} font-medium transition-all duration-300 py-3 rounded-lg bg-white hover:bg-gray-50 shadow-sm border border-gray-100 hover:shadow-md`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;