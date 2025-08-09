import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaTelegramPlane,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import { GiVacuumCleaner } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons = [
    {
      icon: <CiLinkedin size={24} />,
      link: "https://www.linkedin.com/in/subham-patel9547",
    },
    {
      icon: <FiGithub size={24} />,
      link: "https://github.com/Subham-Patel9547",
    },
    {
      icon: <PiTelegramLogoLight size={24} />,
      link: "https://t.me/Subham_Patel9547",
    },
    {
      icon: <FaInstagram size={24} />,
      link: "https://www.instagram.com/subh__am9547",
    },
    {
      icon: <FaFacebook size={24} />,
      link: "https://www.facebook.com/shivampatel.hindu",
    },
  ];

  return (
    <footer className="bg-[#0a1f44] text-white py-12 px-6 md:px-20 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* Logo + Email */}
        <div data-aos="fade-top">
          <Link to="/">
            <div className="text-3xl font-bold flex items-center gap-2 mb-4">
              <div className="h-10 w-10 flex justify-center items-center rounded-full">
                <GiVacuumCleaner className="p-1 text-blue-500 font-bold text-8xl" />
              </div>
              <span>Clino</span>
            </div>
          </Link>
          <p className="text-gray-300 mb-6">
            Ready to experience the Clino difference? Contact us today to
            schedule your cleaning service or request a free estimate.
          </p>
          <div className="flex bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="your email here"
              className="p-2 text-gray-800 outline-none flex-grow"
            />
            <button className="bg-blue-500 px-4 flex items-center justify-center">
              <FaTelegramPlane />
            </button>
          </div>
        </div>

        {/* Address */}
        <div data-aos="fade-bottom">
          <h4 className="text-white font-semibold mb-4">Address</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhone /> +91 7266896432
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> subhampatel9547@gmail
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Prayagraj, Uttar Pradesh
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe />
              <a
                href="https://sukaj-infotech.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                https://sukaj-infotech.netlify.app/
              </a>
            </li>

            <li className="flex gap-4 mt-2 text-lg">
              {icons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-full bg-white/10 backdrop-blur shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-110 social-media-icon-shadow"
                >
                  {item.icon}
                </a>
              ))}
            </li>
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-top">
          <h4 className="text-white font-semibold mb-4">Service Links</h4>
          <ul className="space-y-2 text-gray-300 capitalize">
            <li>
              <Link to="/" className="hover:text-white transition">
                home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                about us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white transition">
                pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* quick links */}
        <div data-aos="fade-bottom">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 capitalize">
            <li>
              <Link to="/testimonial" className="hover:text-white transition">
                testimonials
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition">
                blog
              </Link>
            </li>
            <li>
              <Link to="/coming-soon" className="hover:text-white transition">
                coming soon
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs border-t border-gray-700 pt-4">
        <p>© 2025 Clino Cleaning Services. All rights reserved.</p>
        <p className="italic">Design by Subham Patel</p>
      </div>
    </footer>
  );
};

export default Footer;
