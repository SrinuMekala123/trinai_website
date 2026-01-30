import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaTv, FaUser, FaWind, FaUsers } from "react-icons/fa";
import { FaPersonRays } from "react-icons/fa6";

import busImage from "../images/smartbus/bus-final.png";
import logo1 from "../images/smartbus/icons/1.jpg";
import logo11 from "../images/smartbus/icons/1.1.jpg";

import logo2 from "../images/smartbus/icons/2.jpg";
import logo22 from "../images/smartbus/icons/2.1.jpg";

import logo3 from "../images/smartbus/icons/3.jpg";
import logo33 from "../images/smartbus/icons/3.1.jpg";

import logo4 from "../images/smartbus/icons/4.jpg";
import logo44 from "../images/smartbus/icons/4.1.jpg";

import logo5 from "../images/smartbus/icons/5.jpg";
import logo55 from "../images/smartbus/icons/5.1.jpg";

import logo6 from "../images/smartbus/icons/6.jpg";
import logo66 from "../images/smartbus/icons/6.1.jpg";

import logo7 from "../images/smartbus/icons/7.jpg";
import logo77 from "../images/smartbus/icons/7.1.jpg";
import logo8 from "../images/smartbus/icons/8.jpg";
import logo88 from "../images/smartbus/icons/8.1.jpg";

import logo9 from "../images/smartbus/icons/13.jpeg";
import logo99 from "../images/smartbus/icons/13.1.jpeg";

import logo10 from "../images/smartbus/icons/10.jpg";
import logo1010 from "../images/smartbus/icons/10.1.jpg";

import logo111 from "../images/smartbus/icons/11.jpg";
import logo1111 from "../images/smartbus/icons/11.1.jpg";

import logo12 from "../images/smartbus/icons/12.jpg";
import logo1212 from "../images/smartbus/icons/12.1.jpg";

const systems = [
  {
    id: "bsd-camera",
    name: "BSD Camera",
    description:
      "Blind Spot Pedestrian detection to improve safety by alerting the driver.",
    position: { top: "16%", left: "22%" },
    icon: logo11,
    icon1: logo1,
  },
  {
    id: "front-passenger-camera",
    name: "Front Passenger Camera",
    description: "Front view monitoring for passenger and road safety.",
    position: { top: "15%", left: "50%" },
    icon: logo22,
    icon1: logo2,
  },
  {
    id: "front-camera",
    name: "Front Camera",
    description: "Blind Spot Pedestrian detection",
    position: { top: "20%", left: "68%" },
    icon: logo33,
    icon1: logo3,
  },
  {
    id: "rear-view-camera",
    name: "Rear View Camera",
    description: "Monitors the vehicle's rear for reversing and safety.",
    position: { top: "44%", left: "14%" },
    icon: logo44,
    icon1: logo4,
  },
  {
    id: "rear-passenger-camera",
    name: "Rear Passenger Camera",
    description: "Rear monitoring for passenger safety.",
    position: { top: "69%", left: "18%" },
    icon: logo55,
    icon1: logo5,
  },
  {
    id: "led-screen",
    name: "LED Screen",
    description: "Station announcement display for passengers.",
    position: { top: "89%", left: "13.5%" },
    icon: logo66,
    icon1: logo6,
  },
  {
    id: "led-display",
    name: "LED Display",
    description: "Displays advertisements inside the bus.",
    position: { top: "84%", left: "36%" },
    icon: logo77,
    icon1: logo7,
  },
  {
    id: "breath-analyzer",
    name: "Breath Analyzer",
    description: "Detects alcohol levels to ensure driver sobriety.",
    position: { top: "90%", left: "57.2%" },
    icon: logo88,
    icon1: logo8,
  },
  {
    id: "passenger-counter",
    name: "Passenger Counter",
    description: "Accurate on/off passenger counting",
    position: { top: "83.5%", left: "77%" },
    icon: logo99,
    icon1: logo9,
  },
  {
    id: "intelligent-control-terminal",
    name: "Intelligent Controller Terminal",
    description: "Driver interface for bus systems.",
    position: { top: "70%", left: "84.3%" },
    icon: logo1010,
    icon1: logo10,
  },
  {
    id: "mdvr",
    name: "MDVR",
    description: "Video Storage & Smart Applications",
    position: { top: "49%", left: "84%" },
    icon: logo1111,
    icon1: logo111,
  },
  {
    id: "dms-camera",
    name: "DMS Camera",
    description: "Fatigue Driving state detection",
    position: { top: "34%", left: "79%" },
    icon: logo1212,
    icon1: logo12,
  },
];

export default function BusFeatureInteractive() {
  const [active, setActive] = useState(null);

  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null);

  // Close active on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (id) => {
    setActiveId(null); // Clear selection
    setHoveredId(id); // Show hover tooltip
  };

  const handleMouseLeave = () => {
    if (!activeId) setHoveredId(null);
  };

  const handleClick = (id) => {
    setActiveId(id);
    setHoveredId(null);
  };

  return (
    <div ref={containerRef} className="relative w-full lg:p-6">
      <div className="relative w-full">
        <img src={busImage} alt="Bus diagram" className="w-full" />

        {systems.map((sys) => {
          const isActive = activeId === sys.id;
          const isHovered = hoveredId === sys.id;
          const showDetail = isActive || isHovered;

          return (
            <div key={sys.id}>
              {/* Icon & Label */}
              <div
                onMouseEnter={() => handleMouseEnter(sys.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(sys.id)}
                style={{
                  top: sys.position.top,
                  left: sys.position.left,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute flex flex-col items-center text-center cursor-pointer"
              >
                <img
                  src={showDetail ? sys.icon : sys.icon1}
                  alt={sys.name}
                  className="transition-transform duration-200 hover:scale-110 w-6 lg:w-10 "
                />
                <span
                  className={`lg:block md:block hidden text-xs font-medium mt-1 transition-colors ${
                    showDetail ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {sys.name}
                </span>
              </div>

              {/* Detail box */}
              {showDetail && (
                <div
                  style={{
                    top: `calc(${sys.position.top} + 5%)`,
                    left: sys.position.left,
                    transform: "translate(-50%, 0)",
                  }}
                  className="absolute bg-white shadow-lg rounded-xl p-4 border border-gray-200 w-72 z-10"
                >
                  <h2 className="text-lg font-semibold text-green-600">
                    {sys.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">
                    {sys.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
