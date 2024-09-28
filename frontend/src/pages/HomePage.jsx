import React, { useState } from 'react';
import doc1 from '../assets/doctor1.png';
import doc2 from '../assets/doctor2.png';
import doc3 from '../assets/doctor3.jpg';
import doc4 from '../assets/doctor4.png';
import doc5 from '../assets/doctor5.jpg';
import doc6 from '../assets/doctor6.png';
import doc7 from '../assets/doctor7.png';

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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section 1: Original Banner Section from File 1 */}
      <div className="flex-1 bg-gray-100 p-4 flex items-center justify-center">
        {/* Banner Section */}
        <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg flex h-full animate-fade-in">
          {/* Left Side (Text Content) */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <div className="mb-4">
              <img src="/Co.png" alt="Healthcare Logo" className="w-40 mb-10 animate-fade-in-down" />
              <h1 className="text-6xl font-bold text-[#8891e2] mb-2 animate-slide-up">
                Your Health<br />
                is Our<br />
                Priority
              </h1>
              <p className="text-lg text-gray-700 mb-6 animate-fade-in-down">
                Best healthcare for your family
              </p>
            </div>
            <button className="bg-[#8891e2] text-white px-6 py-3 rounded hover:bg-[#7078d1] mb-9 transform hover:scale-105 transition duration-500">
              Book Now
            </button>
            <div className="flex items-center animate-slide-left">
              <div className="bg-[#e1e3fb] p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-[#8891e2]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89-3.47a2 2 0 011.53 0L21 8m-9 4l7.89-3.47M3 16l7.89-3.47a2 2 0 011.53 0L21 16M3 8v8m18-8v8m-9 4l7.89-3.47M3 8l7.89-3.47"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Emergency Helpline</p>
                <p className="text-lg font-bold">+123-456-7890</p>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="w-1/2 h-full">
            <img
              src="/image.png"
              alt="Doctors"
              className="object-cover w-full h-full animate-fade-in-right"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Content from File 2 (Doctor Specialties) */}
      <div className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600 p-8 text-white mt-10">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-center text-5xl font-bold mb-4">Welcome to DocPoint</h1>
          <p className="text-center text-xl">
            Find the best doctors and book your appointment with ease.
          </p>
        </header>

        {/* Hero Section */}
        {/* <div className="relative w-full h-[400px] bg-center bg-cover mb-12 rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x400)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white">Find Your Doctor Today!</h2>
          </div>
        </div> */}

        {/* Doctor Specialties Circular Cards */}
        <section className="container mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-10">Browse by Specialties</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="group text-gray-800 rounded-lg bg-indigo-500 shadow-lg overflow-hidden p-6 transform transition duration-500 hover:scale-105 hover:bg-purple-100">
                <div className="relative overflow-hidden h-40 w-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <img src={specialty.img} alt={specialty.name} className="object-contain h-full w-full rounded-full" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-purple-200 group-hover:text-purple-900">{specialty.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-200">&copy; 2024 DocPoint. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
