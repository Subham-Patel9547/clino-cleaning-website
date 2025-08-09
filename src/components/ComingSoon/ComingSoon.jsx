import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          🚧 Coming Soon!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We're working hard to bring something awesome. Stay tuned!
        </p>

        {/* Email Notify Form */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full sm:w-auto rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition">
            Notify Me
          </button>
        </div>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition text-sm font-medium"
          >
            <FaHome className="text-base" />
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Clino Cleaning Services. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
