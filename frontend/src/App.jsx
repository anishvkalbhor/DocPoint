import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserAppointment from "./pages/UserAppointment";
import DoctorPage from "./pages/DoctorPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import { Home, Calendar, LogIn } from "lucide-react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import DoctorDetails from './pages/DoctorDetails';

const App = () => {
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
            <li>
              <Link
                to="/admin"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <MdAdminPanelSettings className="mr-2" size={20} />
                <span>Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/auth/login">
                <Button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white">
                  <LogIn className="mr-2" size={20} />
                  <span>Login</span>
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointments" element={<UserAppointment />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;