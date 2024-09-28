import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import doc14 from "../assets/doctor14.png"

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
  { id: 25, name: "Dr. Emma", specialty: "Neurology", fee: 350, img: doc12 },

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
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialty || 'All'); // Set initial state to match route param

  useEffect(() => {
    if (specialty) {
      setSelectedSpecialty(specialty);
    }
  }, [specialty]);

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
                {/* Link to the DoctorDetailsPage */}
                <Link to={`/doctor/${doctor.id}`}>
                  <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
                    Visit
                  </button>
                </Link>
              </div>
            </div>
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

