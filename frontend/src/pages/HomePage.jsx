import React, { useState } from 'react';
import doc1 from '../assets/close-up-health-worker_23-2149112503.png';
import doc2 from '../assets/confident-medical-practitioners-at-hospital.png';
import doc3 from '../assets/doctor-preparing-consult.jpg';
import doc4 from '../assets/friendly-family-doctor-smiling-virology-specialist-white-lab-coat_1121250-404858.png';
import doc5 from '../assets/happy-diverse-doctors-vertical-view-45221322.png';
import doc6 from '../assets/man-wearing-white-lab-coat-with-stethoscope-it_1165863-31958.png';
import doc7 from '../assets/men-doctor-image-white-background-photo_943898-14631.png';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Array of doctor specialties for the categories section
  const specialties = [
    { name: 'Cardiology', img: doc1 },
    { name: 'Dermatology', img: doc2 },
    { name: 'Pediatrics', img: doc3 },
    { name: 'Neurology', img: doc4 },
    { name: 'Orthopedics', img: doc5 },
    { name: 'Psychiatry', img: doc6 },
    { name: 'Gynecology', img: doc7 },
  ];

  // Conditional class to handle the layout
  const isScrollable = specialties.length > 6;

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Main Content */}
      <div className={`flex-1 p-4 transition-all duration-500 ${isSidebarOpen ? 'ml-64 md:ml-72' : 'ml-0'}`}>
        
        {/* Horizontal Banner */}
        <div
          className={`relative w-full h-64 bg-cover bg-center mb-8 transition-all duration-500 ${
            isSidebarOpen ? 'md:w-[calc(100%-16rem)]' : 'md:w-full'
          }`}
          style={{ backgroundImage: 'url(https://via.placeholder.com/1600x400)' }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-4xl text-white font-bold">Find Your Doctor Today!</h1>
          </div>
        </div>

        {/* Doctor Specialties as Circular Tabs */}
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Browse by Specialties</h2>

        <div
          className={`w-full flex ${isScrollable ? 'overflow-x-auto space-x-6 pb-4' : 'justify-between'} snap-x snap-mandatory scrollbar-hide`}
        >
          <div className="flex space-x-6">
            {specialties.map((specialty) => (
              <div
                key={specialty.name}
                className="snap-center flex-shrink-0 flex flex-col items-center text-center p-4 bg-white rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl ring-2 ring-purple-200 hover:ring-purple-600 w-40"
              >
                <div className="w-28 h-28 rounded-full bg-purple-100 overflow-hidden mb-3 relative">
                  <img
                    src={specialty.img}
                    alt={specialty.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold text-purple-900">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
