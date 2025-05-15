import React from 'react';
import { Tractor, Leaf, School, Briefcase, PenTool as Tool, ShoppingBag, BarChart4 } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  id:number;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Tractor size={40} className="text-green-700" />,
      title: "Custom Hiring Services of Agricultural Machinery",
      description: "Empowering farmers with access to advanced machinery without the burden of ownership. Our custom hiring centers provide everything from tillage to harvesting equipment, enabling precision and productivity at every stage.  ",
      id:1
    },
    {
      icon: <Leaf size={40} className="text-green-700" />,
      title: "Contract Farming (Min. 25 Acres)",
      description: "We offer structured and secure contract farming models that incorporate mechanized cultivation of suitable crops, tailored to the specific area and resource availability. Our approach ensures assured returns for landowners and optimized, consistent production for buyers.",
      id:2
    },
    {
      icon: <School size={40} className="text-green-700" />,
      title: "Training in Present and Futuristic Agri-Tech",
      description: "Building a skilled rural workforce through hands-on training in smart machinery, automation, and data-driven farming practices.",
      id:3
    },
    {
      icon: <Briefcase size={40} className="text-green-700" />,
      title: "Consultancy services for appropriate agricultural machineries",
      description: "We assist farmers in choosing the most suitable agricultural equipment from the market, customized to their specific crop types, soil conditions, and operational needs",
      id:4
    },
    {
      icon: <Tool size={40} className="text-green-700" />,
      title: "Custom Equipment Design & Development",
      description: "We specialize in the design and development of agricultural machinery through our dedicated R&D team, customized to meet the unique functional requirements of farmer.",
      id:5
    },
    {
      icon: <ShoppingBag size={40} className="text-green-700" />,
      title: "Buyer & Seller Sourcing Gateway",
      description: "A digital and physical bridge that connects producers with reliable markets. Whether local mandis or bulk buyers, we facilitate transparent, fair, and timely trade.",
      id:6
    },
    {
      icon: <BarChart4 size={40} className="text-green-700" />,
      title: "Export of Agricultural Commodities",
      description: "We identify and promote export-quality produce from Indian farms, creating global footprints for local harvests.",
      id:7
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of agricultural services designed to enhance farm productivity, sustainability, and profitability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              id={service.id}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;