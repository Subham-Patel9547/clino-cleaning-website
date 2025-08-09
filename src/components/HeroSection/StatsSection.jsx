import React from "react";

const StatsSection = () => {
  return (
    <section className="flex lg:flex-row flex-col text-center lg:text-start gap-10">
      <div className="bg-white px-5  py-2 rounded-2xl">
        <h3 className="text-3xl font-bold text-blue-700">800+</h3>
        <p className="text-gray-900 font-bold">Happy Clients</p>
      </div>
      <div className="bg-white px-5 py-2 rounded-2xl">
        <h3 className="text-3xl font-bold text-blue-700">180+</h3>
        <p className="text-gray-900 font-bold">Awards Received</p>
      </div>
    </section>
  );
};

export default StatsSection;
