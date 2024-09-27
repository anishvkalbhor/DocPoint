import React, { useState } from 'react';
import doc1 from '../assets/close-up-health-worker_23-2149112503.png';
import doc2 from '../assets/close-up-health-worker_23-2149112503.png';
import doc3 from '../assets/close-up-health-worker_23-2149112503.png';
import doc4 from '../assets/close-up-health-worker_23-2149112503.png';

const doctors = [
  { id: 1, name: 'Dr. Alice', specialty: 'Cardiology', fee: 500, img: doc1 },
  { id: 2, name: 'Dr. Bob', specialty: 'Dermatology', fee: 400, img: doc2 },
  { id: 3, name: 'Dr. Charlie', specialty: 'Pediatrics', fee: 450, img: doc3 },
  { id: 4, name: 'Dr. Diana', specialty: 'Neurology', fee: 600, img: doc4 },
  { id: 5, name: 'Dr. Emma', specialty: 'Orthopedics', fee: 550, img: doc1 },
  { id: 6, name: 'Dr. Frank', specialty: 'Psychiatry', fee: 350, img: doc2 },
  { id: 7, name: 'Dr. Grace', specialty: 'Gynecology', fee: 500, img: doc3 },
];

const specialties = ['All', 'Cardiology', 'Dermatology', 'Pediatrics', 'Neurology', 'Orthopedics', 'Psychiatry', 'Gynecology'];

const DoctorPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filteredDoctors = selectedSpecialty === 'All'
    ? doctors
    : doctors.filter((doc) => doc.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-purple-900 font-bold mb-8 text-center">Book Your Doctor Appointment</h1>

        {/* Specialty Filters */}
        <div className="flex justify-center mb-8">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 py-2 m-2 rounded-full border-2 text-purple-900 ${
                selectedSpecialty === specialty
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-purple-600 hover:bg-purple-600 hover:text-white'
              } transition duration-300 ease-in-out`}
            >
              {specialty}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl text-purple-900 font-bold text-center">{doctor.name}</h3>
              <p className="text-center text-gray-700">{doctor.specialty}</p>
              <p className="text-center text-purple-600 font-semibold">₹{doctor.fee}</p>
              <div className="mt-4 text-center">
                <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
