import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";
import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.jpg";
import doc4 from "../assets/doctor4.png";
import doc5 from "../assets/doctor5.jpg";
import doc6 from "../assets/doctor6.png";
import doc7 from "../assets/doctor7.png";
import doc8 from "../assets/doctor8.png";

const doctors = [
  {
    id: 1,
    name: "Dr. Alice",
    specialty: "Cardiology",
    fee: 500,
    img: doc1,
    experience: 10,
    qualification: "MBBS, MD",
    location: "City Hospital",
    contact: "123-456-7890",
    summary:
      "Dr. Alice has over 10 years of experience in treating heart-related conditions.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 2,
    name: "Dr. Bob",
    specialty: "Dermatology",
    fee: 400,
    img: doc2,
    experience: 8,
    qualification: "MBBS, MD",
    location: "Skin Care Clinic",
    contact: "987-654-3210",
    summary:
      "Dr. Bob specializes in dermatology with a focus on skin treatments.",
    availability: false,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 3,
    name: "Dr. Charlie",
    specialty: "Pediatrics",
    fee: 450,
    img: doc3,
    experience: 5,
    qualification: "MBBS",
    location: "Children's Health Center",
    contact: "456-789-1234",
    summary: "Dr. Charlie is passionate about providing care to children.",
    availability: true,
    hours: "8:00 AM - 4:00 PM",
  },
  {
    id: 4,
    name: "Dr. Diana",
    specialty: "Neurology",
    fee: 600,
    img: doc4,
    experience: 12,
    qualification: "MBBS, MD",
    location: "Neuro Clinic",
    contact: "321-654-9870",
    summary:
      "Dr. Diana has over a decade of experience in neurological disorders.",
    availability: false,
    hours: "12:00 PM - 8:00 PM",
  },
  {
    id: 5,
    name: "Dr. Emma",
    specialty: "Orthopedics",
    fee: 550,
    img: doc5,
    experience: 7,
    qualification: "MBBS, MS",
    location: "Bone Care Hospital",
    contact: "789-123-4560",
    summary: "Dr. Emma is known for her expertise in orthopedic surgeries.",
    availability: true,
    hours: "7:00 AM - 3:00 PM",
  },
  {
    id: 6,
    name: "Dr. Frank",
    specialty: "Psychiatry",
    fee: 350,
    img: doc6,
    experience: 9,
    qualification: "MBBS, MD",
    location: "Mind Health Clinic",
    contact: "654-321-9870",
    summary: "Dr. Frank focuses on treating mental health disorders.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 7,
    name: "Dr. Grace",
    specialty: "Gynecology",
    fee: 500,
    img: doc7,
    experience: 15,
    qualification: "MBBS, MD",
    location: "Women's Health Center",
    contact: "789-456-1230",
    summary: "Dr. Grace is an expert in women's reproductive health.",
    availability: true,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 8,
    name: "Dr. Drake",
    specialty: "Neurology",
    fee: 500,
    img: doc8,
    experience: 6,
    qualification: "MBBS",
    location: "Neuro Clinic",
    contact: "789-654-1230",
    summary: "Dr. Drake focuses on treating various neurological conditions.",
    availability: false,
    hours: "1:00 PM - 9:00 PM",
  },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  // State to manage availability checkbox
  const [isAvailable, setIsAvailable] = useState(doctor?.availability || false);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          {/* Doctor Image and Name */}
          <div className="flex items-center justify-center flex-col">
            <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-teal-900 mb-2">
              {doctor.name}
            </h2>
            <span className="inline-block bg-teal-600 text-white text-lg  px-4 py-1 rounded-full">
              {doctor.specialty}
            </span>
          </div>

          {/* Doctor Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-center">
              <FaGraduationCap className="text-teal-600 text-2xl mr-3" />
              <div>
                <p className="font-bold text-lg text-teal-900">
                  Qualification
                </p>
                <p className="text-gray-600">{doctor.qualification}</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaBriefcase className="text-teal-600 text-2xl mr-3" />
              <div>
                <p className="font-bold text-lg text-teal-900">Experience</p>
                <p className="text-gray-600">{doctor.experience} years</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-teal-600 text-2xl mr-3" />
              <div>
                <p className="font-bold text-lg text-teal-900">Location</p>
                <p className="text-gray-600">{doctor.location}</p>
              </div>
            </div>

            {/* Availability and Working Hours */}
            <div className="mt-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="availability"
                  checked={isAvailable}
                  className="mr-3"
                  onChange={() => setIsAvailable(!isAvailable)}
                />
                <label
                  htmlFor="availability"
                  className="text-lg text-teal-900 font-bold"
                >
                  Available for Appointments
                </label>
              </div>

              {isAvailable ? (
                <div className="mt-4 flex items-center">
                  <FaClock className="text-teal-600 text-2xl mr-3" />
                  <div>
                    <p className="font-bold text-lg text-teal-900">
                      Working Hours
                    </p>
                    <p className="text-gray-600">{doctor.hours}</p>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-red-600 font-bold">
                  Doctor is currently unavailable.
                </p>
              )}
            </div>

            <div className="flex items-center">
              <FaPhoneAlt className="text-teal-600 text-2xl mr-3" />
              <div>
                <p className="font-bold text-lg text-teal-900">Contact</p>
                <p className="text-gray-600">{doctor.contact}</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaMoneyBillWave className="text-teal-600 text-2xl mr-3" />
              <div>
                <p className="font-bold text-lg text-teal-900">Consultation Fee</p>
                <p className="text-gray-600">₹{doctor.fee}</p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 mt-8">
              <h3 className="font-bold text-teal-900 text-lg">Summary</h3>
              <p className="text-gray-600">{doctor.summary}</p>
            </div>
          </div>
            {isAvailable && (
            <div className="mt-8 text-center">
              <button className="bg-purple-500 text-white text-center px-8 py-3 rounded-full hover:bg-purple-600 transition duration-300">
                Book Appointment
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
