import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Import useParams for dynamic routes

import doc1 from '../assets/doctor1.png';
import doc2 from '../assets/doctor2.png';
import doc3 from '../assets/doctor3.jpg';
import doc4 from '../assets/doctor4.png';
import doc5 from '../assets/doctor5.jpg';
import doc6 from '../assets/doctor6.png';
import doc7 from '../assets/doctor7.png';
import doc8 from '../assets/doctor8.png';
import doc9 from '../assets/doctor9.png';
import doc10 from '../assets/doctor10.jpg';
import doc11 from '../assets/doctor11.jpg';
import doc12 from '../assets/doctor12.png';
import doc13 from '../assets/doctor13.jpg';

const doctors = [
  { id: 1, name: "Dr. Mark", specialty: "Cardiology", fee: 300, img: doc1 },
  { id: 2, name: "Dr. Bob", specialty: "Cardiology", fee: 400, img: doc2 },
  { id: 3, name: "Dr. Jennie", specialty: "Cardiology", fee: 500, img: doc3 },
  { id: 4, name: "Dr. Diana", specialty: "Cardiology", fee: 450, img: doc4 },
  { id: 5, name: "Dr. Emma", specialty: "Cardiology", fee: 350, img: doc5 },

  { id: 6, name: "Dr. Joe", specialty: "Dentist", fee: 300, img: doc9 },
  { id: 7, name: "Dr. Nina", specialty: "Dentist", fee: 400, img: doc12 },
  { id: 8, name: "Dr. Michael", specialty: "Dentist", fee: 500, img: doc7 },
  { id: 9, name: "Dr. Sophie", specialty: "Dentist", fee: 450, img: doc13 },
  { id: 10, name: "Dr. Jack", specialty: "Dentist", fee: 350, img: doc11 },

  { id: 11, name: "Dr. Mark", specialty: "Dermatology", fee: 300, img: doc10 },
  { id: 12, name: "Dr. Bob", specialty: "Dermatology", fee: 400, img: doc2 },
  { id: 13, name: "Dr. Jennie", specialty: "Dermatology", fee: 500, img: doc8 },
  { id: 14, name: "Dr. Diana", specialty: "Dermatology", fee: 450, img: doc4 },
  { id: 15, name: "Dr. Emma", specialty: "Dermatology", fee: 350, img: doc6 },

  { id: 16, name: "Dr. Mark", specialty: "Gynecology", fee: 300, img: doc1 },
  { id: 17, name: "Dr. Bob", specialty: "Gynecology", fee: 400, img: doc5 },
  { id: 18, name: "Dr. Jennie", specialty: "Gynecology", fee: 500, img: doc3 },
  { id: 19, name: "Dr. Diana", specialty: "Gynecology", fee: 450, img: doc6 },
  { id: 20, name: "Dr. Emma", specialty: "Gynecology", fee: 350, img: doc2 },

  { id: 21, name: "Dr. Mark", specialty: "Neurology", fee: 300, img: doc11 },
  { id: 22, name: "Dr. Bob", specialty: "Neurology", fee: 400, img: doc2 },
  { id: 23, name: "Dr. Jennie", specialty: "Neurology", fee: 500, img: doc13 },
  { id: 24, name: "Dr. Diana", specialty: "Neurology", fee: 450, img: doc4 },
  { id: 25, name: "Dr. Emma", specialty: "Neurology", fee: 350, img: doc13 },

  { id: 26, name: "Dr. Mark", specialty: "Orthopedics", fee: 300, img: doc1 },
  { id: 27, name: "Dr. Bob", specialty: "Orthopedics", fee: 400, img: doc2 },
  { id: 28, name: "Dr. Jennie", specialty: "Orthopedics", fee: 500, img: doc3 },
  { id: 29, name: "Dr. Diana", specialty: "Orthopedics", fee: 450, img: doc4 },
  { id: 30, name: "Dr. Emma", specialty: "Orthopedics", fee: 350, img: doc5 },

  { id: 31, name: "Dr. Mark", specialty: "Pediatrics", fee: 300, img: doc1 },
  { id: 32, name: "Dr. Bob", specialty: "Pediatrics", fee: 400, img: doc2 },
  { id: 33, name: "Dr. Jennie", specialty: "Pediatrics", fee: 500, img: doc3 },
  { id: 34, name: "Dr. Diana", specialty: "Pediatrics", fee: 450, img: doc4 },
  { id: 35, name: "Dr. Emma", specialty: "Pediatrics", fee: 350, img: doc5 },

  { id: 36, name: "Dr. Mark", specialty: "Psychiatry", fee: 300, img: doc1 },
  { id: 37, name: "Dr. Bob", specialty: "Psychiatry", fee: 400, img: doc2 },
  { id: 38, name: "Dr. Jennie", specialty: "Psychiatry", fee: 500, img: doc3 },
  { id: 39, name: "Dr. Diana", specialty: "Psychiatry", fee: 450, img: doc4 },
  { id: 40, name: "Dr. Emma", specialty: "Psychiatry", fee: 350, img: doc5 },
];

const specialties = ['All', 'Cardiology', 'Dermatology', 'Pediatrics', 'Neurology', 'Orthopedics', 'Psychiatry', 'Gynecology', 'Dentist'];

const DoctorPage = () => {
  const { specialty } = useParams(); // Capture the specialty from the route params
  const navigate = useNavigate(); // To handle navigation
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    // Filter doctors based on the selected specialty
    if (specialty && specialty !== 'All') {
      const filtered = doctors.filter((doc) => doc.specialty.toLowerCase() === specialty.toLowerCase());
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors); // Show all doctors if no specialty is selected or if 'All' is selected
    }
  }, [specialty]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-purple-900 font-bold mb-8 text-center">Book Your Doctor Appointment</h1>

        {/* Specialty Filters */}
        <div className="flex justify-center mb-8">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => navigate(`/doctors/${spec}`)} // Navigate to filtered specialty
              className={`px-4 py-2 m-2 rounded-full border-2 text-purple-900 ${
                specialty === spec
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-purple-600 hover:bg-purple-600 hover:text-white'
              } transition duration-300 ease-in-out`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold text-purple-900">{doc.name}</h2>
              <p className="text-gray-600">{doc.specialty}</p>
              <p className="text-purple-600 font-bold">Fee: ₹{doc.fee}</p>
              <Link
                to={`/doctors/${doc.id}/book`}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
              >
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
