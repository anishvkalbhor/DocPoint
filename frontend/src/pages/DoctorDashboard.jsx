import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StatCard from "@/components/StatCard";
import DataTable from "@/components/DataTable";
import { columns } from "@/components/columns";
import { CalendarIcon, ClockIcon, XCircleIcon, UserGroupIcon, CogIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const Admin = () => {
  const [appointments, setAppointments] = useState(null);
  const [filter, setFilter] = useState("scheduled");

  const getThemeClass = () => {
    switch (filter) {
      case "pending":
        return "bg-amber-50 text-amber-800";
      case "cancelled":
        return "bg-rose-50 text-rose-800";
      case "scheduled":
        return "bg-emerald-50 text-emerald-800";
      default:
        return "bg-violet-50 text-violet-800";
    }
  };

  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     try {
  //       const data = await getDocs(query(collection(db, "appointments"), orderBy("date", "desc"), limit(10)));
  //       const appointmentList = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));        setAppointments(data);
  //     } catch (error) {
  //       console.error("Error fetching appointments:", error);
  //     }
  //   };

  //   fetchAppointments();
  // }, []);

  // if (!appointments) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className={`w-full min-h-screen ${getThemeClass()} transition-colors duration-300 font-sans`}>
      <header className={`shadow-lg p-6 w-full transition-colors duration-300`}>
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <h1 className={`text-4xl font-extrabold flex items-center ${getThemeClass()} transition-colors duration-300 font-serif`}>
            <CogIcon className={`h-10 w-10 mr-4 ${filter === "pending" ? "text-amber-500" : filter === "cancelled" ? "text-rose-500" : filter === "scheduled" ? "text-emerald-500" : "text-violet-500"} transition-colors duration-300`} />
            Admin Dashboard
          </h1>
          <nav>
            <Link to="/profile" className={`text-lg font-semibold hover:opacity-80 transition-opacity duration-300 ${getThemeClass()} flex items-center`}>
              <UserGroupIcon className="h-6 w-6 mr-2" />
              Profile
            </Link>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto py-12 px-6">
        <section className={`p-10 rounded-2xl shadow-2xl mb-12 transition-colors duration-300 backdrop-blur-sm bg-opacity-90 ${getThemeClass()}`}>
          <h2 className={`text-5xl font-extrabold flex items-center mb-8 ${getThemeClass()} transition-colors duration-300 font-serif`}>
            <ChartBarIcon className={`h-12 w-12 mr-6 ${filter === "pending" ? "text-amber-500" : filter === "cancelled" ? "text-rose-500" : filter === "scheduled" ? "text-emerald-500" : "text-violet-500"} transition-colors duration-300`} />
            Welcome Admin!
          </h2>
          <p className={`text-2xl flex items-center ${getThemeClass()} transition-colors duration-300 font-light`}>
            <CalendarIcon className={`h-8 w-8 mr-4 ${filter === "pending" ? "text-amber-500" : filter === "cancelled" ? "text-rose-500" : filter === "scheduled" ? "text-emerald-500" : "text-violet-500"} transition-colors duration-300`} />
            Start the day by managing new appointments
          </p>
        </section>
      
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <StatCard
            type="appointments"
            count={0}
            label="Scheduled appointments"
            icon={<CalendarIcon className="h-12 w-12" />}
            onClick={() => setFilter("scheduled")}
            className={`transition-all duration-300 transform hover:scale-105 shadow-xl rounded-xl`}
          />
          <StatCard
            type="pending"
            count={0}
            label="Pending appointments"
            icon={<ClockIcon className="h-12 w-12" />}
            onClick={() => setFilter("pending")}
            className={`transition-all duration-300 transform hover:scale-105 shadow-xl rounded-xl`}
          />
          <StatCard
            type="cancelled"
            count={0}
            label="Cancelled appointments"
            icon={<XCircleIcon className="h-12 w-12" />}
            onClick={() => setFilter("cancelled")}
            className={`transition-all duration-300 transform hover:scale-105 shadow-xl rounded-xl`}
          />
        </section>

        <section className={`p-10 rounded-2xl shadow-2xl transition-colors duration-300 backdrop-blur-sm bg-opacity-90 ${getThemeClass()}`}>
          <h3 className={`text-3xl font-bold mb-8 ${getThemeClass()} transition-colors duration-300 font-serif`}>Recent Appointments</h3>
          <DataTable columns={columns} data={[]} />
        </section>
      </main>
    </div>
  );
};

export default Admin;