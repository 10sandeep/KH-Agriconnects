import React, { useState ,useEffect} from "react";
import { Linkedin, Mail, Leaf, ChevronRight, Globe } from "lucide-react";
import LEAD1 from "../assets/DN SIR.jpg";
import LEAD2 from "../assets/NANDA SIR .jpg";
import FOUNDER from "../assets/Harshavardhan sir.jpg";
import CEO from "../assets/Prasant Sir.jpg";
import TECHNICAL from "../assets/Sai Kiran sir.jpg";
import SENIOROP from "../assets/Sai sir.jpg";
const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Placeholder for images since we can't access your actual imports
  const placeholderImage = "/api/placeholder/400/320";

  const teamMembers = [
    {
      name: "Dr. Harshavardhan",
      role: " Proprietor cum Founder",
      image: FOUNDER,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "jyotirmayee@khagriconnects.org",
    },
    {
      name: "Dr. Ravuri Sai Prasanth",
      role: "CEO",
      image: CEO,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "ramakrishna@khagriconnects.org",
    },
    {
      name: "Mr. K. Sai Kiran ",
      role: "Technical Farm Supervisor",
      image: TECHNICAL,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "santosh@khagriconnects.org",
    },
    {
      name: "Mr. Ramakrishna",
      role: "Senior Farm Equipment Operator",
      image: SENIOROP,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "nanda@khagriconnects.org",
    },
    {
      name: "Prof. D.N. Rao ",
      role: " Lead advisor",
      image: LEAD1,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "harshavardhan@khagriconnects.org",
    },
    {
      name: "Dr. S. P. Nanda ",
      role: "Lead advisor",
      image: LEAD2,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "prasanth@khagriconnects.org",
    },
    {
      name: "Sri Vijaya Kumar",
      role: " Lead Advisor",
      image: placeholderImage,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "saikiran@khagriconnects.org",
    },
    {
      name: " Dr. Subbarao",
      role: " Lead Advisor",
      image: placeholderImage,
      bio: "NULL",
      linkedin: "https://linkedin.com",
      email: "sharmistha@khagriconnects.org",
    },
  ];

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-green-50 to-lime-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 rounded-full bg-green-300 opacity-20"></div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v10L10 20l10 10v10L0 20z'/%3E%3Cpath d='M20 0L40 20H30L20 10V0z'/%3E%3Cpath d='M20 40V30l10-10H40L20 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-2 space-x-2">
            <Leaf className="text-green-600 animate-pulse" size={32} />
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
              Our Team
            </h2>
          </div>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 transition-all duration-500 hover:w-32 hover:bg-green-500"></div>
          <p className="text-green-700 max-w-2xl mx-auto text-lg">
            Meet our dedicated team of agricultural experts working to transform
            farming practices and empower farmers across the region.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ${
                hoveredMember === index
                  ? "scale-105 shadow-xl shadow-green-200"
                  : "hover:shadow-md hover:translate-y-[-5px]"
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image Container - Increased height from h-63 to h-96 */}
              <div className="relative overflow-hidden h-96">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredMember === index
                      ? "scale-110 filter brightness-90"
                      : ""
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/40 to-transparent transition-opacity duration-500 ${
                    hoveredMember === index ? "opacity-80" : "opacity-40"
                  }`}
                ></div>

                {/* Info on Hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-500 ${
                    hoveredMember === index
                      ? "translate-y-0"
                      : "translate-y-full"
                  }`}
                >
                  <p className="text-white text-sm font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 relative">
                {/* Decorative icon */}
                <div
                  className={`absolute -top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredMember === index
                      ? "bg-green-700 rotate-[360deg]"
                      : "bg-green-600"
                  }`}
                >
                  <Globe className="text-white" size={18} />
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-gray-800 mb-1 group relative">
                  {member.name}
                  <span
                    className={`block h-1 w-0 bg-green-500 transition-all duration-500 ${
                      hoveredMember === index ? "w-full" : ""
                    }`}
                  ></span>
                </h3>
                <p
                  className={`font-medium mb-4 transition-colors duration-300 ${
                    hoveredMember === index
                      ? "text-green-600"
                      : "text-green-700"
                  }`}
                >
                  {member.role}
                </p>

                {/* Contact Links */}
                <div className="flex space-x-4 items-center">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 p-2 rounded-full ${
                        hoveredMember === index
                          ? "bg-green-100 text-green-700 scale-110"
                          : "text-gray-500 hover:bg-green-50"
                      }`}
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.email}`}
                    className={`transition-all duration-300 p-2 rounded-full ${
                      hoveredMember === index
                        ? "bg-green-100 text-green-700 scale-110"
                        : "text-gray-500 hover:bg-green-50"
                    }`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                  <span
                    className={`ml-auto text-sm font-medium transition-colors duration-300 ${
                      hoveredMember === index
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    <ChevronRight size={16} className="inline" /> View Profile
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;