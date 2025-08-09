import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white pb-12 lg:pt-32 px-3 md:px-8 font-sans text-gray-700">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left - Images and Years */}
        <div className="flex-1 space-y-6 mt-10">
          <div className="flex gap-2">
            <div data-aos="fade-top" className="w-1/2">
              <img
                src="/Images/about1.jpg"
                alt="Cleaning 1"
                className="h-80 w-[100%] rounded-xl object-cover shadow-lg"
              />
            </div>
            <div data-aos="fade-bottom" className="w-1/2">
              <img
                src="/Images/clean2.jpeg"
                alt="Cleaning 2"
                className="w-60 h-60 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center -mt-22">
            <div
              data-aos="fade-left"
              className="bg-blue-500 text-white px-6 py-4 rounded-xl shadow-blue-800 shadow-lg text-center"
            >
              <h2 className="text-6xl font-bold">16+</h2>
              <p className="text-xl">Successful Years</p>
            </div>
            <div
              data-aos="fade-right"
              className="w-full h-80 overflow-hidden rounded-2xl border-[13px] border-white bg-white"
            >
              <img
                src="/Images/about2.jpg"
                alt="Cleaning 3"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right - Text and Stats */}
        <div className="flex-1">
          <div className="mb-3">
            <span
              data-aos="fade-bottom"
              className="bg-blue-100 tracking-widest text-blue-600 text-sm font-semibold px-3 py-1 rounded-sm"
            >
              About Us
            </span>
          </div>
          <h2
            data-aos="fade-top"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight font-style"
          >
            We Make Places Clean & Bright
          </h2>
          <p data-aos="fade-bottom" className="mb-6 text-gray-600">
            At Clino, we're dedicated to transforming your living and working
            spaces into pristine havens. With years of experience and a passion
            for cleanliness, we strive to exceed your expectations every time.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6 text-center md:text-left">
            <div data-aos="fade-right" className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">
                1000+
              </h3>
              <p className="text-sm font-bold text-gray-900">
                Project Completed
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="flex-1 md:border-l md:border-gray-300 md:pl-6"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">
                123+
              </h3>
              <p className="text-sm font-bold text-gray-900">Expert Cleaners</p>
            </div>
            <div
              data-aos="fade-right"
              className="flex-1 md:border-l md:border-gray-300 md:pl-6"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">
                400+
              </h3>
              <p className="text-sm font-bold text-gray-900">Repeat Clients</p>
            </div>
          </div>

          {/* Signature */}
          <div data-aos="fade-top">
            {/* signature image */}
            <img src="/Images/signature.png" className="w-40 -ml-6" />

            <p className="text-sm text-gray-700 -mt-2">Subham Patel - CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
