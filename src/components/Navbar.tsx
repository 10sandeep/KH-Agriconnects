import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Scan, Layers, Brain, FlaskConical, Leaf, Building2 } from 'lucide-react';
import LOGO from '../assets/Logo.png';

interface LinkProps {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, className, onClick, children }) => {
  const location = useLocation();
  const isHashLink = to.startsWith('#');

  return isHashLink ? (
    <a
      href={location.pathname === '/' ? to : `/${to}`}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <RouterLink to={to} className={className} onClick={onClick}>
      {children}
    </RouterLink>
  );
};

const precisionSubMenu = [
  { id: 'multispectral', label: 'Multispectral Drone Services',         icon: Scan },
  { id: 'hyperspectral', label: 'Hyperspectral Imaging Services',        icon: Layers },
  { id: 'ai-analytics',  label: 'AI-Based Crop Analytics',               icon: Brain },
  { id: 'research',      label: 'Research & R&D Support',                icon: FlaskConical },
  { id: 'plantation',    label: 'Plantation & Seed Industry Solutions',  icon: Leaf },
  { id: 'government',    label: 'Government & Institutional Projects',   icon: Building2 },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToPrecision = (id: string) => {
    navigate(`/precision-imaging#${id}`);
    setDropdownOpen(false);
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-lg shadow-sm py-3">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 items-center">

          {/* Logo */}
          <div className="col-span-6 lg:col-span-3">
            <Link to="/" className="flex items-center">
              <div className="relative w-36 h-20">
                <img src={LOGO} alt="NexKorla Agritech Logo" className="object-contain w-full h-full" />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:col-span-9 lg:flex justify-center items-center">
            <div className="flex items-center space-x-1 rounded-full py-1 px-2">
              <NavLink to={isHomePage ? '#home' : '/'}>Home</NavLink>
              <NavLink to={isHomePage ? '#about' : '/#about'}>About</NavLink>
              <NavLink to={isHomePage ? '#services' : '/#services'}>Services</NavLink>

              {/* Precision Imaging Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-1 font-medium whitespace-nowrap px-4 py-2 rounded-full text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  Precision Imaging
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 py-2">Sub-services</p>
                    {precisionSubMenu.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => goToPrecision(id)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
                      >
                        <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-green-600" />
                        </div>
                        {label}
                      </button>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2 px-4 pb-1">
                      <button
                        onClick={() => { navigate('/precision-imaging'); setDropdownOpen(false); }}
                        className="text-xs text-green-600 font-medium hover:text-green-700"
                      >
                        View all →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/team">Team</NavLink>
              <NavLink to={isHomePage ? '#events' : '/#events'}>Events</NavLink>
              <NavLink to="/serviceEnrollment">Enroll</NavLink>
              <NavLink to={isHomePage ? '#contact' : '/#contact'}>Contact</NavLink>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="col-span-6 lg:col-span-0 lg:hidden flex justify-end">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl">
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-3">
              <MobileLink to={isHomePage ? '#home' : '/'} onClick={() => setIsOpen(false)}>Home</MobileLink>
              <MobileLink to={isHomePage ? '#about' : '/#about'} onClick={() => setIsOpen(false)}>About Us</MobileLink>
              <MobileLink to={isHomePage ? '#services' : '/#services'} onClick={() => setIsOpen(false)}>Services</MobileLink>
              <MobileLink to="/team" onClick={() => setIsOpen(false)}>Our Team</MobileLink>
              <MobileLink to={isHomePage ? '#events' : '/#events'} onClick={() => setIsOpen(false)}>Events</MobileLink>
              <MobileLink to="/serviceEnrollment" onClick={() => setIsOpen(false)}>Enroll</MobileLink>
              <MobileLink to={isHomePage ? '#contact' : '/#contact'} onClick={() => setIsOpen(false)}>Contact Us</MobileLink>
            </div>

            {/* Precision Imaging mobile accordion */}
            <div className="mt-3">
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-green-50 border border-green-100 text-green-700 font-medium"
                onClick={() => setMobileDropdownOpen((v) => !v)}
              >
                Precision Imaging & Spectral Intelligence
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen && (
                <div className="mt-2 space-y-1">
                  {precisionSubMenu.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => goToPrecision(id)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
                    >
                      <Icon size={15} className="text-green-600" />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isHash = to.startsWith('#');
  const href = isHash ? (location.pathname === '/' ? to : `/${to}`) : to;

  return isHash ? (
    <a href={href} className="font-medium whitespace-nowrap px-4 py-2 rounded-full text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200">
      {children}
    </a>
  ) : (
    <RouterLink to={to} className="font-medium whitespace-nowrap px-4 py-2 rounded-full text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200">
      {children}
    </RouterLink>
  );
};

const MobileLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode }> = ({ to, onClick, children }) => {
  const location = useLocation();
  const isHash = to.startsWith('#');
  const href = isHash ? (location.pathname === '/' ? to : `/${to}`) : to;

  return isHash ? (
    <a href={href} onClick={onClick} className="flex items-center justify-center text-center text-gray-700 hover:text-green-700 font-medium py-3 rounded-lg bg-gray-50 hover:bg-green-50 border border-gray-100 transition-all duration-200">
      {children}
    </a>
  ) : (
    <RouterLink to={to} onClick={onClick} className="flex items-center justify-center text-center text-gray-700 hover:text-green-700 font-medium py-3 rounded-lg bg-gray-50 hover:bg-green-50 border border-gray-100 transition-all duration-200">
      {children}
    </RouterLink>
  );
};

export default Navbar;
