import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../content/Services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === parseInt(id || '0'));

  if (!service) {
    return <div className="text-center text-red-500 mt-10">Service not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4">{service.title}</h1>
      <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-6" />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Overview</h2>
        <p className="text-gray-700 whitespace-pre-line">{service.overview}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why it matters</h2>
        <p className="text-gray-700 whitespace-pre-line">{service.whyItMatters}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who it's for</h2>
        <ul className="list-disc list-inside text-gray-700">
          {service.whoItsFor.map((audience, index) => (
            <li key={index}>{audience}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">How it works</h2>
        <p className="text-gray-700 whitespace-pre-line">{service.howItWorks}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;