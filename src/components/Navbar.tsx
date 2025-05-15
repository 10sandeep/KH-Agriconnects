import React, { useState, useEffect } from 'react';
import { Menu, X, Tractor, Leaf, Sun, Cloud, Droplets, ShoppingBasket } from 'lucide-react';

// Custom Link component with proper TypeScript interface
interface LinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, className, onClick, children }) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [season, setSeason] = useState('spring');

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
      icon: <Leaf size={18} className="mr-1" />
    },
    summer: {
      primary: 'text-yellow-600',
      secondary: 'text-yellow-700',
      bg: 'from-yellow-600 to-green-800',
      hover: 'hover:text-yellow-400',
      icon: <Sun size={18} className="mr-1" />
    },
    fall: {
      primary: 'text-amber-600',
      secondary: 'text-amber-700',
      bg: 'from-amber-700 to-amber-900',
      hover: 'hover:text-amber-400',
      icon: <Cloud size={18} className="mr-1" />
    },
    winter: {
      primary: 'text-blue-600',
      secondary: 'text-blue-700',
      bg: 'from-blue-800 to-blue-900',
      hover: 'hover:text-blue-400',
      icon: <Droplets size={18} className="mr-1" />
    }
  };

  const currentTheme = seasonColors[season];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : `bg-gradient-to-r ${currentTheme.bg} py-4`
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center space-x-2">
          <div className="relative">
            <Tractor size={32} className={isScrolled ? currentTheme.secondary : 'text-white'} />
            <span className="absolute -top-1 -right-1">
              {currentTheme.icon}
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold ${isScrolled ? currentTheme.secondary : 'text-white'}`}>
              KH Agriconnects
            </span>
            <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
             Powering Farms with Tech Tools and Trusted Trade

            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavItem href="#home" label="Home" isScrolled={isScrolled} theme={currentTheme} />
          <NavItem href="#about" label="About Us" isScrolled={isScrolled} theme={currentTheme} />
          <NavItem href="#services" label="Services" isScrolled={isScrolled} theme={currentTheme} />
          {/* <NavItem href="#products" label="Products" isScrolled={isScrolled} theme={currentTheme} /> */}
          <NavItem href="#team" label="Our Team" isScrolled={isScrolled} theme={currentTheme} />
          <NavItem href="#contact" label="Contact Us" isScrolled={isScrolled} theme={currentTheme} />
          <NavItem href="#events" label="Events" isScrolled={isScrolled} theme={currentTheme} />
          
          <Link 
            href="#shop" 
            className={`flex items-center px-4 py-2 rounded-full transition-colors ${
              isScrolled 
                ? `bg-green-700 text-white hover:bg-green-800` 
                : `bg-white text-green-800 hover:bg-green-100`
            }`}
          >
            <ShoppingBasket size={18} className="mr-2" />
            Farm Shop
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden focus:outline-none" 
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

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavItem href="#home" label="Home" onClick={() => setIsOpen(false)} theme={currentTheme} />
            <MobileNavItem href="#about" label="About Us" onClick={() => setIsOpen(false)} theme={currentTheme} />
            <MobileNavItem href="#services" label="Services" onClick={() => setIsOpen(false)} theme={currentTheme} />
            {/* <MobileNavItem href="#products" label="Products" onClick={() => setIsOpen(false)} theme={currentTheme} /> */}
            <MobileNavItem href="#team" label="Our Team" onClick={() => setIsOpen(false)} theme={currentTheme} />
            <MobileNavItem href="#Contact Us" label="Contact Us" onClick={() => setIsOpen(false)} theme={currentTheme} />
            <MobileNavItem href="#events" label="Events" onClick={() => setIsOpen(false)} theme={currentTheme} />
            
            <Link 
              href="#shop" 
              className="flex items-center py-2 px-4 bg-green-700 text-white rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBasket size={18} className="mr-2" />
              Farm Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Item
interface NavItemProps {
  href: string;
  label: string;
  isScrolled: boolean;
  theme: {
    primary: string;
    secondary: string;
    bg: string;
    hover: string;
    icon: React.ReactNode;
  };
}

const NavItem: React.FC<NavItemProps> = ({ href, label, isScrolled, theme }) => (
  <Link 
    href={href} 
    className={`font-medium transition-colors flex items-center ${
      isScrolled 
        ? `text-gray-800 ${theme.hover}` 
        : `text-white hover:text-gray-200`
    }`}
  >
    {label}
  </Link>
);

// Mobile Navigation Item
interface MobileNavItemProps {
  href: string;
  label: string;
  onClick: () => void;
  theme: {
    primary: string;
    secondary: string;
    bg: string;
    hover: string;
    icon: React.ReactNode;
  };
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, label, onClick, theme }) => (
  <Link 
    href={href} 
    className={`text-gray-800 font-medium ${theme.hover} transition-colors py-2 border-b border-gray-100 flex items-center`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;