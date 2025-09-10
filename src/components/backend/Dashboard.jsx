import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-2">
      <div className="flex flex-col sm:flex-row p-4 gap-6">
        {/* Left panel */}
        <div className="w-full sm:w-1/3 bg-gray-500 shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/admin/services"
                className="block px-3 py-2 rounded hover:bg-orange-100"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="block px-3 py-2 rounded hover:bg-orange-100"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="block px-3 py-2 rounded hover:bg-orange-100"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right panel */}
        <div className="w-full sm:w-2/3 bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome to your Dashboard 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
