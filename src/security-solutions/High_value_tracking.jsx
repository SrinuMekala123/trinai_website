import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Package,
  Bell,
  Barcode,
  Cloud,
  Server,
  Building,
  Hospital,
  Truck,
  ArrowRight,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Object Recognition & Tagging",
    desc: "Identify and tag high-value items automatically with advanced AI-powered visual recognition technology.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Package,
    title: "Real-Time Tracking Across Zones",
    desc: "Monitor asset movement throughout your facility with precise location tracking and zone-based alerts.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Bell,
    title: "Instant Alerts for Unauthorized Movement",
    desc: "Get notified immediately if assets are moved without approval through multiple communication channels.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Barcode,
    title: "Integration with RFID & Barcode Systems",
    desc: "Combine CCTV with RFID/barcode for seamless tracking and comprehensive asset management.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "Remote Viewing & Audit Trail Support",
    desc: "Access live feeds and historical movement logs from anywhere with secure cloud-based access.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Shield,
    title: "Dashboard Reports for Asset Usage History",
    desc: "Review asset location, usage patterns, and security events with comprehensive analytics.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Building,
    title: "Banks & Financial Institutions",
    desc: "Track cash, valuables, and sensitive documents with military-grade security",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Server,
    title: "Data Centers & IT Server Rooms",
    desc: "Monitor servers and critical IT hardware with precision tracking",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Hospital,
    title: "Hospitals (Medical Equipment)",
    desc: "Secure and track expensive medical devices and equipment",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Truck,
    title: "Construction Sites & Tool Storage",
    desc: "Prevent loss of tools and machinery with smart monitoring",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Package,
    title: "Warehouses with Expensive Inventory",
    desc: "Protect high-value stock and shipments with intelligent surveillance",
    color: "from-yellow-500 to-orange-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Asset Recognition",
    desc: "AI cameras identify and catalog high-value items using advanced object recognition",
    icon: Eye,
  },
  {
    step: "2",
    title: "Movement Tracking",
    desc: "Real-time monitoring of asset location and movement patterns across zones",
    icon: Package,
  },
  {
    step: "3",
    title: "Alert Generation",
    desc: "Instant notifications for unauthorized movement or suspicious activity",
    icon: Bell,
  },
  {
    step: "4",
    title: "Audit & Report",
    desc: "Comprehensive logging and reporting for compliance and security analysis",
    icon: Monitor,
  },
];

const High_value_tracking = () => {
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
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-indigo-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" /> */}

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
              <Shield className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Intelligent Asset Protection
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                High-Value Asset Tracking
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Intelligent monitoring for your most valuable resources with Smart
              Surveillance
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
              Every day, organizations rely on smart surveillance systems to
              protect high-value assets—electronics, machinery, confidential
              data, or inventory. TRINAI's advanced CCTV and AI technology allow
              you to track, monitor, and secure your most valuable items with
              precision, even across large or complex environments.
            </p>
          </div>
        </motion.section>

        {/* What is High-Value Asset Tracking */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-indigo-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Package className="w-8 h-8 text-blue-400 mr-3" />
              What is High-Value Asset Tracking?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              High-Value Asset Tracking uses CCTV, GPS, RFID, and IoT
              technologies to monitor the location, movement, and status of
              valuable items in real-time. It ensures critical assets remain
              secure, accounted for, and traceable at all times.
            </p>
          </div>
        </motion.section>

        {/* Why Is High-Value Asset Tracking Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50  rounded-3xl p-8 border border-yellow-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
              Why Is High-Value Asset Tracking Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Assets like expensive tools, equipment, and sensitive materials
              are common targets for theft or misuse. Manual tracking is
              inefficient and error-prone. Smart tracking reduces losses,
              improves accountability, and ensures assets are where they should
              be—when they should be.
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
              Intelligent CCTV cameras and integrated software track asset
              movement in real-time. AI algorithms recognize specific objects,
              detect unusual handling, or flag unauthorized removal. Alerts are
              sent instantly, and footage is recorded for review.
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
            className="bg-gradient-to-r from-yellow-600 to-indigo-600 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center mx-auto text-lg"
          >
            Get Started with Asset Tracking
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
                <Shield className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                With TRINAI's high-value asset tracking, your most important
                resources are always under intelligent watch. For loss
                prevention, compliance, or operational efficiency—our smart
                system ensures nothing goes unnoticed.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default High_value_tracking;
