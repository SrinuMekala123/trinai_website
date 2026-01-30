import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Building,
  Home,
  Server,
  Radio,
  ArrowRight,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI Perimeter Intrusion Detection.jpg";

const features = [
  {
    icon: Radio,
    title: "Virtual Fence & Tripwire",
    desc: "Invisible boundaries and tripwires for instant detection with AI-powered precision.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    desc: "Immediate notifications and alarms for security teams via multiple channels.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Activity Detection",
    desc: "Advanced AI detects climbing, jumping, or crawling near perimeters with high accuracy.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "All-Weather Operation",
    desc: "Reliable operation in all weather conditions with thermal and night vision capabilities.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "System Integration",
    desc: "Seamlessly connects with lighting, sirens, access control, and existing security systems.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    desc: "Machine learning algorithms reduce false alarms and improve threat detection accuracy.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Building,
    title: "Industrial Facilities",
    desc: "Protect warehouses, manufacturing plants, and industrial complexes",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Airports & Military",
    desc: "Secure critical infrastructure with military-grade protection",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Home,
    title: "Residential Communities",
    desc: "Safeguard apartments, gated communities, and residential areas",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "Critical Infrastructure",
    desc: "Protect power plants, data centers, and utility facilities",
    color: "from-purple-500 to-pink-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "AI cameras analyze movement patterns and detect intrusion attempts",
    icon: Eye,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "Advanced algorithms classify threats and filter false alarms",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Instant notifications sent to security teams with precise location data",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated systems activate lighting, alarms, and emergency protocols",
    icon: Zap,
  },
];

export default function PID() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[400px] border bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Your First Line of Defense{" "}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white bg-clip-text ">
                PID – Perimeter Intrusion Detection
              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Advanced protection for your property's boundaries with AI-powered
              threat detection
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Advanced remote monitoring systems, known as perimeter intrusion
              detection systems (PID), are installed to stop unauthorized entry.
              These systems use sensors, video, and analytics to detect breaches
              across protected areas, sending real-time alerts so security teams
              can respond instantly from anywhere.
            </p>
          </div>
        </motion.section>

        {/* What is PID */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is PID?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perimeter Intrusion Detection (PID) monitors the outer boundaries
              of a property using CCTV and sensors. It detects unauthorized
              access attempts like climbing fences or breaching gates and sends
              real-time alerts for quick action.
            </p>
          </div>
        </motion.section>

        {/* Why PID is Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why is PID Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your perimeter security is your first line of defence. Detecting
              and responding to intrusions quickly helps mitigate theft,
              vandalism, and larger threats. PID is essential for safety and
              operational integrity.
            </p>
          </div>
        </motion.section>

        {/* How PID Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How PID Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CCTV with AI analyzes motion and detects movement near fences,
              walls, or access points. The system uses virtual tripwires,
              pattern analysis, and object classification to determine
              suspicious activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-10 h-10 bg-gradient-to-r 
from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3"
                  >
                    {process.step}
                  </div>
                  <process.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        {/* <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto text-lg"
          >
            Get Started with PID
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.section> */}
      </div>

      <div className="bg-white">
        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5 bg-gradient-to-br from-blue-50 to-teal-50 "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      feature.color.split(" ")[1]
                    }, ${feature.color.split(" ")[3]})`,
                  }}
                />

                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#00ADE7] to-[#305292] mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.desc}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Applications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5 "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-xl p-4 w-fit mb-4`}
                >
                  <app.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Trinai Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                TRINAI's PID technology guarantees no intrusion goes undetected.
                With AI-based recognition and instant alerts, you can minimize
                threats and protect what matters most with unparalleled
                precision and reliability.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
