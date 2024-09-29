import React, { useState, useEffect, useRef, Suspense, lazy, useContext } from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserAppointment from "./pages/UserAppointment";
import DoctorPage from "./pages/DoctorPage";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/FormPage";
import ProfilePage from "./pages/ProfilePage";
import DoctorForm from "./pages/DoctorForm";
import Calling from "./pages/room";
import AdminDashboard from "./pages/AdminDashboard";
import { Home, Calendar, LogIn } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import DoctorDetails from "./pages/DoctorDetails";
import { MdAdminPanelSettings } from "react-icons/md";
import { signOutUser } from "./firebase/auth";
import { AuthContext } from "./contexts/authContext";

import CardiologyPage from './pages/CardiologyPage'
import DermatologyPage from './pages/DermatologyPage'
import GynecologyPage from './pages/GynecologyPage'
import OrthopedicsPage from './pages/OrthopedicsPage'
import PediatricsPage from './pages/PediatricsPage'
import PsychiatryPage from './pages/PsychiatryPage'
import NeurologyPage from './pages/NeurologyPage'
import DentistPage from './pages/DentistPage'


// PrivateRoute Component
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useContext(AuthContext);


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      setIsAuthenticated(false);
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <BrowserRouter>
      <header className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            <span className="text-white">DOC</span>
            <span className="text-yellow-300">POINT</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="flex items-center text-white hover:text-yellow-300 transition-colors font-semibold"
              >
                <Home className="mr-2 stroke-2" size={22} />
                <span className="text-sm uppercase tracking-wide">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/doctor"
                className="flex items-center text-white hover:text-yellow-300 transition-colors font-semibold"
              >
                <FaUserDoctor className="mr-2" size={22} />
                <span className="text-sm uppercase tracking-wide">Doctors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/appointments"
                className="flex items-center text-white hover:text-yellow-300 transition-colors font-semibold"
              >
                <Calendar className="mr-2 stroke-2" size={22} />
                <span className="text-sm uppercase tracking-wide">My Appointments</span>
              </Link>
            </li>
            {user ? (
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white hover:text-yellow-300 transition-colors font-semibold"
                >
                  <FaUserCircle className="mr-2" size={22} />
                  <span className="text-sm uppercase tracking-wide">{user.displayName}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition-colors"
                        >
                          View Full Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/appointments"
                          className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition-colors"
                        >
                          My Appointments
                        </Link>
                      </li>
                      <li>
                        <Link to="/auth/login" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100 transition-colors" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link to="/auth/login">
                  <Button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-2 px-4 rounded-full transition-colors">
                    <LogIn className="mr-2 stroke-2" size={20} />
                    <span className="text-sm uppercase tracking-wide">Login</span>
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointments" element={<UserAppointment />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/doctor/:specialty" element={<DoctorPage />} />
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/doctors/:id" element={<DoctorDetails />} />


          <Route path="/profile" element={<ProfilePage  />} />
          <Route path="/patientform" element={<FormPage />} />
          <Route path="/doctorform" element={<DoctorForm />} /> 
          <Route path= "/room/:roomId" element={<Calling />} />
          <Route path= "/main/:roomId" element={<UserAppointment/>} />


        <Route path="/specialty/cardiology" element={<CardiologyPage />} />
        <Route path="/specialty/dermatology" element={<DermatologyPage />} />
        <Route path="/specialty/pediatrics" element={<PediatricsPage />} />
        <Route path="/specialty/neurology" element={<NeurologyPage />} />
        <Route path="/specialty/orthopedics" element={<OrthopedicsPage />} />
        <Route path="/specialty/psychiatry" element={<PsychiatryPage />} />
        <Route path="/specialty/gynecology" element={<GynecologyPage />} />
        <Route path="/specialty/dentist" element={<DentistPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;