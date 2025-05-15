// import React from 'react';
// import { Calendar, MapPin, Clock } from 'lucide-react';

// interface Event {
//   title: string;
//   date: string;
//   time: string;
//   location: string;
//   description: string;
//   image: string;
//   registrationLink: string;
// }

// const Events: React.FC = () => {
//   const events: Event[] = [
//     {
//       title: "Modern Farming Technologies Workshop",
//       date: "April 15, 2024",
//       time: "10:00 AM - 4:00 PM",
//       location: "Centurion University, Main Campus",
//       description: "Join us for a comprehensive workshop on modern farming technologies, including drone applications, precision agriculture, and smart irrigation systems.",
//       image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
//       registrationLink: "#"
//     },
//     {
//       title: "Organic Farming Certification Program",
//       date: "May 1-3, 2024",
//       time: "9:00 AM - 5:00 PM",
//       location: "Agricultural Training Center",
//       description: "Three-day intensive program on organic farming practices, certification processes, and market opportunities for organic produce.",
//       image: "https://images.pexels.com/photos/2286901/pexels-photo-2286901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
//       registrationLink: "#"
//     },
//     {
//       title: "Agricultural Equipment Expo",
//       date: "June 10, 2024",
//       time: "8:00 AM - 6:00 PM",
//       location: "University Exhibition Ground",
//       description: "Experience the latest in agricultural machinery and equipment. Live demonstrations and special discounts available.",
//       image: "https://images.pexels.com/photos/2519484/pexels-photo-2519484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
//       registrationLink: "#"
//     }
//   ];

//   return (
//     <section id="events" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
//           <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Join us for educational workshops, training programs, and agricultural exhibitions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">{event.title}</h3>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-gray-600">
//                     <Calendar size={20} className="mr-2 text-green-700" />
//                     <span>{event.date}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Clock size={20} className="mr-2 text-green-700" />
//                     <span>{event.time}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <MapPin size={20} className="mr-2 text-green-700" />
//                     <span>{event.location}</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-6">{event.description}</p>
//                 <a
//                   href={event.registrationLink}
//                   className="block w-full text-center bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
//                 >
//                   Register Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;