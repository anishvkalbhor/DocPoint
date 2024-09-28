import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import doc14 from "../assets/doctor14.png"

const doctors = [
  { id: 1, name: 'Dr. Alice', specialty: 'Cardiology', fee: 500, img: doc1 },
  { id: 2, name: 'Dr. Bob', specialty: 'Dermatology', fee: 400, img: doc2 },
  { id: 3, name: 'Dr. Charlie', specialty: 'Pediatrics', fee: 450, img: doc3 },
  { id: 4, name: 'Dr. Diana', specialty: 'Neurology', fee: 600, img: doc4 },
  { id: 5, name: 'Dr. Emma', specialty: 'Orthopedics', fee: 550, img: doc5 },
  { id: 6, name: 'Dr. Frank', specialty: 'Psychiatry', fee: 350, img: doc6 },
  { id: 7, name: 'Dr. Grace', specialty: 'Gynecology', fee: 500, img: doc7 },
  { id: 8, name: 'Dr. Drake', specialty: 'Neurology', fee: 500, img: doc8 },
];

const specialties = ['All', 'Cardiology', 'Dermatology', 'Pediatrics', 'Neurology', 'Orthopedics', 'Psychiatry', 'Gynecology', 'Dentist'];

const DoctorPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filteredDoctors = selectedSpecialty === 'All'
    ? doctors
    : doctors.filter((doc) => doc.specialty === selectedSpecialty);

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
          {specialties.map((specialty) => (
            <motion.button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 m-2 rounded-full border-2 text-purple-900 ${
                selectedSpecialty === specialty
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-purple-600 hover:bg-purple-600 hover:text-white'
              } transition duration-300 ease-in-out`}
            >
              {specialty}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-200"
              />
              <h3 className="text-2xl text-purple-900 font-bold text-center mb-2">{doctor.name}</h3>
              <p className="text-center text-gray-700 mb-2">
                <FontAwesomeIcon icon={faStethoscope} className="mr-2 text-purple-600" />
                {doctor.specialty}
              </p>
              <p className="text-center text-purple-600 font-semibold mb-4">
                <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
                {doctor.fee}
              </p>
              <div className="mt-4 text-center">
                <Link to={`/doctor/${doctor.id}`}>
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





// import doc1 from "../assets/doctor1.png";
// import doc2 from "../assets/doctor2.png";
// import doc3 from "../assets/doctor3.jpg";
// import doc4 from "../assets/doctor4.png";
// import doc5 from "../assets/doctor5.jpg";
// import doc6 from "../assets/doctor6.png";
// import doc7 from "../assets/doctor7.png";
// import doc8 from "../assets/doctor8.png";
// import doc14 from '../assets/doctor14.png';



// const doctors = [
//   {
//     id: 1,
//     name: "Dr. Alice",
//     specialty: "Cardiology",
//     fee: 500,
//     img: doc1,
//     experience: 10,
//     qualification: "MBBS, MD",
//     location: "City Hospital",
//     contact: "123-456-7890",
//     summary:
//       "Dr. Alice has over 10 years of experience in treating heart-related conditions.",
//     availability: true,
//     hours: "9:00 AM - 5:00 PM",
//   },
//   {
//     id: 2,
//     name: "Dr. Bob",
//     specialty: "Dermatology",
//     fee: 400,
//     img: doc2,
//     experience: 8,
//     qualification: "MBBS, MD",
//     location: "Skin Care Clinic",
//     contact: "987-654-3210",
//     summary:
//       "Dr. Bob specializes in dermatology with a focus on skin treatments.",
//     availability: false,
//     hours: "10:00 AM - 6:00 PM",
//   },
//   {
//     id: 3,
//     name: "Dr. Charlie",
//     specialty: "Pediatrics",
//     fee: 450,
//     img: doc3,
//     experience: 5,
//     qualification: "MBBS",
//     location: "Children's Health Center",
//     contact: "456-789-1234",
//     summary: "Dr. Charlie is passionate about providing care to children.",
//     availability: true,
//     hours: "8:00 AM - 4:00 PM",
//   },
//   {
//     id: 4,
//     name: "Dr. Diana",
//     specialty: "Neurology",
//     fee: 600,
//     img: doc4,
//     experience: 12,
//     qualification: "MBBS, MD",
//     location: "Neuro Clinic",
//     contact: "321-654-9870",
//     summary:
//       "Dr. Diana has over a decade of experience in neurological disorders.",
//     availability: false,
//     hours: "12:00 PM - 8:00 PM",
//   },
//   {
//     id: 5,
//     name: "Dr. Emma",
//     specialty: "Orthopedics",
//     fee: 550,
//     img: doc5,
//     experience: 7,
//     qualification: "MBBS, MS",
//     location: "Bone Care Hospital",
//     contact: "789-123-4560",
//     summary: "Dr. Emma is known for her expertise in orthopedic surgeries.",
//     availability: true,
//     hours: "7:00 AM - 3:00 PM",
//   },
//   {
//     id: 6,
//     name: "Dr. Frank",
//     specialty: "Psychiatry",
//     fee: 350,
//     img: doc6,
//     experience: 9,
//     qualification: "MBBS, MD",
//     location: "Mind Health Clinic",
//     contact: "654-321-9870",
//     summary: "Dr. Frank focuses on treating mental health disorders.",
//     availability: true,
//     hours: "9:00 AM - 5:00 PM",
//   },
//   {
//     id: 7,
//     name: "Dr. Grace",
//     specialty: "Gynecology",
//     fee: 500,
//     img: doc7,
//     experience: 15,
//     qualification: "MBBS, MD",
//     location: "Women's Health Center",
//     contact: "789-456-1230",
//     summary: "Dr. Grace is an expert in women's reproductive health.",
//     availability: true,
//     hours: "10:00 AM - 6:00 PM",
//   },
//   {
//     id: 8,
//     name: "Dr. Drake",
//     specialty: "Neurology",
//     fee: 500,
//     img: doc8,
//     experience: 6,
//     qualification: "MBBS",
//     location: "Neuro Clinic",
//     contact: "789-654-1230",
//     summary: "Dr. Drake focuses on treating various neurological conditions.",
//     availability: false,
//     hours: "1:00 PM - 9:00 PM",
//   },
// ];
