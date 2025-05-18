import React from 'react';
import { Tractor } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ICON2 from '../assets/Icon2.png'
import ICON3 from '../assets/Icon3.png'
import ICON4 from '../assets/Icon4.png'
import ICON5 from '../assets/Icon5.png'
import ICON6 from '../assets/Icon6.png'
import ICON7 from '../assets/Icon7.png'

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
      icon: <img src={ICON2} alt="Contract Farming" className="w-10 h-10" />,
      title: "Contract Farming of lands with area of minimum 25 acres",
      description: "Collaborative farming for assured returns and sustainable land use.",
      id:2
    },
    {
      icon: <img src={ICON3} alt="Training" className="w-10 h-10" />,
      title: "Training farmers on present and futuristic machines",
      description: "Equipping rural youth and farmers with future-ready agri-tech skills.",
      id:3
    },
    {
      icon: <img src={ICON4} alt="Consultancy" className="w-10 h-10" />,
      title: "Consultancy services for appropriate agricultural machineries",
      description: "Guiding farmers and agri-entrepreneurs to choose the right tools for maximum yield.",
      id:4
    },
    {
      icon: <img src={ICON5} alt="Custom Equipment" className="w-10 h-10" />,
      title: "Custom equipment design and development as per the farmer requirement",
      description: "Customized innovations designed to solve specific, need-based problems of farmers.",
      id:5
    },
    {
      icon: <img src={ICON6} alt="Sourcing Gateway" className="w-10 h-10" />,
      title: "Buyers / sellers sourcing gateway",
      description: "Connecting producers to markets.",
      id:6
    },
    {
      icon: <img src={ICON7} alt="Agricultural Commodities" className="w-10 h-10" />,
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