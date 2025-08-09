import React from "react";

const ClientsSection = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-3">
        <img
          src="/Images/client1.jpeg"
          alt="client"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/Images/client2.jpeg"
          alt="client"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/Images/client3.jpeg"
          alt="client"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/Images/client1.jpeg"
          alt="client"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/Images/client2.jpeg"
          alt="client"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/Images/client3.jpeg"
          alt="client"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
      <span className="text-sm text-gray-900 font-semibold">
        +65 Our VIP Clients
      </span>
    </div>
  );
};

export default ClientsSection;
