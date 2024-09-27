import React, { useState } from 'react'

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
    <div className="flex">
      <div className={`fixed inset-0 z-30 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 h-screen bg-gray-800 text-white p-4`}>
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 1</a></li>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 2</a></li>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 3</a></li>
          <li className="mb-2"><a href="#" className="hover:bg-gray-700 p-2 block">Link 4</a></li>
        </ul>
      </div>
      <div className="flex-1 p-4 ml-64 md:ml-0">
        <button className="md:hidden mb-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <button className="fixed top-4 left-4 md:hidden" onClick={() => setIsSidebarOpen(true)}>
          &#x2192; {/* Right arrow */}
        </button>
        HomePage
      </div>
    </div>
  )
}

export default HomePage