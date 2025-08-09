import React from "react";
import { FaUsers, FaStar, FaDollarSign } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers className="text-2xl text-blue-500" />,
    title: "Expert Team",
    desc: "Our highly trained professionals bring a wealth of experience.",
  },
  {
    icon: <FaStar className="text-2xl text-blue-500" />,
    title: "Quality Service",
    desc: "We guarantee a spotless finish that exceeds your expectations.",
  },
  {
    icon: <FaDollarSign className="text-2xl text-blue-500" />,
    title: "Affordable Price",
    desc: "Exceptional services at prices that are affordable to everyone.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="flex flex-wrap  w-full">
      {features.map((feature, index) => (
        <div data-aos="fade-right" key={index}>
          <div className="bg-white px-2 py-6 m-1 cursor-pointer rounded-xl shadow transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4">{feature.icon}</div>
            <h4 className="font-bold text-lg">{feature.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
