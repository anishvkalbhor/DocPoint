import Image from "next/image";
import Link from "next/link";
import React from "react";
import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { DataTable } from "@/components/table/DataTable";
import { columns, Payment } from "@/components/table/columns";

const Admin = () => {
  const [appointments, setAppointments] = React.useState({
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
    documents: []
  });

  React.useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getRecentAppointmentList();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
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

        {/* <section className="admin-stat">
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
        <DataTable columns={columns} data={appointments.documents} /> */}
      </main>
    </div>
  );
};

export default Admin;