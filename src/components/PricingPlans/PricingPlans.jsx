import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const plans = [
  {
    title: "Basic Plan",
    price: 30,
    features: [
      "cleaning bathrooms",
      "mopping floors",
      "vacuuming carpets and rugs",
      "dusting and wiping surfaces",
    ],
  },
  {
    title: "Standard Plan",
    price: 70,
    features: [
      "all services from the basic",
      "washing baseboards, molding",
      "cleaning inside cabinets",
      "cleaning inside drawers",
    ],
  },
  {
    title: "Premium Plan",
    price: 120,
    features: [
      "all services from standard",
      "cleaning inside closets",
      "emptying trash bins",
      "high-touch surface",
    ],
  },
];

export default function PricingPlans() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-[rgb(224,241,255)] to-[#b6e3ff] py-10 px-6 md:px-8 ">
      <div
        data-aos="fade-right"
        className="flex justify-center flex-col lg:flex-row w-full mb-15"
      >
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-blue-500 font-medium uppercase tracking-widest">
            Price Package
          </p>
          <h2 className="text-3xl font-style md:text-4xl font-extrabold text-gray-800">
            Choose Your Perfect Clean
          </h2>
        </div>
        <div>
          <p
            className="text-gray-600 max-w-xl mx-auto"
            style={{ wordSpacing: "0.6rem" }}
          >
            Explore our range of meticulously curated cleaning packages designed
            to meet your unique needs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div data-aos="fade-right" key={index}>
            <div className="bg-white cursor-pointer rounded-xl shadow-md p-6 flex flex-col items-center space-y-4  transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <div className="text-xl font-extrabold text-blue-500">
                $<span className="text-5xl">{plan.price}</span>
                <span className="text-base font-medium text-gray-600 ml-1">
                  monthly
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-left w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate("coming-soon")}
                className="mt-4 cursor-pointer w-full px-6 py-2 bg-blue-500
                text-white rounded-md hover:bg-blue-600 transition"
              >
                {" "}
                Buy Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
