import React from "react";
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
} from "lucide-react";

import image from "../images/smartbus/icons/smartbus.jpeg";
import a1 from "../images/smartbus/whychoose/1.jpeg";
import a2 from "../images/smartbus/whychoose/2.jpeg";

import a3 from "../images/smartbus/whychoose/3.jpeg";

import a4 from "../images/smartbus/whychoose/4.jpeg";

const services = [
  {
    category: "Surveillance & Safety",
    image: a1,
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    bgGradient: "from-blue-50 to-indigo-100",
    items: [
      {
        icon: Camera,
        title: "Entry Camera",
        description:
          "Captures passengers boarding and alighting, improving security and tracking flow.",
        color: "text-blue-600",
      },
      {
        icon: Eye,
        title: "Blind Spot Camera",
        description:
          "Covers driver's invisible zones, reducing accident risks for pedestrians, cyclists, and nearby vehicles.",
        color: "text-indigo-600",
      },
      {
        icon: Car,
        title: "Front & Road Cameras",
        description:
          "Record traffic conditions and driver responses while providing real-time collision detection and alerts.",
        color: "text-purple-600",
      },
      {
        icon: AlertTriangle,
        title: "Driver Monitoring Camera",
        description:
          "Uses AI to detect fatigue, distraction, and unsafe behavior, issuing instant alerts.",
        color: "text-blue-700",
      },
      {
        icon: Shield,
        title: "Cabin Camera",
        description:
          "Ensures 24/7 passenger safety, prevents vandalism, and supports dispute resolution.",
        color: "text-indigo-700",
      },
    ],
  },
  {
    category: "Tracking & Connectivity",
    image: a2,
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    bgGradient: "from-emerald-50 to-teal-100",
    items: [
      {
        icon: MapPin,
        title: "GPS Tracking",
        description:
          "Enables real-time location monitoring, route adherence, geofencing, and driver behavior analysis. Provides accurate ETAs and improves emergency response.",
        color: "text-emerald-600",
      },
      {
        icon: Wifi,
        title: "Onboard WiFi",
        description:
          "Offers passengers seamless internet access for work, entertainment, and communication, while enabling data-driven fleet operations.",
        color: "text-teal-600",
      },
    ],
  },
  {
    category: "Passenger Information Systems",
    image: a3,
    gradient: "from-violet-500 via-purple-600 to-fuchsia-700",
    bgGradient: "from-violet-50 to-purple-100",
    items: [
      {
        icon: Monitor,
        title: "LED Signage Boards",
        description:
          "Internal and external LED displays share next-stop updates, routes, and safety alerts in multiple languages. Supports emergency broadcasting and real-time updates from control centers.",
        color: "text-violet-600",
      },
      {
        icon: Mic,
        title: "Integrated PA System",
        description:
          "Ensures clear, instant communication through driver microphones or central control announcements.",
        color: "text-purple-600",
      },
    ],
  },
  {
    category: "Safety Enhancements",
    image: a4,
    gradient: "from-orange-500 via-red-600 to-pink-700",
    bgGradient: "from-orange-50 to-red-100",
    items: [
      {
        icon: Navigation,
        title: "Breath Analyser System",
        description:
          "Prevents bus ignition if the driver is under the influence of alcohol, ensuring strict compliance with safety norms.",
        color: "text-orange-600",
      },
      {
        icon: Flame,
        title: "Foam Fire Suppression System",
        description:
          "Automated sensors detect heat or flames and release foam instantly, protecting passengers and assets with zero human dependency.",
        color: "text-red-600",
      },
    ],
  },
];

function FloatingElement({ delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-xl ${className}`}
    />
  );
}

function ServiceCard({ item, index, isEven }) {
  const IconComponent = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${item.color.replace(
              "text-",
              "from-"
            )} to-gray-100 group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className={`w-6 h-6 ${item.color}`} />
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
        <h3
          className={`text-xl font-bold ${item.color} mb-3 group-hover:scale-105 transition-transform duration-300 origin-left`}
        >
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function CategorySection({ service, index }) {
  const isEven = index % 2 === 0;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`relative py-20 overflow-hidden ${
        isEven ? "bg-white" : `bg-gradient-to-br ${service.bgGradient}`
      }`}
    >
      <FloatingElement
        delay={0}
        className="top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200"
      />
      <FloatingElement
        delay={2}
        className="top-32 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200"
      />
      <FloatingElement
        delay={4}
        className="bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-200 to-pink-200"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            isEven ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          <div className={`space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles
                  className={`w-8 h-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mr-3`}
                />
                <div
                  className={`h-px flex-1 bg-gradient-to-r ${service.gradient} max-w-20`}
                />
              </div>
              <h2
                className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6 leading-tight`}
              >
                {service.category}
              </h2>
              <div
                className={`w-24 h-1 bg-gradient-to-r ${service.gradient} ${
                  isEven ? "mx-auto lg:mx-0" : "mx-auto lg:ml-auto lg:mr-0"
                } rounded-full mb-8`}
              />
            </motion.div>
            <div className="space-y-6">
              {service.items.map((item, itemIndex) => (
                <ServiceCard
                  key={item.title}
                  item={item}
                  index={itemIndex}
                  isEven={isEven}
                />
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -5 : 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            // transition={{
            //   duration: 1,
            //   type: "spring",
            //   stiffness: 100,
            // }}
            className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-80 lg:h-96  object-fill group-hover:scale-105 transition-transform duration-700"
                />
                {/* <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                /> */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Category
                        </p>
                        <p
                          className={`font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        >
                          {service.category}
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-lg">
                          {service.items.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div> */}
              </div>
              {/* <div
                className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500`}
              />
              <div
                className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500`}
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function Whychooseus() {
  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative py-24 px-6 text-center overflow-hidden bg-gradient-to-br "
      >
        <div className="absolute inset-0">
          <div
            className={`bsolute inset-0 bg-[url(${a1})] bg-cover bg-center opacity-10 `}
          />
          <FloatingElement
            delay={0}
            className="top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400"
          />
          <FloatingElement
            delay={3}
            className="top-40 right-32 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400"
          />
          <FloatingElement
            delay={6}
            className="bottom-32 left-1/3 w-28 h-28 bg-gradient-to-br from-orange-400 to-pink-400"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <Sparkles className="w-12 h-12 text-[#27AAE1] mr-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32" />
            <span className="text-white/80 mx-6 text-lg font-medium">
              Solutions
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32" />
            <Sparkles className="w-12 h-12 text-[#27AAE1] ml-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Why Choose
            <span className="bg-gradient-to-r from-[#27AAE1] via-[#27AAE1] to-[#27AAE1] bg-clip-text text-transparent">
              {" "}
              US
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Revolutionary surveillance, safety, and connectivity solutions that
            transform modern transportation with cutting-edge technology and
            uncompromising safety standards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-white/70"
          >
            {[
              "Advanced AI",
              "Real-time Monitoring",
              "24/7 Safety",
              "Smart Analytics",
            ].map((feature, index) => (
              <div
                key={feature}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <div className="relative">
        {services.map((service, index) => (
          <CategorySection
            key={service.category}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Call to Action */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-24 px-6 text-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden"
      >
        <FloatingElement
          delay={0}
          className="top-16 left-16 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400"
        />
        <FloatingElement
          delay={2}
          className="bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-400"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            Ready to Transform Your
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Fleet?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied customers who have revolutionized their
            transportation systems with our comprehensive solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg px-10 py-4 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm text-white font-bold text-lg px-10 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section> */}
    </div>
  );
}

export default Whychooseus;
