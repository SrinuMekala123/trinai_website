import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Shield,
  Eye,
  Bell,
  Cloud,
  Thermometer,
  Key,
  Building,
  Guitar as Hospital,
  BookOpen,
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
    title: "24/7 Surveillance with Remote Access",
    desc: "Monitor server rooms anytime, anywhere with crystal-clear HD video feeds and intelligent analytics.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Key,
    title: "Access Control Integration (Biometric/RFID)",
    desc: "Restrict entry to authorized personnel only with advanced biometric and RFID authentication systems.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Thermometer,
    title: "Environmental Monitoring",
    desc: "Track temperature and humidity for equipment safety with precision sensors and automated alerts.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts for Motion, Fire, or Tampering",
    desc: "Instant notifications for any anomaly through multiple communication channels and escalation protocols.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Activity,
    title: "Night Vision & Low-Light Performance",
    desc: "Clear monitoring even in dark conditions with advanced infrared and thermal imaging technology.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Video Backup & Logs",
    desc: "Store footage and logs safely for audits with encrypted cloud storage and compliance reporting.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const applications = [
  {
    icon: Server,
    title: "Data Centers",
    desc: "Comprehensive monitoring for mission-critical data center infrastructure",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Building,
    title: "IT Departments in Corporate Offices",
    desc: "Secure monitoring for corporate server rooms and IT infrastructure",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Financial Institutions",
    desc: "High-security monitoring for banking and financial server environments",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Hospital,
    title: "Healthcare & Hospital Systems",
    desc: "HIPAA-compliant monitoring for medical data and patient information systems",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Educational Institutions with Internal Servers",
    desc: "Secure monitoring for academic server rooms and student data systems",
    color: "from-yellow-500 to-orange-500",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Continuous Monitoring",
    desc: "Smart cameras and sensors continuously track server room activity and environmental conditions",
    icon: Eye,
  },
  {
    step: "2",
    title: "Environmental Analysis",
    desc: "AI systems analyze temperature, humidity, and air quality to prevent equipment damage",
    icon: Thermometer,
  },
  {
    step: "3",
    title: "Threat Detection",
    desc: "Advanced algorithms detect unauthorized access, tampering, or security breaches",
    icon: Shield,
  },
  {
    step: "4",
    title: "Instant Response",
    desc: "Real-time alerts and automated responses ensure immediate action on any anomaly",
    icon: Bell,
  },
];

const Server_room_monitoring = () => {
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
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
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
              <Server className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Critical Infrastructure Protection
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-black bg-clip-text ">
                Server Room Monitoring
              </span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Protect your critical infrastructure with AI-powered Smart
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
              Thousands of businesses depend on servers to run their operations
              smoothly. Monitoring server rooms is more important than ever.
              With TRINAI's advanced CCTV and sensor integration, organizations
              ensure around-the-clock protection against unauthorized access,
              overheating, and other risks—remotely, from anywhere.
            </p>
          </div>
        </motion.section>

        {/* What is Server Room Monitoring */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-indigo-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Server className="w-8 h-8 text-blue-400 mr-3" />
              What is Server Room Monitoring?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Server Room Monitoring keeps constant watch over server rooms
              using smart CCTV, environmental sensors, and access control
              systems. It tracks temperature, humidity, unauthorized access,
              equipment status, and physical intrusions to prevent data breaches
              or hardware damage.
            </p>
          </div>
        </motion.section>

        {/* Why Is Server Room Monitoring Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
              Why Is Server Room Monitoring Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Server rooms contain sensitive equipment and critical data. Any
              breach—physical intrusion, temperature fluctuation, or fire
              risk—can lead to costly downtime, data loss, or security threats.
              Monitoring helps prevent incidents before they happen.
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
              TRINAI's smart cameras and sensors continuously track activity in
              and around the server room. Motion detection, door entry logging,
              temperature/humidity alerts, and real-time video feed ensure any
              anomaly triggers immediate notifications.
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
            Get Started with Server Room Monitoring
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
                <Server className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold mb-6">Why Trinai?</h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                With TRINAI's intelligent server room monitoring, your critical
                infrastructure is always protected. Stay ahead of risks and
                ensure uninterrupted business continuity—backed by real-time
                alerts and smart AI surveillance.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Server_room_monitoring;
