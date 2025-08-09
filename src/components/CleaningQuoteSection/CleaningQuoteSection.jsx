import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useNavigation } from "react-router";
import { Link } from "react-router";

const cleaningImages = [
  "/Images/blog1.jpg",
  "/Images/blog2.jpg",
  "/Images/blog3.jpg",
  "/Images/blog4.jpg",
  "/Images/blog5.jpg",
  "/Images/blog6.jpg",
];

const brandLogos = ["Magner", "BROG", "VONICA", "Katerio", "FOXER"];

const CleaningQuoteSection = () => {
  const navigation = useNavigate();
  return (
    <section className="bg-gray-100 py-10 px-3 md:px-8">
      {/* Cleaning Images */}
      <div className="flex flex-wrap gap-4 justify-center w-full lg:max-w-6xl mx-auto px-4">
        {cleaningImages.map((src, index) => (
          <div
            data-aos="fade-right"
            key={index}
            className="w-full sm:w-[48%] md:w-[31%]"
          >
            <img
              src={src}
              alt={`Cleaning ${index + 1}`}
              className="w-full h-60 object-cover rounded-md shadow transition-transform duration-300 hover:-translate-y-2"
            />
          </div>
        ))}
      </div>

      {/* Call for Quote Section */}
      <div className="max-w-4xl mx-auto my-10 bg-blue-500 text-white px-8 py-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div>
          <h3 className="text-xl font-semibold">Call For A Free Quote</h3>
          <p className="text-sm opacity-80">
            Exteur Sint Occaecat Cupidatat Non Proident
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917266896432?text=Hello%2C%20I%20want%20a%20cleaning%20service%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-500 p-3 rounded-full"
          >
            <FaWhatsapp size={20} />
          </a>
          <p className="font-semibold text-lg">7266896432</p>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 font-semibold text-lg mt-6">
        {brandLogos.map((logo, index) => (
          <button
            onClick={() => navigation("/coming-soon")}
            key={index}
            className="opacity-70 hover:opacity-100 transition cursor-pointer"
          >
            {logo}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CleaningQuoteSection;
