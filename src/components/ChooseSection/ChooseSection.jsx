import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const ChooseSection = () => {
  const reasons = [
    "our team comprises skilled professionals committed",
    "count on us to be there when you need us",
    "your satisfaction is our priority",
  ];
  const navigate = useNavigate();
  return (
    <section className="bg-white py-10 px-3 md:px-8">
      <div className="lg:max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full space-y-6">
          <span className="inline-block text-center lg:text-start w-full lg:w-auto tracking-widest text-sm bg-blue-200 text-blue-600 px-4 py-1 rounded-full mb-3">
            Choose
          </span>

          <h2
            data-aos="fade-top"
            className="text-4xl font-style font-bold text-[#1e1e2f] leading-snug font-[Poppins]"
          >
            Why Choose Clino <br /> Cleaning Services
          </h2>

          <p data-aos="fade-top" className="text-gray-600 leading-relaxed">
            With Clino, you’re not just getting a cleaning service; you’re
            gaining a partner in cleanliness. Here’s why clients trust us:
          </p>

          <ul className="space-y-2 text-gray-700">
            {reasons.map((reason, index) => (
              <li
                data-aos="fade-top"
                key={index}
                className="flex items-start gap-2"
              >
                <FaCheckCircle className="text-blue-500 mt-1" />
                {reason}
              </li>
            ))}
          </ul>

          {/* Video Block & Contact */}
          <div data-aos="fade-top" className="flex items-center gap-4 pt-2">
            <div className="relative w-92 h-30 rounded-lg overflow-hidden shadow-md">
              <video
                src="/videos/home-clean.mp4"
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
              />
            </div>

            <p
              className="text-gray-500 text-sm text-start"
              style={{ wordSpacing: "0.7rem" }}
            >
              We use top-quality products and proven techniques to ensure
              superior cleanliness and hygiene
            </p>
          </div>

          {/* CTA & Contact */}
          <div data-aos="fade-top" className="flex items-center gap-6 pt-6">
            <button
              onClick={() => navigate("/coming-soon")}
              className=" cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition-all"
            >
              Find Out More
            </button>
            <div>
              <p className="text-sm text-blue-600 font-semibold">
                Have Any Questions?
              </p>
              <p className="text-sm text-gray-700">+91 7266896432</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative flex flex-col items-center gap-6">
          <img
            data-aos="fade-bottom"
            src="/Images/choose1.jpg"
            alt="Cleaning Bucket"
            className="w-full h-70 object-cover rounded-xl shadow-lg"
          />
          <div className="w-full -mt-20 flex items-end justify-end gap-4">
            <div
              data-aos="fade-bottom"
              className="bg-blue-500 text-white px-6 py-4 rounded-xl shadow-blue-800 shadow-lg text-center"
            >
              <h2 className="text-6xl font-bold">16+</h2>
              <p className="text-xl">
                Successful <br /> Years
              </p>
            </div>
            <div
              data-aos="fade-bottom"
              className="border-t-8 pt-3 border-l-8 pl-3 border-r-8  border-white rounded-4xl  bg-white"
            >
              <img
                src="/Images/choose2.jpg"
                alt="Cleaner"
                className="w-62 h-62 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
