import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const services = [
  { title: "Home Cleaning", image: "/Images/home.jpg", rating: 4.7 },
  { title: "Kitchen Cleaning", image: "/Images/kitchen2.jpg", rating: 5.0 },
  { title: "Office Cleaning", image: "/Images/office.jpg", rating: 4.9 },
  { title: "Window Cleaning", image: "/Images/window.jpg", rating: 4.8 },
  { title: "Sofa Cleaning", image: "/Images/sofa.jpg", rating: 5.0 },
  { title: "Bathroom Cleaning", image: "/Images/bathroom.jpg", rating: 4.6 },
  { title: "Carpet Cleaning", image: "/Images/carpet.jpg", rating: 4.9 },
  { title: "Garage Cleaning", image: "/Images/garage.jpg", rating: 4.7 },
];

const OurServices = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#cfe5fe] py-10 px-4 md:px-8 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-3 mb-12">
        <div data-aos="fade-top">
          <span className="inline-block text-center lg:text-start w-full lg:w-auto tracking-widest text-sm bg-blue-200 text-blue-600 px-4 py-1 rounded-full mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-style font-extrabold text-gray-800">
            Elevate your space with our service
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div data-aos="fade-bottom" className="lg:flex gap-3 hidden">
          <button className="w-24 h-7 cursor-pointer bg-white rounded-full shadow-md hover:bg-blue-100 flex items-center justify-center">
            <FaArrowLeft className="text-xl" />
          </button>
          <button className="w-24 h-7 cursor-pointer bg-white rounded-full shadow-md hover:bg-blue-100 flex items-center justify-center">
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center relative z-10">
        {services.map((service, index) => (
          <div key={index} data-aos="fade-right" className="m-2">
            <div className="bg-white rounded-3xl overflow-hidden w-[380px] lg:w-[280px] shadow-xl relative transition-transform duration-500 ease-in-out hover:-translate-y-2">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] lg:h-[300px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
                />
                <span className="absolute top-3 right-3 bg-white text-sm font-bold px-3 py-1 rounded-full shadow">
                  {service.rating}
                </span>
              </div>
              <div className="flex justify-between items-center px-5 py-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <button
                  onClick={() => navigate("/coming-soon")}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 cursor-pointer"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
