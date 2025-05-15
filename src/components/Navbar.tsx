import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, Tractor, Leaf, Sun, Cloud, Droplets, ShoppingBasket, ChevronDown } from 'lucide-react';

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
  const [season, setSeason] = useState('spring');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Determine season based on month (simplified)
    const determineCurrentSeason = () => {
      const month = new Date().getMonth();
      if (month >= 2 && month <= 4) return 'spring';
      if (month >= 5 && month <= 7) return 'summer';
      if (month >= 8 && month <= 10) return 'fall';
      return 'winter';
    };

    setSeason(determineCurrentSeason());
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Season-based color themes
  const seasonColors = {
    spring: {
      primary: 'text-green-600',
      secondary: 'text-green-700',
      bg: 'from-green-700 to-green-900',
      hover: 'hover:text-green-400',
      bgLight: 'bg-green-50',
      borderColor: 'border-green-400',
      iconBg: 'bg-green-100',
      icon: <Leaf size={18} className="mr-1" />
    },
    summer: {
      primary: 'text-yellow-600',
      secondary: 'text-yellow-700',
      bg: 'from-yellow-600 to-green-800',
      hover: 'hover:text-yellow-400',
      bgLight: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
      iconBg: 'bg-yellow-100',
      icon: <Sun size={18} className="mr-1" />
    },
    fall: {
      primary: 'text-amber-600',
      secondary: 'text-amber-700',
      bg: 'from-amber-700 to-amber-900',
      hover: 'hover:text-amber-400',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-400',
      iconBg: 'bg-amber-100',
      icon: <Cloud size={18} className="mr-1" />
    },
    winter: {
      primary: 'text-blue-600',
      secondary: 'text-blue-700',
      bg: 'from-blue-800 to-blue-900',
      hover: 'hover:text-blue-400',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-400',
      iconBg: 'bg-blue-100',
      icon: <Droplets size={18} className="mr-1" />
    }
  };

  const currentTheme = seasonColors[season];
  
  // Whether we're on the homepage or not (affects navigation)
  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white backdrop-blur-lg bg-opacity-80 shadow-lg py-3' 
          : `bg-gradient-to-r ${currentTheme.bg} py-5`
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Three-column layout: Logo | Nav | Mobile Menu Button */}
        <div className="grid grid-cols-12 items-center">
          {/* Logo Section - left column (spans 3 columns on lg) */}
          <div className="col-span-6 lg:col-span-3">
            <Link to="/" className="group flex items-center space-x-3 relative">
              <div className={`relative p-2 rounded-full transition-all duration-300 ${
                isScrolled ? `${currentTheme.iconBg} ${currentTheme.borderColor} border` : 'bg-white/10'
              }`}>
                <Tractor size={32} className={`transition-all duration-300 ${isScrolled ? currentTheme.secondary : 'text-white'}`} />
                <span className="absolute -top-1 -right-1 transition-all duration-300 group-hover:rotate-12">
                  {currentTheme.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${isScrolled ? currentTheme.secondary : 'text-white'}`}>
                  KH Agriconnects
                </span>
                <div className="relative overflow-hidden h-5">
                  <span className={`text-xs transition-all duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                    Powering Farms with Tech Tools and Trusted Trade
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    isScrolled ? currentTheme.borderColor : 'bg-white'
                  }`}></span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - center column (spans 6 columns on lg) */}
          <div className="hidden lg:col-span-6 lg:flex justify-center items-center">
            <div className={`flex space-x-2 rounded-full transition-all duration-300 py-1 px-2 ${
              isScrolled ? `bg-gray-100 shadow-inner` : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <NavItem to={isHomePage ? "#home" : "/"} label="Home" isScrolled={isScrolled} theme={currentTheme} />
              <NavItem to={isHomePage ? "#about" : "/#about"} label="About" isScrolled={isScrolled} theme={currentTheme} />
              <NavItem to={isHomePage ? "#services" : "/#services"} label="Services" isScrolled={isScrolled} theme={currentTheme} />
              <NavItem to="/team" label="Team" isScrolled={isScrolled} theme={currentTheme} />
              <NavItem to={isHomePage ? "#events" : "/#events"} label="Events" isScrolled={isScrolled} theme={currentTheme} />
              <NavItem to="/serviceEnrollment" label="Enroll" isScrolled={isScrolled} theme={currentTheme} />
              <NavItem to={isHomePage ? "#contact" : "/#contact"} label="Contact" isScrolled={isScrolled} theme={currentTheme} />
            </div>
          </div>

          {/* Mobile Navigation Toggle - right column (spans 3 columns on lg) */}
          <div className="col-span-6 lg:col-span-3 flex justify-end">
            <button 
              className={`lg:hidden focus:outline-none p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? `${currentTheme.iconBg} ${currentTheme.borderColor} border` 
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
        <div className={`shadow-xl ${currentTheme.bgLight} border-t ${currentTheme.borderColor}`}>
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-3">
              <MobileNavItem to={isHomePage ? "#home" : "/"} label="Home" onClick={() => setIsOpen(false)} theme={currentTheme} />
              <MobileNavItem to={isHomePage ? "#about" : "/#about"} label="About Us" onClick={() => setIsOpen(false)} theme={currentTheme} />
              <MobileNavItem to={isHomePage ? "#services" : "/#services"} label="Services" onClick={() => setIsOpen(false)} theme={currentTheme} />
              <MobileNavItem to="/team" label="Our Team" onClick={() => setIsOpen(false)} theme={currentTheme} />
              <MobileNavItem to={isHomePage ? "#events" : "/#events"} label="Events" onClick={() => setIsOpen(false)} theme={currentTheme} />
              <MobileNavItem to="/serviceEnrollment" label="Service Enrollment" onClick={() => setIsOpen(false)} theme={currentTheme} />
              <MobileNavItem to={isHomePage ? "#contact" : "/#contact"} label="Contact Us" onClick={() => setIsOpen(false)} theme={currentTheme} />
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