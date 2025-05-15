import React, { useState } from "react";
import { Linkedin, Mail, ChevronRight } from "lucide-react";
import IMAGE1 from "../assets/Image 1.jpeg";
import IMAGE2 from "../assets/Image 2.jpeg";
import IMAGE3 from "../assets/Image 3.jpeg";
import IMAGE4 from "../assets/Image 4.jpeg";
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email: string;
}

const Team: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director of Agricultural Services",
      image: IMAGE1,
      bio: "Dr. Kumar brings 15 years of experience in agricultural research and extension services. ",
      linkedin: "https://linkedin.com",
      email: "rajesh.kumar@khagriconnects.org",
    },
    {
      name: "Priya Sharma",
      role: "Head of Agri-tech Training",
      image: IMAGE2,
      bio: "Priya specializes in developing training programs that bridge traditional farming with modern technology.",
      linkedin: "https://linkedin.com",
      email: "priya.sharma@khagriconnects.org",
    },
    {
      name: "Amit Patel",
      role: "Agricultural Engineer",
      image: IMAGE3,
      bio: "Amit leads our equipment design team, creating innovative solutions for local farming challenges.",
      linkedin: "https://linkedin.com",
      email: "amit.patel@khagriconnects.org",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Agricultural Consultant",
      image: IMAGE4,
      bio: "Dr. Johnson specializes in sustainable farming practices and crop optimization strategies.",
      linkedin: "https://linkedin.com",
      email: "sarah.johnson@khagriconnects.org",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-green-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 transition-all duration-300 hover:w-32 hover:bg-green-500"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of agricultural experts working to transform
            farming practices and empower farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ${
                hoveredMember === index ? "scale-105 shadow-xl" : ""
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-65 object-cover transition-transform duration-500 ${
                    hoveredMember === index ? "scale-110" : ""
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${
                    hoveredMember === index ? "opacity-60" : ""
                  }`}
                ></div>
              </div>

              <div className="p-6 relative">
                <div
                  className={`absolute -top-6 right-6 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center transform transition-all duration-300 ${
                    hoveredMember === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronRight className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-green-700">
                  {member.name}
                </h3>
                <p
                  className={`font-medium mb-3 transition-colors duration-300 ${
                    hoveredMember === index
                      ? "text-green-600"
                      : "text-green-700"
                  }`}
                >
                  {member.role}
                </p>

                <div
                  className={`h-px w-1/3 bg-green-200 mb-4 transition-all duration-300 ${
                    hoveredMember === index ? "w-full bg-green-500" : ""
                  }`}
                ></div>

                <p className="text-gray-600 mb-4">{member.bio}</p>

                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${
                        hoveredMember === index
                          ? "text-green-600 transform scale-110"
                          : "text-gray-500"
                      } hover:text-green-700`}
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.email}`}
                    className={`transition-all duration-300 ${
                      hoveredMember === index
                        ? "text-green-600 transform scale-110"
                        : "text-gray-500"
                    } hover:text-green-700`}
                  >
                    <Mail size={22} />
                  </a>
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
