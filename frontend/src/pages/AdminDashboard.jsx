import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StatCard from "@/components/StatCard";
import DataTable  from "@/components/DataTable";
import { columns } from "@/components/columns";

const Admin = () => {
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getDocs(query(collection(db, "appointments"), orderBy("date", "desc"), limit(10)));
        const appointmentList = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  if (!appointments) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link to="/" className="cursor-pointer">
          <img
            src="/assets/icons/qk-logo.svg"
            height={32}
            width={162}
            alt="Logo"
            className="-mb-4 h-16 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome Admin!</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat grid grid-cols-3 gap-4">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <section className="admin-table">
          <DataTable columns={columns} data={appointments.documents} />
        </section>
      </main>
    </div>
  );
};

export default Admin;
