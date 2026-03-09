// src/components/SolutionsByScenario1.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { scenarios } from "../data/scenariosData";

function SolutionsByScenario1() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
          Solutions by Scenario
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {scenarios.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -8 }}
            onClick={() => navigate(`/solutions/${item.id}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {item.shortDesc}
              </p>

              {/* Explore Now Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/solutions/${item.id}`);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mt-auto"
              >
                Explore Now →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsByScenario1;
