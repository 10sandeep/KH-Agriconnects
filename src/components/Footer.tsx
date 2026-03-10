import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
            Follow Us
          </h3>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>

            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>

            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>

            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
            </li>

            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
            Our Services
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Agricultural Machinery Hiring
              </a>
            </li>

            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Contract Farming
              </a>
            </li>

            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Agri-tech Training
              </a>
            </li>

            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Agricultural Consultancy
              </a>
            </li>

            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Custom Equipment Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
            Contact Us
          </h3>

          <ul className="space-y-4">

            {/* Email */}
            <li className="flex items-center">
              <Mail size={20} className="mr-2 text-green-500 flex-shrink-0" />
              <span className="text-gray-300">info@khagriconnects.org</span>
            </li>

            {/* Phone */}
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <div className="text-gray-300">
                <a href="tel:+917075002000" className="block hover:text-white">
                  +91 7075002000
                </a>

                <a href="tel:+919908691093" className="block hover:text-white">
                  +91 9908691093
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} KH Agri Connects. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
