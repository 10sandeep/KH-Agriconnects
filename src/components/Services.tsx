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
      title: "Custom hiring services of all agricultural machineries",
      description: "Empowering farmers with access to modern tools without the burden of ownership.",
      id:1
    },
    {
      icon: <Leaf size={40} className="text-green-700" />,
      title: "Contract Farming of lands with area of minimum 25 acres",
      description: "Collaborative farming for assured returns and sustainable land use.",
      id:2
    },
    {
      icon: <School size={40} className="text-green-700" />,
      title: "Training farmers on present and futuristic machines",
      description: "Equipping rural youth and farmers with future-ready agri-tech skills.",
      id:3
    },
    {
      icon: <Briefcase size={40} className="text-green-700" />,
      title: "Consultancy services for appropriate agricultural machineries",
      description: "Guiding farmers and agri-entrepreneurs to choose the right tools for maximum yield.",
      id:4
    },
    {
      icon: <Tool size={40} className="text-green-700" />,
      title: "Custom equipment design and development as per the farmer requirement",
      description: "Tailor-made innovations to solve real farmer problems.",
      id:5
    },
    {
      icon: <ShoppingBag size={40} className="text-green-700" />,
      title: "Buyers / sellers sourcing gateway",
      description: "Connecting producers to markets.",
      id:6
    },
    {
      icon: <BarChart4 size={40} className="text-green-700" />,
      title: "Purchase of export quality Agricultural commodities",
      description: "Procuring Premium Indian Produce for International Buyers.",
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