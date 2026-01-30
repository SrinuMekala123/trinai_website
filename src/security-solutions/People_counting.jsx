import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Eye,
  BarChart2,
  Building,
  Store,
  CalendarCheck,
  ArrowRight,
  Activity,
  Globe,
  AlertTriangle,
  TrendingUp,
  Zap,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI People Counting.jpg";

const features = [
  {
    icon: Activity,
    title: "Real-Time Foot Traffic Tracking",
    desc: "Monitor people movement and occupancy levels with instant updates and live analytics.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BarChart2,
    title: "Peak Hours & Flow Analysis",
    desc: "Analyze traffic patterns, identify busy periods, and optimize resource allocation.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Resource Optimization",
    desc: "Optimize staffing, cleaning schedules, and facility management based on occupancy data.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Eye,
    title: "Occupancy Compliance",
    desc: "Ensure safety regulations and capacity limits are maintained automatically.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Building,
    title: "Smart Building Integration",
    desc: "Connect with HVAC, lighting, and energy systems for intelligent facility management.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics & Reporting",
    desc: "Generate detailed reports and insights for data-driven decision making.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Store,
    title: "Retail Stores & Shopping Centers",
    desc: "Understand customer journey patterns and improve conversion rates",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: CalendarCheck,
    title: "Airports & Transit Stations",
    desc: "Manage passenger flow, reduce queues, and enhance travel experience",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building,
    title: "Offices & Manufacturing",
    desc: "Track employee movement, optimize space usage, and improve productivity",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Events & Sports Venues",
    desc: "Manage crowd flow, ensure safety, and plan for emergency situations",
    color: "from-purple-500 to-pink-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "HD cameras identify and track human shapes at entry/exit points",
    icon: Eye,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "AI algorithms filter objects, remove shadows, and prevent duplicate counts",
    icon: BarChart2,
  },
  {
    step: "3",
    title: "Tracking",
    desc: "System monitors movement patterns and occupancy levels in real-time",
    icon: Activity,
  },
  {
    step: "4",
    title: "Insights",
    desc: "Generate actionable reports and alerts for optimal space management",
    icon: TrendingUp,
  },
];

const People_counting = () => {
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
        className="relative overflow-hidden h-[400px]  border 
"
      >
        <img src={banner} className=" w-full h-full" alt="banner" />

        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" /> */}
        {/* 
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
                AI-Powered People Analytics
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                People Counting in CCTV Surveillance
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Real-time insights for smarter crowd management and operational
              optimization
            </p>
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
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              People counting uses AI and video analytics to count the number of
              people entering, exiting, and moving through a defined area in
              real-time. This technology transforms raw foot traffic data into
              actionable insights for better business decisions and operational
              efficiency.
            </p>
          </div>
        </motion.section>

        {/* What is People Counting */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-400 mr-3" />
              What is People Counting?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              People counting uses AI-enabled CCTV cameras to detect and count
              individuals entering, exiting, or moving through a defined area.
              It provides accurate data on human movement patterns without
              manual effort, enabling businesses to make informed decisions
              about space utilization and resource allocation.
            </p>
          </div>
        </motion.section>

        {/* Why People Counting is Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-indigo-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-indigo-600 mr-3" />
              Why People Counting?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              People counting helps manage crowds, improve operations and
              safety, and enables data-driven decisions in malls, offices,
              events, airports, and public transit. It provides crucial insights
              for optimizing customer experience, ensuring compliance with
              capacity limits, and maximizing operational efficiency.
            </p>
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
              TRINAI's people counting uses high-definition cameras mounted
              above entry points to identify human shapes and track movements.
              Advanced algorithms filter non-human objects, remove shadows, and
              prevent duplicate counts for maximum accuracy.
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
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
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

      <div className=" bg-white">
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
              Key Benefits
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
          className=""
        >
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 text-center text-white relative overflow-hidden">
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
                <BarChart2 className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                TRINAI People Counting provides actionable insights to optimize
                space, increase efficiency, and improve visitor experiences
                using intelligent automation—all while enhancing security and
                operational intelligence.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default People_counting;
