import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import doc1 from '../assets/doctor1.png';
import doc2 from '../assets/doctor2.png';
import doc3 from '../assets/doctor3.jpg';
import doc4 from '../assets/doctor4.png';
import doc5 from '../assets/doctor5.jpg';
import doc6 from '../assets/doctor6.png';
import doc7 from '../assets/doctor7.png';
import doc8 from '../assets/doctor8.png';

const HomePage = () => {
  // Array of doctor specialties for the categories section
  const specialties = [
    { name: 'Cardiology', img: doc1 },
    { name: 'Dermatology', img: doc2 },
    { name: 'Pediatrics', img: doc3 },
    { name: 'Neurology', img: doc4 },
    { name: 'Orthopedics', img: doc5 },
    { name: 'Psychiatry', img: doc6 },
    { name: 'Gynecology', img: doc7 },
    { name: 'Dentist', img: doc8 },
  ];

  return (
    <div>
      {/* Section 1: Background Image */}
      <div
        className="flex h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bckground.png')", // Adjust the image path as needed
          backgroundSize: 'cover',
        }}
      >
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center bg-white-800 bg-opacity-1 p-4">
          {/* Banner Section */}
          <div className="bg-purple-600 w-full max-w-5xl rounded-lg shadow-lg flex h-full animate-fade-in">
            {/* Left Side (Text Content) */}
            <div className="w-1/2 p-8 flex flex-col justify-center text-white">
              <h1 className="text-5xl font-bold mb-4 animate-slide-up">YOUR HEALTH</h1>
              <h1 className="text-5xl font-bold mb-4 animate-slide-up">IS OUR</h1>
              <h1 className="text-5xl font-bold mb-6 animate-slide-up">PRIORITY</h1>
              <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 mb-9 transform hover:scale-105 transition duration-500">
                Book Now!
              </button>
              <div className="flex items-center animate-slide-left">
                <div className="bg-[#e1e3fb] p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-200"
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
                  <p className="text-gray-300">Emergency Helpline</p>
                  <p className="text-lg font-bold">+123-456-7890</p>
                </div>
              </div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-1/2 h-full flex items-center justify-center">
              <img
                src="/docs.png"
                alt="Healthcare Professional"
                className="object-cover h-3/4 animate-fade-in-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Content from File 2 (Doctor Specialties) */}
      <div className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600 p-8 text-white mt-10 backdrop-blur-md">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-center text-5xl font-bold mb-4">Welcome to DocPoint</h1>
          <p className="text-center text-xl">
            Find the best doctors and book your appointment with ease.
          </p>
        </header>

        {/* Doctor Specialties Circular Cards */}
        <section className="container mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-10">Browse by Specialties</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <Link key={index} to={`/specialty/${specialty.name}`} className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105">
                <img
                  src={specialty.img}
                  alt={specialty.name}
                  className="w-full h-32 object-cover transition-opacity duration-300 group-hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-xl font-bold">{specialty.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
