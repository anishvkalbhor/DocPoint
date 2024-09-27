import React from 'react';

const HealthcareBanner = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between p-4 md:p-8 rounded-lg shadow-lg border border-gray-200">
      {/* Left Section */}
      <div className="md:w-1/2 p-4">
        {/* Logo and Text */}
        <div className="flex items-center mb-4">
          <img
            src="/path-to-logo" // Add your logo here
            alt="Healthcare Logo"
            className="w-10 h-10 mr-2"
          />
          <h2 className="text-2xl font-bold text-teal-500">Healthcare Medical Service</h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold text-teal-700 mb-4">
          YOUR HEALTH IS OUR PRIORITY
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 italic mb-4">"Best healthcare for your family"</p>

        {/* CTA Button */}
        <button className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md hover:bg-teal-600 transition">
          BOOK NOW
        </button>

        {/* Emergency Helpline */}
        <div className="flex items-center mt-6 text-gray-700">
          <i className="fas fa-phone-alt text-teal-500 mr-2"></i>
          <p className="text-lg font-bold">Emergency Helpline</p>
          <p className="text-lg font-bold ml-2 text-teal-700">+123-456-7890</p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="relative">
          <div className="border-t-4 border-teal-500 absolute top-0 left-0 w-full h-full"></div>
          <div className="border-r-4 border-teal-500 absolute top-0 right-0 w-full h-full"></div>
          <img
            src="/path-to-doctor-image" // Add your doctor image path here
            alt="Doctor"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthcareBanner;
