import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Import useParams for dynamic routes

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserMd, faDollarSign, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

// import doctors from './path-to-doctors-array'; 

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

// const DoctorDetailsPage = () => {
//   const { id } = useParams(); // Get the doctor's ID from the URL
//   const doctor = doctors.find((doc) => doc.id === parseInt(id)); // Find the doctor by ID

//   if (!doctor) {
//     return <p>Doctor not found!</p>;
// }
// }
const DoctorPage = () => {
  const { specialty } = useParams(); // Access the dynamic specialty parameter
  const navigate = useNavigate(); // To handle navigation
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    if (specialty && specialty !== 'All') {
      const filtered = doctors.filter((doc) => doc.specialty.toLowerCase() === specialty.toLowerCase());
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors); // Show all doctors if no specialty is selected
    }
  }, [specialty]);


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-8 font-sans">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-purple-900 font-extrabold mb-8 text-center"
        >
          Book Your Doctor Appointment
        </motion.h1>

        {/* Specialty Filters */}
        <div className="flex flex-wrap justify-center mb-8">
          {specialties.map((spec) => (
            <motion.button
              key={spec}
              onClick={() => navigate(`/doctor/${spec}`)} // Navigate to filtered specialty
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 m-2 rounded-full border-2 text-purple-900 ${
                specialty === spec
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-purple-600 hover:bg-purple-600 hover:text-white'
              } transition duration-300 ease-in-out`}
            >
              {spec}
            </motion.button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className="text-2xl text-purple-900 font-bold text-center mb-2">{doc.name}</h3>
              <p className="text-center text-gray-700 mb-2">
                <FontAwesomeIcon icon={faStethoscope} className="mr-2 text-purple-600" />
                {doc.specialty}
              </p>
              <p className="text-center text-purple-600 font-semibold mb-4">
                <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
                {doc.fee}
              </p>
              <div className="mt-4 text-center">
                <Link to={`/doctors-details/${doc.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300"
                  >
                    Visit <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
