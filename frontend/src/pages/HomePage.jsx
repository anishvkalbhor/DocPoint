import React, { useState } from 'react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white rounded-lg shadow-lg h-full flex-shrink-0 p-4">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 1</a></li>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 2</a></li>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 3</a></li>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 4</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full bg-gray-100 p-4 flex items-center justify-center">
        {/* Banner Section */}
        <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg flex h-screen">
          {/* Left Side (Text Content) */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <div className="mb-4">
              <img src="/Co.png" alt="Healthcare Logo" className="w-40 mb-10" />
              <h1 className="text-6xl font-bold text-[#8891e2] mb-2">
                Your Health<br />
                is Our<br />
                Priority
              </h1>
              <p className="text-lg text-gray-700 mb-6">Best healthcare for your family</p>
            </div>
            <button className="bg-[#8891e2] text-white px-6 py-3 rounded hover:bg-[#7078d1] mb-9">
              Book Now
            </button>
            <div className="flex items-center">
              <div className="bg-[#e1e3fb] p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#8891e2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89-3.47a2 2 0 011.53 0L21 8m-9 4l7.89-3.47M3 16l7.89-3.47a2 2 0 011.53 0L21 16M3 8v8m18-8v8m-9 4l7.89-3.47M3 8l7.89-3.47" />
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
            <img src="/image.png" alt="Doctors" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
