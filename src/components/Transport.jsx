import React, { use, useEffect } from "react";

import SmartBusPage from "../images/smartbus/icons/smartbus.jpeg";
import { useNavigate } from "react-router-dom";

const Transport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" grid grid-cols-2 gap-4">
      <div
        className=" card  shadow-md rounded-lg p-6 cursor-pointer"
        onClick={() => navigate("/smartbus")}
      >
        <img
          src={SmartBusPage}
          alt="smartbus"
          className=" hover:scale-100 scale-95 hover:shadow-lg hover:shadow-gray-500 translate-x-0 transition-transform duration-1000 rounded-lg"
        ></img>
        <div className=" text-2xl  my-2 font-bold text-[#27AAE1] flex items-center justify-start">
          Smart Bus Solutions
        </div>
        <p className="text-gray-600  mt-2">
          TRINAI Smart Bus Solution brings together safety, tracking and
          passenger friendly features in every ride, making each journey secure,
          connected and worry free.
        </p>
      </div>
    </div>
  );
};

export default Transport;
