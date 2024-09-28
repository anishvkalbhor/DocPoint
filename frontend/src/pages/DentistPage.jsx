import React from "react";
import { Link } from "react-router-dom";

import doc9 from "../assets/doctor9.png";
import doc12 from "../assets/doctor12.png";
import doc7 from "../assets/doctor7.png";
import doc13 from "../assets/doctor13.jpg";
import doc11 from "../assets/doctor11.jpg";

const doctors = [
  { id: 1, name: "Dr. Joe", specialty: "Dentist", fee: 300, img: doc9 },
  { id: 2, name: "Dr. Nina", specialty: "Dentist", fee: 400, img: doc12 },
  { id: 3, name: "Dr. Michael", specialty: "Dentist", fee: 500, img: doc7 },
  { id: 4, name: "Dr. Sophie", specialty: "Dentist", fee: 450, img: doc13 },
  { id: 5, name: "Dr. Jack", specialty: "Dentist", fee: 350, img: doc11 },
];

const DentistPage = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-purple-500 to-indigo-600 min-h-screen">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Doctors Specializing in Cardiology
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-purple-500 shadow-md"
            />
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{doctor.name}</h2>
            <p className="text-center text-gray-600 mb-4">
              Appointment Fee: ₹{doctor.fee}
            </p>
            <Link to={`/doctors/${doctor.id}`}>
              <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
                Visit
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentistPage;
