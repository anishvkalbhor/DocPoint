import React from "react";
import { Link } from "react-router-dom";

import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.jpg";
import doc4 from "../assets/doctor4.png";
import doc5 from "../assets/doctor5.jpg";

const doctors = [
  { id: 1, name: "Dr. Mark", specialty: "Neurology", fee: 300, img: doc1 },
  { id: 2, name: "Dr. Bob", specialty: "Neurology", fee: 400, img: doc2 },
  { id: 3, name: "Dr. Jennie", specialty: "Neurology", fee: 500, img: doc3 },
  { id: 4, name: "Dr. Diana", specialty: "Neurology", fee: 450, img: doc4 },
  { id: 5, name: "Dr. Emma", specialty: "Neurology", fee: 350, img: doc5 },
];

const NeurologyPage = () => {
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
            <Link to={`/doctor/${doctor.id}`}>
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

export default NeurologyPage;
