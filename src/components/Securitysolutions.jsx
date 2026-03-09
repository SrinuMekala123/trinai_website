import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  MapPin,
  Wifi,
  Monitor,
  Mic,
  Shield,
  Flame,
  Eye,
  Navigation,
  MessageSquare,
  AlertTriangle,
  Car,
  ArrowRight,
  Sparkles,
  Users,
  Building,
  Zap,
  Activity,
  Bell,
  Target,
  Truck,
  Radio,
  Thermometer,
  UserCheck,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo1 from "../images/security-solutions-icons/1.jpg";
import logo2 from "../images/security-solutions-icons/2.jpg";
import logo3 from "../images/security-solutions-icons/3.jpg";
import logo4 from "../images/security-solutions-icons/4.jpg";
import logo5 from "../images/security-solutions-icons/5.jpg";
import logo6 from "../images/security-solutions-icons/6.jpg";
import logo7 from "../images/security-solutions-icons/7.jpg";
import logo8 from "../images/security-solutions-icons/8.jpg";
import logo9 from "../images/security-solutions-icons/9.jpg";
import logo10 from "../images/security-solutions-icons/10.jpg";
import logo11 from "../images/security-solutions-icons/11.jpg";
import logo12 from "../images/security-solutions-icons/12.jpg";
import logo13 from "../images/security-solutions-icons/13.jpg";
import logo14 from "../images/security-solutions-icons/14.jpg";
import logo15 from "../images/security-solutions-icons/15.jpg";
import logo16 from "../images/security-solutions-icons/16.jpg";
import logo17 from "../images/security-solutions-icons/17.jpg";
import logo18 from "../images/security-solutions-icons/18.jpg";
import logo19 from "../images/security-solutions-icons/19.jpg";

export const securitySolutions = [
  {
    id: "motion-detection",
    icon: logo1,
    title: "Motion Detection",
    category: "surveillance",
    details: {
      description: "Detects movement in restricted areas and triggers alerts.",
      features: [
        "Instant Alerts",
        "Custom Sensitivity",
        "Zone Selection",
        "24/7 Monitoring",
        "AI Analytics",
        "Cloud Storage",
        "Mobile Alerts",
      ],
      benefits: [
        "Prevents Intrusion",
        "Reduces False Alarms",
        "Enhanced Security",
        "Crime Prevention",
        "Evidence Collection",
        "Remote Access",
      ],
    },
  },
  {
    id: "facial-recognition",
    icon: logo2,
    title: "Facial Recognition",
    category: "surveillance",
    details: {
      description: "Identifies individuals using advanced AI algorithms.",
      features: [
        "Real-time Identification",
        "Blacklist/Whitelist",
        "Integration with Access Control",
        "24/7 Monitoring",
        "AI Analytics",
        "Cloud Storage",
        "Mobile Alerts",
      ],
      benefits: [
        "Enhanced Security",
        "Automated Entry",
        "Accurate Records",
        "Crime Prevention",
        "Evidence Collection",
        "Remote Access",
      ],
    },
  },
  {
    id: "remote-monitoring",
    icon: logo3,
    title: "Remote Monitoring",
    category: "surveillance",
    details: {
      description:
        "Monitor your premises in real-time from anywhere in the world.",
      features: [
        "Live Video Feed",
        "Motion Alerts",
        "Two-way Audio",
        "Night Vision",
        "AI Analytics",
        "Cloud Storage",
        "Mobile Alerts",
      ],
      benefits: [
        "Peace of Mind",
        "Immediate Response",
        "Deterrence of Crime",
        "Remote Access",
        "24/7 Surveillance",
      ],
    },
  },
  { id: "lpr", icon: logo4, title: "LPR", category: "surveillance" },
  { id: "pid", icon: logo5, title: "PID", category: "surveillance" },
  { id: "bac", icon: logo6, title: "BAC", category: "tracking" },
  {
    id: "rfid-entry",
    icon: logo7,
    title: "RFID _ Based Entry",
    category: "tracking",
  },

  // Row 2
  {
    id: "public-event-security",
    icon: logo8,
    title: "Public Event Security",
    category: "safety",
  },
  { id: "qms", icon: logo9, title: "QMS", category: "safety" },
  {
    id: "people-counting",
    icon: logo10,
    title: "People Counting",
    category: "tracking",
  },
  {
    id: "atm-security",
    icon: logo11,
    title: "ATM Security Cameras",
    category: "surveillance",
  },
  {
    id: "warehouse-surveillance",
    icon: logo12,
    title: "Ware house Surveillance",
    category: "tracking",
  },
  {
    id: "asset-tracking",
    icon: logo13,
    title: "High-value Asset Tracking",
    category: "tracking",
  },
  {
    id: "server-monitoring",
    icon: logo14,
    title: "Server Room Monitoring",
    category: "surveillance",
  },

  // Row 3
  {
    id: "ppe-detection",
    icon: logo15,
    title: "PPE",
    category: "safety",
  },
  {
    id: "fire-smoke",
    icon: logo16,
    title: "Fire & Smoke Detection",
    category: "safety",
  },
  {
    id: "real-time-hazard",
    icon: logo17,
    title: "Real - Time Hazard",
    category: "safety",
  },
  {
    id: "emergency-response",
    icon: logo18,
    title: "AER",
    category: "safety",
  },
  {
    id: "crowd-monitoring",
    icon: logo19,
    title: "Crowd Monitoring",
    category: "tracking",
  },
  {
    id: "Crossline-detection",
    icon: "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(8).png",
    title: "Crossline Detection",
    category: "tracking",
  },
];

const categoryColors = {
  surveillance: {
    icon: "text-[#27AAE1]",
    border: "border-blue-200",
  },
  tracking: {
    icon: "text-[#27AAE1]",
    border: "border-blue-200",
  },
  safety: {
    icon: "text-[#27AAE1]",
    border: "border-blue-200",
  },
  passenger: {
    icon: "text-[#27AAE1]",
    border: "border-blue-200",
  },
  other: {
    icon: "text-[#27AAE1]",
    border: "border-blue-200",
  },
};

function SecurityCard({ solution, index, onClick }) {
  const IconComponent = solution.icon;
  const colors = categoryColors[solution.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        y: -3,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative cursor-pointer
        bg-white
        border ${colors.border}
        p-3 sm:p-4
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        flex flex-col items-center justify-center
        min-h-[130px] sm:min-h-[140px] md:min-h-[150px]
        overflow-hidden
        rounded-[2rem]
        hover:bg-gradient-to-br hover:from-[#00ADE7] hover:to-[#305292]
      `}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-white/30 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500" />

      {/* Icon - Compact Size */}
      <div
        className={`
        p-2 rounded-lg mb-2
        bg-white/60 group-hover:bg-white
        transition-all duration-300
        group-hover:scale-110
      `}
      >
        <img
          className={`w-9 h-9 sm:w-10 sm:h-10 ${colors.icon}`}
          src={IconComponent}
          alt={solution.title}
        />
      </div>

      {/* Title - Compact */}
      <h3 className="text-[10px] sm:text-xs font-semibold text-gray-800 text-center leading-tight mb-1.5 group-hover:text-white transition-colors duration-300 line-clamp-2">
        {solution.title}
      </h3>

      {/* View More Link - Compact */}
      <div className="mt-1 flex flex-col justify-center items-center gap-0.5">
        <div className="flex items-center gap-1">
          <span className="text-gray-800 font-medium text-[9px] sm:text-[10px] group-hover:text-white transition-colors duration-300">
            View More
          </span>
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-800 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {/* Animated WHITE Underline */}
        <div className="h-0.5 w-0 group-hover:w-full bg-white rounded-full transition-all duration-300" />
      </div>
    </motion.div>
  );
}

function DetailView({ solution, onBack }) {
  const IconComponent = solution.icon;
  const colors = categoryColors[solution.category];

  function getDetailedContent() {
    switch (solution.category) {
      case "surveillance":
        return {
          description:
            "Advanced surveillance technology with AI-powered analytics and real-time monitoring capabilities.",
          features: [
            "24/7 Monitoring",
            "AI Analytics",
            "Cloud Storage",
            "Mobile Alerts",
          ],
          benefits: [
            "Enhanced Security",
            "Crime Prevention",
            "Evidence Collection",
            "Remote Access",
          ],
        };
      case "tracking":
        return {
          description:
            "Comprehensive tracking solutions with GPS integration and real-time location services.",
          features: [
            "Real-time GPS",
            "Geofencing",
            "Route Optimization",
            "Asset Management",
          ],
          benefits: [
            "Improved Efficiency",
            "Cost Reduction",
            "Better Planning",
            "Asset Protection",
          ],
        };
      case "safety":
        return {
          description:
            "Critical safety systems designed to protect lives and prevent accidents through automated detection.",
          features: [
            "Automated Detection",
            "Instant Alerts",
            "Emergency Response",
            "Compliance Monitoring",
          ],
          benefits: [
            "Life Protection",
            "Risk Mitigation",
            "Regulatory Compliance",
            "Peace of Mind",
          ],
        };
      default:
        return {
          description:
            "Innovative solution designed to meet your specific security and operational needs.",
          features: [
            "Custom Features",
            "Scalable Design",
            "Easy Integration",
            "24/7 Support",
          ],
          benefits: [
            "Tailored Solution",
            "Future-Ready",
            "Seamless Integration",
            "Reliable Support",
          ],
        };
    }
  }

  const content = getDetailedContent();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
          Back to Solutions
        </motion.button>

        <div
          className={`bg-gradient-to-r ${colors.bg} rounded-3xl p-8 mb-8 border ${colors.border}`}
        >
          <div className="flex items-center mb-6">
            <div className="p-4 bg-white rounded-2xl mr-6">
              <IconComponent className={`w-12 h-12 ${colors.icon}`} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {solution.title}
              </h1>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${colors.icon} bg-white/60 capitalize`}
              >
                {solution.category}
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div>
          {solution?.details?.features?.map((feature, index) => (
            <div key={index}>{feature}</div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Securitysolutions() {
  const navigate = useNavigate();

  const handleCardClick = (solution) => {
    navigate(`/security/${solution.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6">
          {securitySolutions.map((solution, index) => (
            <SecurityCard
              key={solution.id}
              solution={solution}
              index={index}
              onClick={() => handleCardClick(solution)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Securitysolutions;
