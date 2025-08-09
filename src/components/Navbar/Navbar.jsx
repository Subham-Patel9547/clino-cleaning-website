import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const navLinkClass = ({ isActive }) =>
    `font-bold ${isActive ? "text-blue-500" : "text-blue-900"}`;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-sm border-b backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" onClick={scrollToTop} className="cursor-pointer">
          <div className="flex items-center space-x-1 text-2xl font-bold">
            <GiVacuumCleaner className="p-1 text-blue-500 text-4xl" />
            <span className="text-gray-800">Clino</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-xl">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonial" className={navLinkClass}>
              Testimonial
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div
            onClick={() => navigate("/coming-soon")}
            className="p-2 bg-[#2d2e32] rounded-full text-white cursor-pointer"
          >
            <FaSearch />
          </div>
          <button
            onClick={() => navigate("/coming-soon")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black  backdrop-blur-md transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div
          className="flex flex-col h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top section */}
          <div className="p-4 flex justify-between items-center border-b border-[#34D399]">
            <h1 className="text-white font-bold text-xl">Clino</h1>
            <button onClick={toggleMenu} className="text-white font-bold">
              <IoClose size={24} />
            </button>
          </div>

          {/* Center nav links */}
          <div className="relative py-40 flex-1 flex items-center justify-center bg-black">
            <ul className="flex flex-col space-y-6 text-center font-medium text-gray-200 text-lg">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonial"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Testimonial
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
