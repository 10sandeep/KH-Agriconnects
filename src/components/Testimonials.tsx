import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Rice Farmer",
      location: "Odisha",
      content: "KH Agriconnects' machinery hiring service has been a game-changer for my 15-acre rice farm. I was able to use modern harvesters during peak season without the financial burden of ownership. Their team provided excellent support and training on equipment operation.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 2,
      name: "Anita Patel",
      role: "Organic Vegetable Grower",
      location: "Gujarat",
      content: "The agricultural consultancy from KH Agriconnects helped me transition to organic farming practices. Their expert guidance on soil health management and natural pest control methods has increased my yield and the premium I can charge for my produce.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      name: "Sunil Verma",
      role: "Agri-entrepreneur",
      location: "Maharashtra",
      content: "After completing the agri-tech training program, I started my own agricultural services business. The practical skills and business knowledge I gained were invaluable. KH Agriconnects didn't just teach me farming; they showed me how to build a sustainable enterprise.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from farmers and agricultural entrepreneurs who have transformed their operations with our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Mobile carousel */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-green-700' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevTestimonial}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-800" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-800" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;