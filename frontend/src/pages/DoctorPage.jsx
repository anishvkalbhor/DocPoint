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
import doc14 from "../assets/doctor14.png";
import doc15 from "../assets/doctor15.png";
import doc16 from "../assets/doctor16.png";
import doc17 from "../assets/doctor17.png";
import doc18 from "../assets/doctor18.png";
import doc19 from "../assets/doctor19.png";
import doc20 from "../assets/doctor20.png";
import doc21 from "../assets/doctor21.png";
import doc22 from "../assets/doctor22.png";
import doc23 from "../assets/doctor23.png";
import doc24 from "../assets/doctor24.png";
import doc25 from "../assets/doctor25.png";
import doc26 from "../assets/doctor26.png";
import doc27 from "../assets/doctor27.png";
import doc28 from "../assets/doctor28.png";
import doc29 from "../assets/doctor29.png";
import doc30 from "../assets/doctor30.png";
import doc31 from "../assets/doctor31.png";
import doc32 from "../assets/doctor32.png";
import doc33 from "../assets/doctor33.png";
import doc34 from "../assets/doctor34.png";
import doc35 from "../assets/doctor35.png";
import doc36 from "../assets/doctor36.png";
import doc37 from "../assets/doctor37.png";
import doc38 from "../assets/doctor38.png";
import doc39 from "../assets/doctor39.png";
import doc40 from "../assets/doctor40.png";
// import doctors from './path-to-doctors-array'; 

const doctors = [
  { id: 1, name: "Dr. Mark", specialty: "Cardiology", fee: 300, img: doc1 },
  { id: 2, name: "Dr. Bob", specialty: "Cardiology", fee: 400, img: doc2 },
  { id: 3, name: "Dr. Jennie", specialty: "Cardiology", fee: 500, img: doc3 },
  { id: 4, name: "Dr. Diana", specialty: "Cardiology", fee: 450, img: doc4 },
  { id: 5, name: "Dr. Emma", specialty: "Cardiology", fee: 350, img: doc5 },

  { id: 6, name: "Dr. Frank", specialty: "Dentist", fee: 300, img: doc9 },
  { id: 7, name: "Dr. Nina", specialty: "Dentist", fee: 400, img: doc12 },
  { id: 8, name: "Dr. Michael", specialty: "Dentist", fee: 500, img: doc7 },
  { id: 9, name: "Dr. Sophie", specialty: "Dentist", fee: 450, img: doc13 },
  { id: 10, name: "Dr. Jack", specialty: "Dentist", fee: 350, img: doc11 },

  { id: 11, name: "Dr. Emily", specialty: "Dermatology", fee: 300, img: doc10 },
  { id: 12, name: "Dr. Jace", specialty: "Dermatology", fee: 400, img: doc14 },
  { id: 13, name: "Dr. Keith", specialty: "Dermatology", fee: 500, img: doc18 },
  { id: 14, name: "Dr. Suresh", specialty: "Dermatology", fee: 450, img: doc19 },
  { id: 15, name: "Dr. Priya", specialty: "Dermatology", fee: 350, img: doc20 },

  { id: 16, name: "Dr. Anushka", specialty: "Gynecology", fee: 300, img: doc22 },
  { id: 17, name: "Dr. Shrikant", specialty: "Gynecology", fee: 400, img: doc23 },
  { id: 18, name: "Dr. Priyanka", specialty: "Gynecology", fee: 500, img: doc24 },
  { id: 19, name: "Dr. Rajesh", specialty: "Gynecology", fee: 450, img: doc25 },
  { id: 20, name: "Dr. Palash", specialty: "Gynecology", fee: 350, img: doc26 },

  { id: 21, name: "Dr. Prashant", specialty: "Neurology", fee: 300, img: doc27 },
  { id: 22, name: "Dr. Claire", specialty: "Neurology", fee: 400, img: doc28 },
  { id: 23, name: "Dr. Marwin", specialty: "Neurology", fee: 500, img: doc29 },
  { id: 24, name: "Dr. Stella", specialty: "Neurology", fee: 450, img: doc30 },
  { id: 25, name: "Dr. David", specialty: "Neurology", fee: 350, img: doc6 },

  { id: 26, name: "Dr. Markus", specialty: "Orthopedics", fee: 300, img: doc8 },
  { id: 27, name: "Dr. Matthews", specialty: "Orthopedics", fee: 400, img: doc15 },
  { id: 28, name: "Dr. Caroline", specialty: "Orthopedics", fee: 500, img: doc16 },
  { id: 29, name: "Dr. Judy", specialty: "Orthopedics", fee: 450, img: doc17 },
  { id: 30, name: "Dr. Rashmi", specialty: "Orthopedics", fee: 350, img: doc21 },

  { id: 31, name: "Dr. Tina", specialty: "Pediatrics", fee: 300, img: doc31 },
  { id: 32, name: "Dr. Yash", specialty: "Pediatrics", fee: 400, img: doc32 },
  { id: 33, name: "Dr. Rohan", specialty: "Pediatrics", fee: 500, img: doc33 },
  { id: 34, name: "Dr. Joshua", specialty: "Pediatrics", fee: 450, img: doc34 },
  { id: 35, name: "Dr. Karan", specialty: "Pediatrics", fee: 350, img: doc35 },

  { id: 36, name: "Dr. Priya Sharma", specialty: "Psychiatry", fee: 300, img: doc36 },
  { id: 37, name: "Dr. Amit Verma", specialty: "Psychiatry", fee: 400, img: doc37 },
  { id: 38, name: "Dr. Neha Gupta", specialty: "Psychiatry", fee: 500, img: doc38 },
  { id: 39, name: "Dr. Suman Joshi", specialty: "Psychiatry", fee: 450, img: doc39 },
  { id: 40, name: "Dr. Alia Rao", specialty: "Psychiatry", fee: 350, img: doc40 },
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
                <Link to={`/doctors/${doc.id}`}>
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
