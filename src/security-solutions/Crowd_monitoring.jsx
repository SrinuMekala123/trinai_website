import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Building,
  Plane,
  Users,
  MapPin,
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
  TrendingUp,
  Navigation,
  BarChart3,
  Clock,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI Crowd Detection System.jpg";

const features = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    desc: "Instant notifications when crowd density reaches dangerous thresholds or congestion occurs.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Proactive Safety",
    desc: "Prevent overcrowding incidents before they escalate into dangerous situations.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Comprehensive insights and analytics for better planning and operational improvements.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Layers,
    title: "Scalable Monitoring",
    desc: "Adaptable solution for small venues to massive public areas and events.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Visitor Experience",
    desc: "Ensure safer and smoother people movement for better overall experience.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    desc: "Advanced algorithms analyze crowd patterns and predict potential issues.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Users,
    title: "Public Events & Festivals",
    desc: "Monitor massive gatherings and prevent crowd-related accidents",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Plane,
    title: "Transportation Hubs",
    desc: "Control crowd flow at airports, bus stations, and train terminals",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building,
    title: "Shopping Centers & Malls",
    desc: "Manage visitor flow during peak hours and special events",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Activity,
    title: "Sports & Entertainment",
    desc: "Enhance spectator safety at stadiums, concerts, and venues",
    color: "from-purple-500 to-pink-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "AI cameras continuously analyze crowd density and movement patterns in real-time",
    icon: Camera,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "Advanced algorithms process crowd data and identify potential congestion points",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Instant notifications sent when crowd thresholds are exceeded or risks detected",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated crowd management protocols activated to ensure safety and flow",
    icon: Zap,
  },
];

const monitoringCapabilities = [
  {
    icon: Navigation,
    title: "Movement Patterns",
    desc: "Track crowd movement patterns and flow directions",
  },
  {
    icon: AlertTriangle,
    title: "Congestion Detection",
    desc: "Identify bottlenecks and potential crowd buildup areas",
  },
  {
    icon: Bell,
    title: "Threshold Alerts",
    desc: "Notify security when crowd density reaches critical levels",
  },
  {
    icon: MapPin,
    title: "Zone Density",
    desc: "Calculate and monitor crowd density in specific areas",
  },
];

const benefits = [
  "Early Warnings – Alerts when zones approach dangerous capacity levels",
  "Efficient Crowd Management – Facilitates smoother people flow and movement",
  "Safety & Compliance – Helps organizations meet safety regulations and standards",
  "Incident Prevention – Reduces risk of accidents in crowded environments",
  "Operational Insights – Provides data for future planning and improvements",
];

export default function Crowd_monitoring() {
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
        {/* <img src={banner} className=" w-fit h-full" /> */}

        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" /> */}

        {/* <img src={banner} /> */}

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
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                AI-Powered Crowd Analytics
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">Crowd Monitoring</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered surveillance that provides real-time insights
              into crowd density, movement patterns, and safety management
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
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Monitor className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Large crowd management, either in public areas or private
              functions, has its own set of safety and security issues. Crowd
              Monitoring technology in CCTV surveillance gives live information
              about crowd volume, density, and movement behavior. Through the
              fusion of AI-based analytics and high-definition video, it allows
              authorities and organizations to detect risks in advance, avoid
              over-densification, and maintain smooth operations in crowded
              settings.
            </p>
          </div>
        </motion.section>

        {/* What is Crowd Monitoring */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50  rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is Crowd Monitoring?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Crowd Monitoring is an intelligent surveillance capability that
              provides comprehensive insights into crowd behavior and safety.
              The system continuously analyzes crowd dynamics to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-white/50 rounded-xl p-4"
                >
                  <capability.icon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {capability.title}
                    </h4>
                    <p className="text-sm text-gray-600">{capability.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
          <div className="bg-gradient-to-br from-blue-50 to-teal-50  rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              Why Does Crowd Monitoring Matter?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Overcrowding, stampedes, and bottlenecks can get out of hand in no
              time and risk lives. Conventional human monitoring is tardy and
              responsive, but AI-driven Crowd Monitoring provides:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white/50 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
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
              Trinai's Crowd Monitoring systems use advanced AI analytics to
              continuously assess crowd behavior, density, and movement
              patterns. The system provides real-time insights and automated
              responses to ensure safety and optimal crowd management.
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
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00ADE7] to-[#305292]  rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
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
      </div>

      <div className="bg-white">
        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5 bg-gradient-to-br from-blue-50 to-teal-50"
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
          className="lg:p-20 p-5"
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
          <div className="bg-gradient-to-b r from-[#00ADE7] to-[#305292] rounded-3xl p-12 text-center text-white relative overflow-hidden">
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
                <Users className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Trinai's Crowd Monitoring solutions blend AI smarts with
                real-time precision to provide organizations with complete
                visibility and control over crowd behavior. Instant alerts,
                trustworthy analytics, and easy integration with existing
                systems - Trinai makes crowd management safer, more organized,
                and effective. Whether it's an open public celebration, a
                corporate event, or a transport station, Trinai enables you to
                protect people and ensure order with confidence.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
