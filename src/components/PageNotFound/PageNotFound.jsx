import React from "react";
import { Link } from "react-router-dom"; // Remove if not using react-router

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</p>
      <p className="mt-2 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
      
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
