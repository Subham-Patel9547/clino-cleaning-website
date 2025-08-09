import React from "react";
import { FaPlay } from "react-icons/fa";
import StatsSection from "./StatsSection";
import ClientsSection from "./ClientsSection";
import FeaturesSection from "./FeaturesSection";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-3 lg:px-8 py-4 lg:py-10 lg:pb-20 bg-gradient-to-br from-[#c8e2ff] to-[#92ffd5]">
      {/* Left Text Content */}
      <div>
        <div className="max-w-xl">
          <span
            data-aos="fade-top"
            className="bg-blue-100 tracking-widest text-blue-600 px-4 py-1 rounded-full text-sm font-semibold a"
          >
            We Are Clino
          </span>
          <h1
            data-aos="fade-bottom"
            className="text-2xl md:text-5xl font-bold mt-4 leading-tight text-gray-800 font-style"
          >
            Feel your way for freshness
          </h1>
          <p data-aos="fade-right" className="text-gray-600 mt-4">
            Experience the epitome of cleanliness with Clino. We provide
            top-notch cleaning services tailored to your needs, ensuring your
            spaces shine with perfection.
          </p>

          <div data-aos="fade-right" className="flex items-center gap-4 mt-6">
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Our Services
            </button>
            <button
              onClick={() => navigate("coming-soon")}
              className="p-4 cursor-pointer bg-yellow-400 rounded-full text-white shadow-lg hover:bg-yellow-500"
            >
              <FaPlay />
            </button>
          </div>
        </div>

        {/* client section */}
        <div data-aos="fade-right" className="my-2">
          <ClientsSection />
        </div>

        {/* stats section */}
        <div data-aos="fade-right">
          <StatsSection />
        </div>

        {/* feature section */}
        <div className="lg:absolute p-0 my-2">
          <FeaturesSection />
        </div>
      </div>

      {/* Right Image */}
      <div data-aos="fade-top" className="w-full lg:w-[400px] rounded-2xl">
        <img
          src="/Images/main-home.jpg"
          alt="cleaning tools"
          className="w-full h-[450px] opacity-80 rounded-2xl object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
        />
      </div>
    </section>
  );
};

export default HeroSection;
