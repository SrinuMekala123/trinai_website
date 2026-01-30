import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Factory,
  Warehouse,
  HardHat,
  Users,
  ArrowRight,
  Monitor,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
  Camera,
  Settings,
  CheckCircle,
  FileText,
  Flame,
  Construction,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI Motion Detection.jpg";

const features = [
  {
    icon: Bell,
    title: "Real-Time Notifications",
    desc: "Stay informed with real-time alerts.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Shield,
    title: "Proactive Risk Prevention",
    desc: "Record only when relevant activity occurs.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Settings,
    title: "System Integration",
    desc: "Less requirement for round-the-clock human observation.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Layers,
    title: "Configurable Detection",
    desc: "Facilitates quick response in case of threats.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: FileText,
    title: "Safety Audits & Reporting",
    desc: "Optimal for home, business, and industrial environments.",
    color: "from-[#00ADE7] to-[#305292]",
  },
];

const applications = [
  {
    icon: Factory,
    title: "Captures intrusions and unauthorized access.",
    desc: "Captures intrusions and unauthorized access.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    desc: "Avoid theft and track customer traffic.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Construction,
    title: "Construction Sites",
    desc: "Track sensitive areas and out-of-hours activity.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Users,
    title: "Public Spaces",
    desc: "Secure high-value assets and restricted areas.",
    color: "from-[#00ADE7] to-[#305292]",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Monitoring",
    desc: "Continuous analysis of live CCTV feeds using advanced AI algorithms",
    icon: Camera,
  },
  {
    step: "2",
    title: "Detection",
    desc: "AI identifies predefined risks, unsafe activities, and environmental hazards",
    icon: Eye,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Immediate notifications sent via control rooms, mobile devices, or integrated systems",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated integration with safety systems for immediate preventive action",
    icon: Zap,
  },
];

const hazardTypes = [
  {
    icon: AlertTriangle,
    title: "Walkway Obstructions",
    desc: "Increased response to suspicious behavior",
  },
  {
    icon: Shield,
    title: "Unauthorized Access",
    desc: "Less dependence on human monitoring",
  },
  {
    icon: Flame,
    title: "Environmental Changes",
    desc: "Optimized storage management",
  },
  {
    icon: HardHat,
    title: "Safety Violations",
    desc: "Improved situational awareness",
  },
];

export default function Motiondetection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden  h-[400px]  border "
      >
        <img src={banner} className=" w-full h-full " alt="banner" />
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/20 rounded-full blur-3xl" /> */}

        {/* <div className="relative max-w-7xl mx-auto px-4 py-20">
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
              className=" inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <AlertTriangle className="w-5 h-5 text-orange-600 mr-2 " />
              <span className="text-sm font-semibold text-gray-700">
                Smart Surveillance, Smarter Security
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent">
                Motion Detection in CCTV Surveillance{" "}
              </span>
            </h1>
          </motion.div>
        </div> */}
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
          <div className=" bg-gradient-to-br from-blue-50 to-teal-50  rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Monitor className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Motion Detection (MD) is now a built-in feature which greatly
              boosts the efficiency of CCTV surveillance. Rather than recording
              hours of unimportant footage, MD-empowered cameras smartly detect
              and capture movement, guaranteeing that key incidents are always
              brought to light. With immediate alerts and remote viewing, Motion
              Detection gives property owners and security teams timely,
              actionable intelligence.
            </p>
          </div>
        </motion.section>

        {/* What is Real Time Hazard Detection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-red-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is Motion Detection?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Motion Detection is a smart video monitoring capability that
              employs sophisticated analytics to identify movement in a camera's
              viewing area. As soon as activity is sensed, the system reacts
              automatically—by capturing video, sounding alarms, or alerting
              personnel. Not only does this make things more efficient, but it
              also guarantees that only significant events are recorded,
              conserving storage and making incident reviews easier.
            </p>
            {/* 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hazardTypes.map((hazard, index) => (
                <motion.div
                  key={hazard.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-white/50 rounded-xl p-4"
                >
                  <hazard.icon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {hazard.title}
                    </h4>
                    <p className="text-sm text-gray-600">{hazard.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </div>
        </motion.section>

        {/* Why it Matters */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              Why Motion Detection Matters?{" "}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Continuous manual surveillance is unrealistic and
              resource-intensive. Motion Detection fills the gap by providing
              automated watchfulness. It enhances security through:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Increased response to suspicious behavior",
                "Less dependence on human monitoring",
                "Optimized storage management",
                "Improved situational awareness",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-white/50 rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Motion Detection systems analyze video streams in real time,
              identifying changes between consecutive frames. When motion is
              detected, predefined actions are triggered—such as video
              recording, push notifications, or deterrent measures like lighting
              and sirens. Trinai’s AI-powered Motion Detection minimizes false
              alarms from minor disturbances such as shadows, weather changes,
              or small animal movements, ensuring accuracy and reliability.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {process.step}
                  </div>
                  <process.icon className="w-6 h-6 text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div> */}
        </motion.section>
      </div>

      <div className=" bg-white">
        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 lg:p-20 p-5 ">
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
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
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
          className="py-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:p-20 p-5">
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
                  className={`bg-gradient-to-br ${app.color} rounded-xl p-4 w-fit mb-4`}
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
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
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
                At Trinai, we incorporate cutting-edge AI-based Motion Detection
                in our CCTV systems to provide unparalleled precision and
                reliability. Our technology provides low false alerts, efficient
                video storage, and instant notification of important events.
                With Trinai, business enterprises and residents can trust a
                smarter, safer, and more effective surveillance system.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
