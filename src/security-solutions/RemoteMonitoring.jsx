import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Smartphone,
  Cloud,
  Home,
  Building,
  Users,
  Shield,
  Video,
  Bell,
  ArrowRight,
  Monitor,
  Wifi,
  Lock,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Play,
  Construction,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Watch live video",
    desc: "Access real-time footage from anywhere with crystal clear quality.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Video,
    title: "Retrieve previous video recordings",
    desc: "Review past events and incidents with advanced search capabilities.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Shield,
    title: "Control PTZ functions",
    desc: "Remotely pan, tilt, and zoom your cameras with precision control.",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Bell,
    title: "Receive real-time alerts",
    desc: "Get instant notifications for security events via multiple channels.",
    color: "from-[#00ADE7] to-[#305292]",
  },
];

const applications = [
  {
    icon: Home,
    title: "Home Security",
    desc: "View your home 24/7",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Building,
    title: "Business",
    desc: "Monitor your staff, assets, and visitor activity",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Construction,
    title: "Construction Sites",
    desc: "View updates and theft",
    color: "from-[#00ADE7] to-[#305292]",
  },
  {
    icon: Users,
    title: "Apartments",
    desc: "Check entrance, hallways, and parking areas remotely",
    color: "from-[#00ADE7] to-[#305292]",
  },
];

export default function RemoteMonitoring() {
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
        className="relative overflow-hidden  h-[400px]  border bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww')] bg-cover bg-center"
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-black" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" /> */}

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
              <Monitor className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">
                Advanced Security Technology
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black to-black  bg-clip-text text-transparent">
                Remote Monitoring: Real-Time Surveillance from Anywhere
              </span>
            </h1>
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
              Thousands of security cameras are installed every day, which helps
              to maintain safer spaces for children, the elderly, and the
              general population. The majority of new camera installations
              provide full remote access. You can now watch and check control
              capabilities anywhere in the world via the internet from your
              smartphone, tablet, or computer.
            </p>
          </div>
        </motion.section>

        {/* What is Remote Monitoring */}
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
              Security Anytime, Anywhere{" "}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Remote monitoring allows users to access live and recorded CCTV
              footage over the internet. It gives you full control over
              surveillance systems without being physically present, helping you
              stay informed and react quickly to security incidents.
            </p>
          </div>
        </motion.section>

        {/* Why Remote Monitoring */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/30">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              Why Remote Monitoring?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Remote monitoring provides constant visibility and control over
              your buildings and properties even if you can't physically be
              there. For businesses, gated communities, apartments, and remote
              sites, remote monitoring can provide unlimited benefits.
            </p>
          </div>
        </motion.section>
      </div>

      <div className="bg-white ">
        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-blue-50 to-teal-50 p-5 lg:p-20 "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              TRINAI cameras send video via the internet to a secure cloud-based
              server or local server for review and storage. Authorized users
              can access the live video feed and reports either through the
              TRINAI app or a web portal. Users have access to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          className="mb-20 lg:px-20"
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
                With TRINAI remote monitoring, your security goes with you.
                Whether you are working, traveling, or sleeping, you can stay in
                control with real-time notifications, unlimited visibility, and
                remote control all at your fingertips.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
