"use client";

import React, { useState } from "react"; // Import useState for dropdown state
import CogIcon from "../icons/CogIcon";
import BellIcon from "../icons/BellIcon";
import AdminDropdownIcon from "../icons/AdminDropdownIcon";
import ZeroBlindEyeIcon from "../icons/ZeroBlindEyeIcon";
import { useUser } from "@auth0/nextjs-auth0"; // Import useUser hook

const TopNav = () => {
  const { user, error, isLoading } = useUser(); // Get user state from Auth0
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isLoading) return <div>Loading...</div>; // Optional: Show loading state
  const shouldShowLogin = !user || error;
  return (
    <nav className="flex justify-between items-center mb-8 px-4 py-2">
      <div className="flex items-center space-x-2">
        <ZeroBlindEyeIcon
          color="rgb(var(--color-neon-blue))"
          className="w-8 h-6"
        />
        <span className="text-2xl font-extrabold text-white">ZeroBlind</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
          <CogIcon className="w-7 h-7" />
        </button>
        <button className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
          <BellIcon className="w-7 h-7" />
        </button>

        <div className="relative">
          {shouldShowLogin ? (
            <a
              href="/auth/login"
              className="px-4 py-2 bg-neon-blue text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Log In
            </a>
          ) : (
            // If user exists, show admin dropdown
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={toggleDropdown} // Toggle dropdown on click
            >
              <span className="text-sm font-semibold text-gray-300 group-hover:text-neon-blue transition-colors duration-200">
                {user.name || user.email || "Admin"}{" "}
                {/* Display user name/email or default to Admin */}
              </span>
              <AdminDropdownIcon className="w-5 h-5 text-gray-300 group-hover:text-neon-blue transition-colors duration-200" />

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-dark-background border border-gray-700 rounded shadow-lg z-10">
                  {/* Optional: Add a profile link */}
                  {/* <a
                    href="/profile" // Adjust this to your profile page route
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Profile
                  </a> */}
                  <a
                    href="/auth/logout"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Log Out
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
