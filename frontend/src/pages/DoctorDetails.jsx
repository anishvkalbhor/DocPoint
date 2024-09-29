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
import doc9 from "../assets/doctor9.png";
import doc10 from "../assets/doctor10.jpg";
import doc11 from "../assets/doctor11.jpg";
import doc12 from "../assets/doctor12.png";
import doc13 from "../assets/doctor13.jpg";
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


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Mark",
    specialty: "Cardiology",
    fee: 300,
    img: doc1,
    experience: 10,
    qualification: "MBBS, MD",
    location: "City Hospital",
    contact: "123-456-7890",
    summary: "Dr. Mark has over 10 years of experience in treating heart-related conditions.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 2,
    name: "Dr. Bob",
    specialty: "Cardiology",
    fee: 400,
    img: doc2,
    experience: 8,
    qualification: "MBBS, MD",
    location: "Heart Care Clinic",
    contact: "987-654-3210",
    summary: "Dr. Bob specializes in cardiology and provides heart treatments with advanced techniques.",
    availability: false,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 3,
    name: "Dr. Jennie",
    specialty: "Cardiology",
    fee: 500,
    img: doc3,
    experience: 5,
    qualification: "MBBS",
    location: "Cardiac Health Center",
    contact: "456-789-1234",
    summary: "Dr. Jennie is passionate about helping patients with heart conditions.",
    availability: true,
    hours: "8:00 AM - 4:00 PM",
  },
  {
    id: 4,
    name: "Dr. Diana",
    specialty: "Cardiology",
    fee: 450,
    img: doc4,
    experience: 12,
    qualification: "MBBS, MD",
    location: "City Clinic",
    contact: "321-654-9870",
    summary: "Dr. Diana has over a decade of experience in heart-related treatments.",
    availability: false,
    hours: "12:00 PM - 8:00 PM",
  },
  {
    id: 5,
    name: "Dr. Emma",
    specialty: "Cardiology",
    fee: 350,
    img: doc5,
    experience: 7,
    qualification: "MBBS, MS",
    location: "Heart Wellness Center",
    contact: "789-123-4560",
    summary: "Dr. Emma is known for her expertise in treating cardiovascular diseases.",
    availability: true,
    hours: "7:00 AM - 3:00 PM",
  },
  {
    id: 6,
    name: "Dr. Frank",
    specialty: "Dentist",
    fee: 350,
    img: doc9,
    experience: 9,
    qualification: "BDS",
    location: "Dental Clinic",
    contact: "654-321-9870",
    summary: "Dr. Frank is an experienced dentist focusing on oral care.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 7,
    name: "Dr. Nina",
    specialty: "Dentist",
    fee: 400,
    img: doc12,
    experience: 15,
    qualification: "BDS, MDS",
    location: "Smile Dental Clinic",
    contact: "789-456-1230",
    summary: "Dr. Nina is a specialist in dental surgeries and cosmetic dentistry.",
    availability: true,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 8,
    name: "Dr. Michael",
    specialty: "Dentist",
    fee: 500,
    img: doc7,
    experience: 6,
    qualification: "BDS",
    location: "Oral Care Center",
    contact: "789-654-1230",
    summary: "Dr. Michael provides treatments for all types of dental issues.",
    availability: false,
    hours: "1:00 PM - 9:00 PM",
  },
  {
    id: 9,
    name: "Dr. Sophie",
    specialty: "Dentist",
    fee: 450,
    img: doc13,
    experience: 10,
    qualification: "BDS, MDS",
    location: "Family Dental Clinic",
    contact: "729-654-1111",
    summary: "Dr. Sophie is known for her advanced dental treatment approaches.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 10,
    name: "Dr. Jack",
    specialty: "Dentist",
    fee: 350,
    img: doc11,
    experience: 7,
    qualification: "BDS",
    location: "Healthy Teeth Clinic",
    contact: "123-654-9870",
    summary: "Dr. Jack focuses on preventive dental care and routine checkups.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 11,
    name: "Dr. Emily",
    specialty: "Dermatology",
    fee: 300,
    img: doc10,
    experience: 10,
    qualification: "MBBS, MD",
    location: "Dermatology Center",
    contact: "456-123-7890",
    summary: "Dr. Emily specializes in dermatological care, focusing on skin conditions.",
    availability: true,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 12,
    name: "Dr. Jace",
    specialty: "Dermatology",
    fee: 400,
    img: doc14,
    experience: 8,
    qualification: "MBBS, MD",
    location: "Skin Care Clinic",
    contact: "654-321-9870",
    summary: "Dr. Jace offers expert skin treatment and cosmetic dermatology services.",
    availability: false,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 13,
    name: "Dr. Keith",
    specialty: "Dermatology",
    fee: 500,
    img: doc18,
    experience: 6,
    qualification: "MBBS",
    location: "Dermatology Clinic",
    contact: "789-456-3210",
    summary: "Dr. Keith has experience in treating various skin diseases.",
    availability: true,
    hours: "12:00 PM - 8:00 PM",
  },
  {
    id: 14,
    name: "Dr. Suresh",
    specialty: "Dermatology",
    fee: 450,
    img: doc19,
    experience: 12,
    qualification: "MBBS, MD",
    location: "Skin Care Center",
    contact: "654-987-3210",
    summary: "Dr. Suresh has over a decade of experience in dermatological treatments.",
    availability: false,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 15,
    name: "Dr. Priya",
    specialty: "Dermatology",
    fee: 350,
    img: doc20,
    experience: 7,
    qualification: "MBBS",
    location: "City Skin Clinic",
    contact: "123-456-7890",
    summary: "Dr. Priya provides skincare treatments for all types of skin conditions.",
    availability: true,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 16,
    name: "Dr. Anushka",
    specialty: "Gynecology",
    fee: 300,
    img: doc22,
    experience: 10,
    qualification: "MBBS, MD",
    location: "Women's Health Clinic",
    contact: "321-654-9870",
    summary: "Dr. Anushka specializes in women's reproductive health and gynecological care.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 17,
    name: "Dr. Shrikant",
    specialty: "Gynecology",
    fee: 400,
    img: doc17,
    experience: 8,
    qualification: "MBBS, MD",
    location: "Gynecology Center",
    contact: "456-123-7890",
    summary: "Dr. Shrikant focuses on gynecological surgeries and women's health.",
    availability: false,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 18,
    name: "Dr. Priyanka",
    specialty: "Gynecology",
    fee: 500,
    img: doc24,
    experience: 5,
    qualification: "MBBS",
    location: "Women's Health Center",
    contact: "789-654-3210",
    summary: "Dr. Priyanka is passionate about women's reproductive health.",
    availability: true,
    hours: "8:00 AM - 4:00 PM",
  },
  {
    id: 19,
    name: "Dr. Rajesh",
    specialty: "Gynecology",
    fee: 450,
    img: doc25,
    experience: 12,
    qualification: "MBBS, MD",
    location: "City Clinic",
    contact: "654-987-3210",
    summary: "Dr. Rajesh has over a decade of experience in gynecological treatments.",
    availability: false,
    hours: "12:00 PM - 8:00 PM",
  },
  {
    id: 20,
    name: "Dr. Palash",
    specialty: "Gynecology",
    fee: 350,
    img: doc26,
    experience: 7,
    qualification: "MBBS, MS",
    location: "Women's Wellness Center",
    contact: "456-789-1230",
    summary: "Dr. Palash is known for her expertise in women's reproductive health.",
    availability: true,
    hours: "7:00 AM - 3:00 PM",
  },
  {
    id: 21,
    name: "Dr. Prashant",
    specialty: "Neurology",
    fee: 600,
    img: doc27,
    experience: 10,
    qualification: "MBBS, MD, DM",
    location: "Neurology Center",
    contact: "654-321-1230",
    summary: "Dr. Prashant specializes in neurological disorders and treatments.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 22,
    name: "Dr. Claire",
    specialty: "Neurology",
    fee: 700,
    img: doc28,
    experience: 15,
    qualification: "MBBS, MD, DM",
    location: "Neuro Health Clinic",
    contact: "987-456-1230",
    summary: "Dr. Claire is a specialist in neurosurgery and advanced neurology treatments.",
    availability: false,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 23,
    name: "Dr. Marwin",
    specialty: "Neurology",
    fee: 750,
    img: doc29,
    experience: 6,
    qualification: "MBBS, DM",
    location: "Brain Care Center",
    contact: "123-789-4560",
    summary: "Dr. Marwin provides treatments for neurological disorders.",
    availability: true,
    hours: "1:00 PM - 9:00 PM",
  },
  {
    id: 24,
    name: "Dr. Stella",
    specialty: "Neurology",
    fee: 800,
    img: doc30,
    experience: 10,
    qualification: "MBBS, MD, DM",
    location: "Neuro Specialist Clinic",
    contact: "654-789-1230",
    summary: "Dr. Stella has extensive experience in treating complex neurological cases.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 25,
    name: "Dr. David",
    specialty: "Neurology",
    fee: 550,
    img: doc6,
    experience: 10,
    qualification: "MBBS, MS (Ortho)",
    location: "Ortho Health Clinic",
    contact: "789-123-6540",
    summary: "Dr. David is an expert in bone and joint treatments.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 26,
    name: "Dr. Markus",
    specialty: "Orthopedics",
    fee: 650,
    img: doc8,
    experience: 12,
    qualification: "MBBS, MS (Ortho)",
    location: "Bone Care Center",
    contact: "123-456-7890",
    summary: "Dr. Markus focuses on advanced orthopedic surgeries and bone health.",
    availability: false,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 27,
    name: "Dr. Matthews",
    specialty: "Orthopedics",
    fee: 700,
    img: doc15,
    experience: 7,
    qualification: "MBBS, MS (Ortho)",
    location: "Ortho Specialist Clinic",
    contact: "654-321-7890",
    summary: "Dr. Matthews provides comprehensive treatments for orthopedic issues.",
    availability: true,
    hours: "1:00 PM - 9:00 PM",
  },
  {
    id: 28,
    name: "Dr. Caroline",
    specialty: "Orthopedics",
    fee: 750,
    img: doc16,
    experience: 8,
    qualification: "MBBS, MS (Ortho)",
    location: "Joint Care Clinic",
    contact: "789-654-3210",
    summary: "Dr. Caroline specializes in joint replacement surgeries.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 29,
    name: "Dr. Judy",
    specialty: "Orthopedics",
    fee: 500,
    img: doc17,
    experience: 8,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Mental Health Clinic",
    contact: "654-123-7890",
    summary: "Dr. Judy is an expert in mental health and psychiatric disorders.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 30,
    name: "Dr. Rashmi",
    specialty: "Orthopedics",
    fee: 600,
    img: doc21,
    experience: 10,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Psychiatry Care Center",
    contact: "123-789-6540",
    summary: "Dr. Rashmi specializes in mood disorders and therapy treatments.",
    availability: false,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 31,
    name: "Dr. Tina",
    specialty: "Pediatrics",
    fee: 650,
    img: doc31,
    experience: 5,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Mind Wellness Clinic",
    contact: "789-654-1230",
    summary: "Dr. Tina provides therapy and medication management for mental health.",
    availability: true,
    hours: "1:00 PM - 9:00 PM",
  },
  {
    id: 32,
    name: "Dr. Yash",
    specialty: "Pediatrics",
    fee: 700,
    img: doc32,
    experience: 7,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Psychiatry Wellness Center",
    contact: "654-789-3210",
    summary: "Dr. Yash has experience in treating complex psychiatric cases.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 33,
    name: "Dr. Rohan",
    specialty: "Pediatrics",
    fee: 700,
    img: doc33,
    experience: 7,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Psychiatry Wellness Center",
    contact: "654-789-3210",
    summary: "Dr. Rohan has experience in treating complex psychiatric cases.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 34,
    name: "Dr. Joshua",
    specialty: "Pediatrics",
    fee: 700,
    img: doc34,
    experience: 7,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Psychiatry Wellness Center",
    contact: "654-789-3210",
    summary: "Dr. Joshua has experience in treating complex psychiatric cases.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 35,
    name: "Dr. Karan",
    specialty: "Pediatrics",
    fee: 700,
    img: doc35,
    experience: 7,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Psychiatry Wellness Center",
    contact: "654-789-3210",
    summary: "Dr. Karan has experience in treating complex psychiatric cases.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 36,
    name: "Dr. Priya Sharma",
    specialty: "Psychiatry",
    fee: 650,
    img: doc36,
    experience: 10,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Mind Care Clinic",
    contact: "987-654-3210",
    summary: "Dr. Priya specializes in anxiety, depression, and bipolar disorder treatments.",
    availability: true,
    hours: "10:00 AM - 6:00 PM",
  },
  {
    id: 37,
    name: "Dr. Amit Verma",
    specialty: "Psychiatry",
    fee: 600,
    img: doc37,
    experience: 8,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Mental Health Institute",
    contact: "876-543-2109",
    summary: "Dr. Amit has expertise in treating schizophrenia and mood disorders.",
    availability: false,
    hours: "12:00 PM - 8:00 PM",
  },
  {
    id: 38,
    name: "Dr. Neha Gupta",
    specialty: "Psychiatry",
    fee: 550,
    img: doc38,
    experience: 12,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Brain Wellness Center",
    contact: "765-432-1098",
    summary: "Dr. Neha is known for her work in child and adolescent psychiatry.",
    availability: true,
    hours: "9:00 AM - 5:00 PM",
  },
  {
    id: 39,
    name: "Dr. Suman Joshi",
    specialty: "Psychiatry",
    fee: 700,
    img: doc39,
    experience: 9,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Holistic Psychiatry Clinic",
    contact: "654-321-0987",
    summary: "Dr. Suman focuses on holistic treatment for mental health disorders.",
    availability: false,
    hours: "11:00 AM - 7:00 PM",
  },
  {
    id: 40,
    name: "Dr. Alia Rao",
    specialty: "Psychiatry",
    fee: 580,
    img: doc40,
    experience: 11,
    qualification: "MBBS, MD (Psychiatry)",
    location: "Mind Health Center",
    contact: "543-210-9876",
    summary: "Dr. Alia is an expert in cognitive behavioral therapy and PTSD treatment.",
    availability: true,
    hours: "10:00 AM - 6:00 PM",
  }
  
];


const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");
  const [isOnline, setIsOnline] = useState(false);

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
                  checked={isOnline}
                  onChange={() => setIsOnline(!isOnline)}
                />
                <label className="text-violet-900 font-semibold">
                  Prefer Online Meet?
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
