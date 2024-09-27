import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Admin = () => {
  
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
      <Link to="/" className="text-2xl font-bold cursor-pointer">
            <span className="text-blue-600">DOC</span>
            <span className="text-gray-800">POINT</span>
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

      </main>
    </div>
  );
};

export default Admin;