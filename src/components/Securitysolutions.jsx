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
  //   { id: "none1", icon: Home, title: "None", category: "other" },
  //   { id: "none2", icon: Home, title: "None", category: "other" },
];

const categoryColors = {
  surveillance: {
    bg: "from-white to-white",
    icon: "text-[#27AAE1]",
    hover: "hover:from-[#00ADE7] hover:to-[#305292]",
    border: "border-blue-200",
  },
  tracking: {
    bg: "from-white to-white",
    icon: "text-[#27AAE1]",
    hover: "hover:from-[#00ADE7] hover:to-[#305292]",
    border: "border-blue-200",
  },
  safety: {
    bg: "from-white to-white",
    icon: "text-[#27AAE1]",
    hover: "hover:from-[#00ADE7] hover:to-[#305292]",
    border: "border-blue-200",
  },
  passenger: {
    bg: "from-white to-white",
    icon: "text-[#27AAE1]",
    hover: "hover:from-[#00ADE7] hover:to-[#305292]",
    border: "border-blue-200",
  },
  other: {
    bg: "from-white to-white",
    icon: "text-[#27AAE1]",
    hover: "hover:from-[#00ADE7] hover:to-[#305292]",
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
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative cursor-pointer
        // bg-gradient-to-br ${colors.bg} ${colors.hover}
        border ${colors.border}
        p-6 
        shadow-sm hover:shadow-lg
        transition-all duration-300
        flex flex-col items-center justify-center
        min-h-[140px]
        overflow-hidden
      `}
      style={{ borderRadius: "2.5rem" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />

      {/* Icon */}
      <div
        className={`
        p-3 rounded-xl mb-3
        bg-white/60 group-hover:bg-white
        transition-all duration-300
        group-hover:scale-110
      `}
      >
        <img className={`w-14 h-14 ${colors.icon}`} src={IconComponent} />
        {/* <IconComponent className={`w-8 h-8 ${colors.icon}`} /> */}
      </div>

      {/* Title */}
      <h3 className="text-sm  font-semibold text-gray-800 text-center leading-tight group-hover:text-white transition-colors duration-300">
        {solution.title}
      </h3>

      {/* Hover arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-3 right-3"
      >
        <ArrowRight className="w-4 h-4 text-gray-400" />
      </motion.div>
    </motion.div>
  );
}

function DetailView({ solution, onBack }) {
  const IconComponent = solution.icon;
  const colors = categoryColors[solution.category];

  // Mock detailed content based on category
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
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
          Back to Solutions
        </motion.button>

        {/* Header */}
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

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
              Key Features
            </h2>
            <div className="space-y-4">
              {solution?.details?.features?.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-xl"
                >
                  <div className={`w-2 h-2 rounded-full  mr-4`} />
                  <span className="font-medium text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div> */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
              Key Features
            </h2>
            <div className="space-y-4">
              {content.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-xl"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${colors.icon.replace(
                      "text-",
                      "bg-"
                    )} mr-4`}
                  />
                  <span className="font-medium text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Benefits */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-green-500" />
              Benefits
            </h2>
            <div className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-4" />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-8 py-4 rounded-2xl font-bold text-white
              bg-gradient-to-r ${
                colors.icon.includes("blue")
                  ? "from-blue-500 to-blue-600"
                  : colors.icon.includes("emerald")
                  ? "from-emerald-500 to-emerald-600"
                  : colors.icon.includes("orange")
                  ? "from-orange-500 to-orange-600"
                  : "from-gray-500 to-gray-600"
              }
              hover:shadow-lg transition-all duration-300
              flex items-center mx-auto
            `}
          >
            Get Started with {solution.title}
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div> */}
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6">
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
