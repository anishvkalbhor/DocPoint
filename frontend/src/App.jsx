import React, { useState, useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserAppointment from "./pages/UserAppointment";
import DoctorPage from "./pages/DoctorPage";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/FormPage";

import AdminDashboard from "./pages/AdminDashboard";
import { Home, Calendar, LogIn } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import DoctorDetails from "./pages/DoctorDetails";
import { MdAdminPanelSettings } from "react-icons/md";
import { signOutUser } from "./firebase/auth";
import DoctorForm from "./pages/DoctorForm";

// const ProtectedRoute = ({children}) =>{
//   const {isAuthenticated,user} = useAuthStore();
  
//   if (!isAuthenticated){
//     return <Navigate to="/login" replace/>
//   }

//   if(!user.isVerified){
//     return <Navigate to="/verifyemail" replace />
//   }

//   if(user.role === "admin"){
//     return <Navigate to="/adminDashboard" replace/>
//   }

//   return children;
// }

// const RedirectAuthenticatedUser= ({children}) =>{
//   const {isAuthenticated,user} = useAuthStore();
  
//   if (isAuthenticated && user.isVerified && user.role === "evaluator"){
//     return <Navigate to="/" replace/>
//   }
//   else if (isAuthenticated && user.isVerified && user.role === "admin"){
//     return <Navigate to="/adminDashboard" replace/>
//   }

//   return children;
// }

// const ProtectedAdminRoute = ({children}) =>{
//   const {isAuthenticated,user} = useAuthStore();
  
//   if (!isAuthenticated){
//     return <Navigate to="/login" replace/>
//   }

//   if(!user.isVerified){
//     return <Navigate to="/verifyemail" replace />
//   }

//   if(user.role !== "admin"){
//     return <Navigate to="/" replace/>
//   }

//   return children;
// }

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState(""); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (user && user.name) {
      setUserName(user.name);
    }
  }, [user]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      setIsAuthenticated(false);
      setUser(null);
      setUserName("");
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
      <header className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            <span className="text-blue-600">DOC</span>
            <span className="text-gray-800">POINT</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Home className="mr-2" size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/doctor"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaUserDoctor className="mr-2" size={20} />
                <span>Doctors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/appointments"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Calendar className="mr-2" size={20} />
                <span>My Appointments</span>
              </Link>
            </li>
            {isAuthenticated && (
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaUserCircle className="mr-2" size={20} />
                  <span>{userName}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          View Full Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/appointments"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          My Appointments
                        </Link>
                      </li>
                      <li>
                        <Link to="/auth/login" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/auth/login">
                  <Button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white">
                    <LogIn className="mr-2" size={20} />
                    <span>Login</span>
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
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/registerform" element={<FormPage />} /> 
          <Route path="/doctorform" element={<DoctorForm />} /> 



        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;