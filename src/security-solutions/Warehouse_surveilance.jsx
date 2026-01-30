import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Shield,
  Truck,
  Bell,
  Video,
  Cloud,
  Warehouse,
  FireExtinguisher,
  ArrowRight,
  Building,
  Users,
  Package,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Full HD Video Recording with Night Vision",
    desc: "Crystal-clear footage day and night for all warehouse zones with advanced night vision technology.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Bell,
    title: "Motion Detection & Intrusion Alerts",
    desc: "Instant notifications for unauthorized access or suspicious movement with AI-powered precision.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Smart Tracking of People & Vehicles",
    desc: "Monitor staff, visitors, and vehicle movement in real time with advanced tracking algorithms.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: FireExtinguisher,
    title: "Fire & Smoke Detection Integration",
    desc: "Early warning system for fire hazards and safety breaches with immediate alert capabilities.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "Remote Monitoring & Mobile Access",
    desc: "View live feeds and alerts from anywhere, anytime with secure cloud-based access.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Warehouse,
    title: "Integration with WMS",
    desc: "Connect surveillance with warehouse management systems for seamless operational control.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Truck,
    title: "Logistics Hubs & Distribution Centers",
    desc: "Comprehensive security for high-traffic distribution facilities",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Package,
    title: "Cold Storage Facilities",
    desc: "Specialized monitoring for temperature-controlled storage environments",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building,
    title: "Manufacturing Unit Warehouses",
    desc: "Industrial-grade surveillance for manufacturing storage facilities",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Warehouse,
    title: "E-commerce Fulfillment Centers",
    desc: "Real-time monitoring for fast-paced e-commerce operations",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Import/Export Storage Yards",
    desc: "Secure monitoring for international trade storage facilities",
    color: "from-yellow-500 to-orange-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Strategic Placement",
    desc: "Cameras positioned at key areas like entry points, loading bays, and high-value zones",
    icon: Eye,
  },
  {
    step: "2",
    title: "AI Analysis",
    desc: "Advanced analytics detect motion, unauthorized access, and safety breaches",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Real-Time Alerts",
    desc: "Instant notifications sent to security teams with precise location data",
    icon: Bell,
  },
  {
    step: "4",
    title: "Remote Access",
    desc: "Live feeds accessible remotely with mobile apps and web interfaces",
    icon: Monitor,
  },
];

const Warehouse_surveillance = () => {
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
        className="relative overflow-hidden h-[400px]  border bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww')] bg-cover bg-center"
      >
        {/* Background Elements */}

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
              <Warehouse className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Smart Warehouse Security
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text  ">
                Warehouse Surveillance
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              24/7 protection for assets, inventory, and operations with Smart
              CCTV Solutions
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
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Thousands of security cameras are installed every day to protect
              valuable assets, and warehouses are no exception. With high-value
              inventory and continuous movement of goods, warehouses require
              smart surveillance systems that offer 24/7 monitoring and
              real-time alerts. TRINAI's AI-powered cameras make it easier to
              secure large storage spaces from theft, damage, and unauthorized
              access.
            </p>
          </div>
        </motion.section>

        {/* Why Is Warehouse Surveillance Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br  from-blue-50 to-teal-50 rounded-3xl p-8 border border-indigo-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why Is Warehouse Surveillance Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Warehouses store millions worth of stock and equipment. Without
              proper surveillance, they're vulnerable to internal theft,
              break-ins, and safety violations. A reliable CCTV system helps
              monitor operations, ensure employee safety, and improve inventory
              control while providing complete visibility across your facility.
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
              Strategically placed cameras cover key areas like entry/exit
              points, loading bays, aisles, and high-value zones. AI analytics
              detect motion, unauthorized access, loitering, and safety breaches
              with live feeds accessible remotely.
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
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
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
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto text-lg"
          >
            Get Started with Warehouse Surveillance
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <Warehouse className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                TRINAI's warehouse surveillance ensures smooth, secure
                operations. With smart analytics, real-time alerts, and
                round-the-clock coverage, you can safeguard your goods and
                workforce—no matter the size of your facility.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Warehouse_surveillance;
