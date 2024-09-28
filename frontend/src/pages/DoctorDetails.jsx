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
import { CSSTransition } from "react-transition-group";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.jpg";
import doc4 from "../assets/doctor4.png";
import doc5 from "../assets/doctor5.jpg";
import doc6 from "../assets/doctor6.png";
import doc7 from "../assets/doctor7.png";
import doc8 from "../assets/doctor8.png";
import doc14 from "../assets/doctor14.png"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  {
    id: 9,
    name: "Dr. Kimura",
    specialty: "Dentist",
    fee: 500,
    img: doc14,
    experience: 10,
    qualification: "MBBS",
    location: "Den Clinic",
    contact: "729-654-1111",
    summary: "Dr. Kimura is a skilled dentist.",
    availability: false,
    hours: "1:00 PM - 9:00 PM",
  },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);

  const handleBooking = () => {
    if (!appointmentDate || !timeSlot || !reason) {
      toast.error("Please fill all the fields.");
      return;
    }

    const appointmentDetails = {
      doctorId: doctor.id,
      date: appointmentDate,
      timeSlot,
      reason,
      isEmergency
    };

    console.log("Appointment booked:", appointmentDetails);
    toast.success("Appointment booked successfully!");
    setIsOpen(false);
  };

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-violet-100 to-violet-200 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-64 h-64 mb-6 md:mb-0 rounded-full overflow-hidden shadow-2xl"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold text-violet-700 mb-2">
                {doctor.name}
              </h2>
              <span className="inline-block bg-violet-600 text-white text-2xl px-6 py-2 rounded-full shadow-md">
                {doctor.specialty}
              </span>
              <p className="mt-4 text-gray-600 text-lg">{doctor.summary}</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={FaGraduationCap} title="Qualification" content={doctor.qualification} />
            <InfoCard icon={FaBriefcase} title="Experience" content={`${doctor.experience} years`} />
            <InfoCard icon={FaMapMarkerAlt} title="Location" content={doctor.location} />
            <InfoCard icon={FaPhoneAlt} title="Contact" content={doctor.contact} />
            <InfoCard icon={FaMoneyBillWave} title="Consultation Fee" content={`₹${doctor.fee}`} />
            <InfoCard icon={FaClock} title="Working Hours" content={doctor.hours} />
          </div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-violet-600 text-white text-xl font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-violet-700 transition duration-300"
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="drawer"
        unmountOnExit
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-violet-600 text-3xl hover:text-violet-800"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-violet-900 mb-6">
              Book Appointment
            </h3>

            <div className="space-y-6">
              <div>
                <label className="text-violet-900 font-semibold block mb-2">Select Date:</label>
                <DatePicker
                  selected={appointmentDate}
                  onChange={(date) => setAppointmentDate(date)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="text-violet-900 font-semibold block mb-2">
                  Select Time Slot:
                </label>
                <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto border rounded-lg p-2 scrollable">
                  {[
                    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
                    "12:00 PM", "12:45 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
                    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
                  ].map((slot, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full p-2 border rounded-lg transition duration-300 ${
                        timeSlot === slot
                          ? "bg-violet-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setTimeSlot(slot)}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-violet-900 font-semibold block mb-2">
                  Reason for Appointment:
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500"
                  rows="4"
                  placeholder="Describe the reason for your appointment"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-3"
                  checked={isEmergency}
                  onChange={() => setIsEmergency(!isEmergency)}
                />
                <label className="text-violet-900 font-semibold">
                  Is this an emergency?
                </label>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBooking}
                  className="bg-violet-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-violet-700 transition duration-300"
                >
                  Confirm Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </CSSTransition>

      <style>
        {`
          .drawer-enter {
            transform: translateY(100%);
            opacity: 0;
          }
          .drawer-enter-active {
            transform: translateY(0);
            opacity: 1;
            transition: all 300ms ease-in-out;
          }
          .drawer-exit {
            transform: translateY(0);
            opacity: 1;
          }
          .drawer-exit-active {
            transform: translateY(100%);
            opacity: 0;
            transition: all 300ms ease-in-out;
          }

          .scrollable {
            scrollbar-width: thin;
            scrollbar-color: #4b5563 #e5e7eb;
          }

          .scrollable::-webkit-scrollbar {
            width: 8px;
          }

          .scrollable::-webkit-scrollbar-track {
            background: #e5e7eb;
          }

          .scrollable::-webkit-scrollbar-thumb {
            background-color: #4b5563;
            border-radius: 10px;
          }

          .scrollable::-webkit-scrollbar-thumb:hover {
            background-color: #6b7280;
          }
        `}
      </style>
      <ToastContainer />
    </motion.div>
  );
};

const InfoCard = ({ icon: Icon, title, content }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center bg-white p-4 rounded-xl shadow-md"
  >
    <Icon className="text-violet-600 text-3xl mr-4" />
    <div>
      <p className="font-bold text-lg text-violet-900">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

export default DoctorDetails;
